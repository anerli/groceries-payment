from lib.database import db
import lib.security as security
from lib.common_engine_functions import get_next_available_id, property_is_unique, save_document, get_all_documents
from datetime import datetime

def create(room, buyer, communal, personals):
    id = get_next_available_id('trips')
    post = {
        '_id': id,
        'room': room,
        'buyer': buyer,
        'communal': communal,
        'personals': personals,
        'timestamp': datetime.utcnow()
    }
    db['trips'].insert_one(post)
    return post

def get_all(room):
    return [trip for trip in db['trips'].find({'room':room})]

def remove(room, trip_id):
    trip_id = int(trip_id)
    #print("REMOVING TRIP IN {} WITH ID {}".format(room, trip_id))
    trip = db['trips'].find_one({'room': room, '_id': trip_id})
    #print(trip)
    #print(db['trips'].find_one({'room': room}))
    #print(db['trips'].find_one({'_id': trip_id}))
    #print(db['trips'].find_one({'_id': int(trip_id)})) # NEED INT CAST ON ID
    #print(db['trips'].find_one({'_id': str(trip_id)}))
    db['trips'].delete_one({'room': room, '_id': trip_id})
    return trip

#def save(trip_data):
#    save_document('trips', trip_data, '_id')