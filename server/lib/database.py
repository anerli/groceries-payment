from pymongo import MongoClient
import os, sys

__all__ = ['db']
try:
    with open(os.path.dirname(os.path.realpath(__file__)) + "/" + 'mongodb.key') as f:
        MONGODB_KEY = f.read()
except:
    # file not found, like if heroku is running it (bc key is on gitignore)
    MONGODB_KEY = os.environ['MONGODB_KEY']

client = MongoClient("mongodb+srv://flarphengarg:{}@freebie-kgbod.gcp.mongodb.net/test?retryWrites=true&w=majority".format(MONGODB_KEY))
db = client.groceries