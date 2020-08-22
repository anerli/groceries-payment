from flask import Flask, request
import os
from controllers.users_controller import users_bp

app = Flask(__name__)

app.register_blueprint(users_bp, url_prefix='/api/users')

if __name__ == '__main__':
    try:
        port = os.environ['PORT']
    except KeyError:
        port = 5000
    app.run(debug=True, port=port)