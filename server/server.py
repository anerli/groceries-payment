from flask import Flask
import os

# == This section is necessary for deployment to work with the React build ==
app = Flask(__name__, static_folder='../client/build', static_url_path='/')
#app = Flask(__name__, static_folder='/app')

@app.route('/')
def index():
    return app.send_static_file('index.html')
# ===========================================================================

@app.route('/api/hello')
def hello():
    return 'Hello from Flask!'

if __name__ == '__main__':
    try:
        port = os.environ['PORT']
    except KeyError:
        port = 5000
    app.run(debug=True, port=port)