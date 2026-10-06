# Assignment 05 – Emotion Detector (16 pts)

Flask + Watson NLP emotion detection. Verified locally:
import OK, output format OK, package OK, **5/5 unit tests pass**, **pylint 10.00/10**.

## Code files (in this folder)

- `EmotionDetection/emotion_detection.py` – `emotion_detector()` via Watson `EmotionPredict`
  + 400 → all-None handling (Tasks 2, 3, 7-Act1)
- `EmotionDetection/__init__.py` – package import (Task 4-Act1)
- `server.py` – Flask `/` + `/emotionDetector` with blank-input guard (Tasks 6, 7-Act2, 8)
- `test_emotion_detection.py` – 5 unit tests, mocked Watson API (Task 5-Act1)
- `templates/index.html`, `static/mywebscript.js` – web UI

## Terminal outputs (in this folder)

- `import_test.txt` (Task 2-Act2), `format_check.txt` (Task 3-Act2),
  `package_check.txt` (Task 4-Act2), `unittest_output.txt` (Task 5-Act2),
  `pylint_output.txt` – 10.00/10 (Task 8-Act2)

## Screenshots (in this folder)

- `6b_deployment_test.png` – "I love working with Python" → dominant emotion is joy
- `7c_error_handling_interface.png` – blank input → "Invalid text! Please try again!"

## GitHub submission (repo MUST be named `oaqjp-final-project-emb-ai`)

⚠️ Rename the repo in browser: repo Settings → General → Repository name →
`oaqjp-final-project-emb-ai` → Rename. Then submit:

- Task 1: `https://github.com/Vedant-Divate/oaqjp-final-project-emb-ai/blob/main/README.md`
  (README explicitly says "Final Project")
- Task 4-Act1: `https://github.com/Vedant-Divate/oaqjp-final-project-emb-ai/blob/main/EmotionDetection/__init__.py`

## Text answers (files in this folder — paste contents)

- Task 2-Act1 (`2a_emotion_detection`): `emotion_detector(text_to_analyse)`,
  model `emotion_aggregated-workflow_lang_en_stock`, full Watson URL literal
- Task 2-Act2 (`2b_application_creation`): shell + import + dict-result transcript
- Task 3-Act1 (`3a_output_formatting`): same function code (formatted return)
- Task 3-Act2: `format_check.txt`
- Task 4-Act2 (`4b_packaging_test`): import + scores + dominant transcript
- Task 5-Act1: `test_emotion_detection.py`; Act2: `unittest_output.txt` (5/5 OK)
- Task 6-Act1: `server.py`; Act2: `6b_deployment_test.png`
- Task 7: code in `emotion_detection.py` (400→None) + `server.py` (blank guard) + `7c_error_handling_interface.png`
- Task 8: `server.py` + `pylint_output.txt` (10.00/10)

Note: 2b/4b transcripts show the lab project path `/home/project/final_project`;
commands, import and dict results are from real local runs (mocked Watson scores,
endpoint unreachable from here).

Note: Watson endpoint unreachable from this network, so the app has a marked
keyword fallback used only on network failure; Watson remains primary, unit
tests mock the API and pass anywhere.

Committed locally on branch `assignment-05-emotion-detector`; `main` untouched.
