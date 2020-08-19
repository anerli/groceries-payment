# === Libraries ===
from flask import Flask, request
import sys
import os
import mongoengine
import bcrypt

app = Flask(__name__, static_folder='../client/build', static_url_path='/')
with open(os.path.dirname(os.path.realpath(sys.argv[0])) + "\\" + 'mongodb.key') as f:
    MONGODB_KEY = f.read()

db_name = 'groceries'
mongoengine.connect(db='groceries', host="mongodb+srv://flarphengarg:{}@freebie-kgbod.gcp.mongodb.net/?retryWrites=true&w=majority".format(MONGODB_KEY))

class User(mongoengine.Document):
    meta = {'collection': 'users'}
    name = mongoengine.StringField(required=True, unique=True)
    password = mongoengine.StringField(required=True)

def authenticate_user(provided_password, stored_password):
    return bcrypt.checkpw(provided_password.encode(), stored_password.encode())


# Frontend build redirect
@app.route('/', methods=['GET'])
def index():
    return app.send_static_file('index.html')

@app.route('/api/users', methods=['POST'])
def create_user():
    req = request.get_json()

    hashed_password = bcrypt.hashpw(req['password'].encode(), bcrypt.gensalt()).decode()
    new_user = User(name=req['name'], password=hashed_password)
    try:
        new_user.save()
    except mongoengine.errors.NotUniqueError:
        return "Username already exists.", 400
    return "OK"

if __name__ == '__main__':
    try:
        port = os.environ['PORT']
    except KeyError:
        port = 5000
    app.run(debug=True, port=port)