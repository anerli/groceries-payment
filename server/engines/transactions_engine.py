from lib.database import db
import lib.security as security
from lib.common_engine_functions import get_next_available_id, property_is_unique, save_document, get_all_documents

def create(room, payer, payee, amount):
    id = get_next_available_id('transactions')
    post = {
        '_id': id,
        'room': room,
        'payer': payer,
        'payee': payee,
        'amount': amount
    }
    db['transactions'].insert_one(post)
    return post

def get_all(room):
    return [transaction for transaction in db['transactions'].find({'room':room})]
