# CodeCraftHub Backend (Option B – Python/Flask)

REST API with full CRUD over `/api/courses`, stored in `courses.json`
(no database required), with CORS enabled for the dashboard.

## Run

```bash
cd backend
pip install -r requirements.txt
python app.py   # http://localhost:5000
```

## Endpoints

- `GET /api/courses` – list all courses
- `GET /api/courses/<id>` – read one course
- `POST /api/courses` – create (`title` required, `status` in draft/published/archived)
- `PUT /api/courses/<id>` – update
- `DELETE /api/courses/<id>` – delete
- `GET /api/stats` – totals per status

All responses are JSON shaped as `{"success": true, "data": …}`
or `{"success": false, "error": …}`.
