from lib.database import db
import lib.security as security
from lib.common_engine_functions import get_next_available_id, property_is_unique, save_document, get_all_documents

def create(room, buyer, communal, personals):
    id = get_next_available_id('trips')
    post = {
        '_id': id,
        'room': room,
        'buyer': buyer,
        'communal': communal,
        'personals': personals
    }
    db['trips'].insert_one(post)
    return post

def get_all(room):
    return [trip for trip in db['trips'].find({'room':room})]

#def save(trip_data):
#    save_document('trips', trip_data, '_id')