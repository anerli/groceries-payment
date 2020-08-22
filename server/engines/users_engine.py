from lib.database import db
import lib.security as security
from lib.common_engine_functions import get_next_available_id, property_is_unique, save_document, get_all_documents

def create(name, password):
    if not property_is_unique('users', 'name', name):
        raise RuntimeError('User with that name already exists.')
    id = get_next_available_id('users')
    post = {
        '_id': id,
        'name': name,
        'password': security.hash_password(password)
    }
    db['users'].insert_one(post)
    return post

def get_all():
    return get_all_documents('users')

#def load(name):


def save(user_data):
    #db['users'].replace_one({'name': user_data['name']}, user_data)
    save_document('users', user_data, 'name')

def auth(user_data, provided_password):
    return security.verify_password(provided_password, user_data['password'])