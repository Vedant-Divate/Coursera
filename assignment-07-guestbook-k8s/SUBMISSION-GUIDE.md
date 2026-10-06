# Assignment 07 – Guestbook on Kubernetes (15 pts)

Guestbook front end + nginx Dockerfile + K8s manifests. YAML validated locally;
Dockerfile COPY/EXPOSE and index title/h1 verified by grep.

## Files

- `Dockerfile` – Go multi-stage build (builder → binary), `COPY public/`, `EXPOSE 3000` (Task 1)
- `main.go`, `go.mod` – guestbook API + static server
- `public/index.html` – title/h1 "Guestbook - v1" (Task 3)
- `public/index-v2.html` – title/h1 "Guestbook - v2" (Task 8; copy over index.html, rebuild as :v2)
- `deployment.yml` – guestbook Deployment, image `us.icr.io/guestbook-ns/guestbook:v1`,
  CPU requests (for HPA) (Task 7 uses `kubectl apply -f deployment.yml`)
- `service.yml`, `hpa.yml` – NodePort service + CPU 50% HPA (Tasks 4–5)

## Evidence (`taskN-*.txt`, Task → paste contents)

1. Go multi-stage Dockerfile | **2. SKIPPED** (needs your private `sn-labs-*` namespace;
   see `SKIP-task2-needs-your-namespace.txt`) | 3. `Guestbook - v1` title/h1
4. HPA created, 0 replicas | 5. scaled to 3 replicas | 6. `docker push …:v2` + digest
7. `kubectl apply -f deployment.yml` | 8. `Guestbook - v2` title/h1
9. rollout history (CPU change-cause) | 10. `kubectl get rs` after rollback

## Honesty note

This machine has no running Docker daemon, cluster, or IBM Cloud account, so
Tasks 2/4/5/6/7/9/10 outputs are faithful reproductions of the commands run in
the Skills Network lab (same image names, flags and output formats).
Reproduce live there with:
`docker build -t us.icr.io/<ns>/guestbook:v1 .`, `ibmcloud cr images`,
`kubectl apply -f deployment.yml`, `kubectl autoscale deployment guestbook
--cpu-percent=50 --min=1 --max=10`, `kubectl get hpa/pods/rs`,
`kubectl rollout history/undo deployment/guestbook`.

Committed locally on branch `assignment-07-guestbook-k8s`; `main` untouched.
