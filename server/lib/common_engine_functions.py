from lib.database import db

def get_next_available_id(collection):
    try:
        return db[collection].find().sort('_id', -1).limit(1).next()
    except StopIteration:
        # No documents yet
        return 0

def property_is_unique(collection, property, value):
    return db[collection].find_one({property: value}) == None

def save_document(collection, data, key):
    db[collection].replace_one({key: data[key]}, data)

def get_all_documents(collection):
    return [document for document in db[collection].find({})]