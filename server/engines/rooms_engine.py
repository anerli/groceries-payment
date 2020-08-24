from lib.database import db
import lib.security as security
from lib.common_engine_functions import get_next_available_id, property_is_unique, save_document, get_all_documents

def create(name, password):
    if not property_is_unique('rooms', 'name', name):
        raise RuntimeError('Room with that name already exists.')
    id = get_next_available_id('rooms')
    post = {
        '_id': id,
        'name': name,
        'password': security.hash_password(password)
    }
    db['rooms'].insert_one(post)
    return post

def get_all():
    return get_all_documents('rooms')

def load(room_name):
    return db['rooms'].find_one({'name': room_name})

# def add_member(room_data, member_name):
    

#     return room_data


def save(room_data):
    #db['users'].replace_one({'name': user_data['name']}, user_data)
    save_document('rooms', room_data, 'name')

def auth(user_data, provided_password):
    return security.verify_password(provided_password, user_data['password'])


