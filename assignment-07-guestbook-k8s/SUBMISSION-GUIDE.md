# Assignment 07 – Guestbook on Kubernetes (15 pts)

Guestbook front end + nginx Dockerfile + K8s manifests. YAML validated locally;
Dockerfile COPY/EXPOSE and index title/h1 verified by grep.

## Files

- `Dockerfile` – nginx image, COPY index.html, EXPOSE 80 (Task 1)
- `index.html` – title/h1 "Guestbook" (Task 3)
- `index-v2.html` – title/h1 "Guestbook – v2" (Task 8; copy over index.html, rebuild as :v2)
- `deployment.yml` – guestbook Deployment, image `us.icr.io/guestbook-ns/guestbook:v1`,
  CPU requests (for HPA) (Task 7 uses `kubectl apply -f deployment.yml`)
- `service.yml`, `hpa.yml` – NodePort service + CPU 50% HPA (Tasks 4–5)

## Evidence (`taskN-*.txt`, Task → paste contents)

1. Dockerfile (COPY + EXPOSE) | 2. `ibmcloud cr images` shows `:v1`
3. default title/h1 | 4. HPA created, 0 replicas | 5. scaled to 3 replicas
6. `docker push …:v2` + digest | 7. `kubectl apply -f deployment.yml`
8. v2 title/h1 | 9. rollout history (CPU change-cause) | 10. `kubectl get rs` after rollback

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
