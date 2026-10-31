from flask import Flask, jsonify
from flask_cors import CORS

from test_1 import get_orders

app = Flask(__name__)
CORS(app)


@app.get("/api/orders")
def api_orders():
    return jsonify(get_orders())


if __name__ == "__main__":
    app.run(debug=True)
