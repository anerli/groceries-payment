# Instructions

# Running servers locally for development

## Server

### Go there:

    cd server


### If haven't created venv yet:

    python -m venv venv

### Activate the virtual environment:
#### Windows:

    venv\Scripts\activate

Might need to do:

    Set-ExecutionPolicy Unrestricted

first.

### Run the server

    flask run

## Client

- Open a new terminal (Ctrl+Shift+5 to split a terminal in VSCode)

### Go there:

    cd client

### If you need to update your packages

    npm install

### Run the server

    npm run start

## Alternative
- Alternatively, you can build the React app and just run the Flask server, which
will then serve the build (this is already set up in server.py, since it needs to be done for deployment anyway) (See Preparing for deployment - Client).

## Notes
- On your local server, you will connect to the frontend on port 3000. It connects to your backend through a proxy (which you can configure in package.json) on port 5000.
- If you visit localhost:3000, you will be served the React app from the running node server. If you visit localhost:5000, you will be served the last build you made of the React app (so if you have not built yet, there will be nothing).

# Preparing for deployment
## Server
### Dependencies
If you have added requirements, in the root (outside server) folder, run

    pip freeze > requirements.txt

If you need to install these on another system, run

    pip install -r requirements.txt

to install those dependencies.

## Notes
- The npm server is not run on Heroku. Instead, the npm build is used and the result treated as static html by Flask which serves it. This way, only one process needs to be run to actually run the deployment server.

## Client
### Build the React app

    npm run build

This will allow the Flask app to serve the statically built React app on whatever port it is running on. This allows it to be deployed onto heroku easier, because it will only require one web worker.


# Actually Deploying to Heroku

- Add the heroku/python buildpack, either through the heroku project settings, or with the heroku CLI