# Deploy to IBM Code Engine (needs IBM Cloud login)

```bash
ibmcloud login --apikey @api_key_file
ibmcloud target -r us-south
ibmcloud ce project create --name dealership
ibmcloud ce project select --name dealership

# Product microservice (Python)
ibmcloud ce application create --name product-service \
  --build-source ./product-service --strategy dockerfile \
  --port 5001 --min-scale 1 --max-scale 3

# Dealer microservice (Node.js)
ibmcloud ce application create --name dealer-service \
  --build-source ./dealer-service --strategy dockerfile \
  --port 5002 --min-scale 1 --max-scale 3

# Frontend (static)
ibmcloud ce application create --name dealer-frontend \
  --build-source ./frontend --strategy dockerfile \
  --port 8080 --min-scale 1 --max-scale 2
```

After deploy, put the two Code Engine URLs into `frontend/index.html`
(`PRODUCT_API` / `DEALER_API`), redeploy the frontend, and verify the
dropdown, dealer list and prices in the browser.
