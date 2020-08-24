from flask import Flask, request
import os
from controllers.rooms_controller import rooms_bp
from controllers.trips_controller import trips_bp
from controllers.transactions_controller import transactions_bp

app = Flask(__name__, static_folder='../client/build', static_url_path='/')

# Frontend build redirect
@app.route('/', methods=['GET'])
def index():
    return app.send_static_file('index.html')

app.register_blueprint(rooms_bp, url_prefix='/api/rooms')
app.register_blueprint(trips_bp, url_prefix='/api/trips')
app.register_blueprint(transactions_bp, url_prefix='/api/transactions')

if __name__ == '__main__':
    try:
        port = os.environ['PORT']
    except KeyError:
        port = 5000
    app.run(debug=True, port=port)