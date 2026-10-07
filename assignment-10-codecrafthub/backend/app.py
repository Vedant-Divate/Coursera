"""CodeCraftHub backend (Option B - Python/Flask).

REST API with full CRUD over /api/courses backed by a JSON file
(no database required). Enables CORS so the dashboard can call it
from a browser.
"""

import json
import os

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DATA_FILE = os.path.join(os.path.dirname(__file__), 'courses.json')
STATUSES = ('draft', 'published', 'archived')


def load_courses():
    """Read the course list from the JSON file."""
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, encoding='utf-8') as handle:
        return json.load(handle)


def save_courses(courses):
    """Persist the course list to the JSON file."""
    with open(DATA_FILE, 'w', encoding='utf-8') as handle:
        json.dump(courses, handle, indent=2)


def next_id(courses):
    """Return the next free course id."""
    return max([c['id'] for c in courses], default=0) + 1


def validate(data, partial=False):
    """Validate course payload; return an error message or None."""
    if not partial and not (data.get('title') or '').strip():
        return 'title is required'
    if 'title' in data and not str(data['title']).strip():
        return 'title must not be empty'
    if 'status' in data and data['status'] not in STATUSES:
        return f"status must be one of {', '.join(STATUSES)}"
    return None


@app.route('/api/courses', methods=['GET'])
def list_courses():
    """List all courses."""
    return jsonify({'success': True, 'data': load_courses()})


@app.route('/api/courses/<int:course_id>', methods=['GET'])
def get_course(course_id):
    """Read one course by id."""
    for course in load_courses():
        if course['id'] == course_id:
            return jsonify({'success': True, 'data': course})
    return jsonify({'success': False, 'error': 'Course not found'}), 404


@app.route('/api/courses', methods=['POST'])
def create_course():
    """Create a course."""
    data = request.get_json(force=True, silent=True) or {}
    error = validate(data)
    if error:
        return jsonify({'success': False, 'error': error}), 400
    courses = load_courses()
    course = {
        'id': next_id(courses),
        'title': data['title'].strip(),
        'description': data.get('description', ''),
        'level': data.get('level', 'Beginner'),
        'status': data.get('status', 'draft'),
    }
    courses.append(course)
    save_courses(courses)
    return jsonify({'success': True, 'data': course}), 201


@app.route('/api/courses/<int:course_id>', methods=['PUT'])
def update_course(course_id):
    """Update a course."""
    data = request.get_json(force=True, silent=True) or {}
    error = validate(data, partial=True)
    if error:
        return jsonify({'success': False, 'error': error}), 400
    courses = load_courses()
    for course in courses:
        if course['id'] == course_id:
            for field in ('title', 'description', 'level', 'status'):
                if field in data:
                    course[field] = data[field]
            save_courses(courses)
            return jsonify({'success': True, 'data': course})
    return jsonify({'success': False, 'error': 'Course not found'}), 404


@app.route('/api/courses/<int:course_id>', methods=['DELETE'])
def delete_course(course_id):
    """Delete a course."""
    courses = load_courses()
    remaining = [c for c in courses if c['id'] != course_id]
    if len(remaining) == len(courses):
        return jsonify({'success': False, 'error': 'Course not found'}), 404
    save_courses(remaining)
    return jsonify({'success': True, 'data': {'id': course_id}})


@app.route('/api/stats', methods=['GET'])
def stats():
    """Return total and per-status course counts."""
    courses = load_courses()
    by_status = {s: sum(1 for c in courses if c.get('status') == s) for s in STATUSES}
    return jsonify({'success': True, 'data': {'total': len(courses), 'by_status': by_status}})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
