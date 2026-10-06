"""Product Details microservice (Python/Flask).

Serves the product catalog for the dealership application.
Deployed target: IBM Code Engine (see ../../codeengine/README).
"""

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

PRODUCTS = [
    {"id": 1, "name": "Sedan X", "type": "Sedan", "year": 2024},
    {"id": 2, "name": "SUV Y", "type": "SUV", "year": 2024},
    {"id": 3, "name": "Hatchback Z", "type": "Hatchback", "year": 2023},
    {"id": 4, "name": "Coupe S", "type": "Coupe", "year": 2024},
]


@app.route("/")
def index():
    """Health/info endpoint."""
    return jsonify({"service": "product-details", "status": "ok"})


@app.route("/products")
def list_products():
    """Return all products for the frontend dropdown."""
    return jsonify(PRODUCTS)


@app.route("/products/<int:product_id>")
def product_details(product_id):
    """Return details of a single product."""
    for product in PRODUCTS:
        if product["id"] == product_id:
            return jsonify(product)
    return jsonify({"error": "Product not found"}), 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
