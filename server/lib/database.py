from pymongo import MongoClient
import os, sys

__all__ = ['db']
with open(os.path.dirname(os.path.realpath(__file__)) + "\\" + 'mongodb.key') as f:
    MONGODB_KEY = f.read()

client = MongoClient("mongodb+srv://flarphengarg:{}@freebie-kgbod.gcp.mongodb.net/test?retryWrites=true&w=majority".format(MONGODB_KEY))
db = client.groceries