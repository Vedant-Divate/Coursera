# Dealership Microservices – Final Project

Integrated application: Python product microservice + Node.js dealer
microservice + frontend, deployable to IBM Code Engine.

- `product-service/app.py` – Flask catalog API (`/products`, `/products/<id>`)
- `dealer-service/server.js` – Express pricing API (`/dealers`, `/price`)
- `frontend/index.html` – dropdown preloaded from APIs, dealer list, prices
- `codeengine/` – deploy manifests + commands for Code Engine

## Run locally

```bash
# terminal 1
cd product-service && python app.py        # :5001
# terminal 2
cd dealer-service && npm install && node server.js   # :5002
# terminal 3
cd frontend && python -m http.server 8080  # http://localhost:8080
```

By Vedant Divate.
