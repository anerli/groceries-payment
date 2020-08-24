from flask import Blueprint, request

import engines.rooms_engine as rooms_engine
import engines.trips_engine as trips_engine
import engines.transactions_engine as transactions_engine

import lib.security as security

from lib.common_controller_functions import calculate_debt

trips_bp = Blueprint('trips_bp', __name__)

'''
Add a trip and add debt to members appropriately.
'''
@trips_bp.route('', methods=['POST'])
def add_trip():
    req = request.get_json()

    room = req['room']
    password = req['password']

    room_data = rooms_engine.load(room)
    if not security.verify_password(password, room_data['password']):
        return "Incorrect room password.", 400

    buyer = req['buyer']

    if buyer not in room_data['members']:
        return 'Buyer is not a member of the room', 400

    communal = req['communal']
    '''
    Ex.
    {
        "total": 41.24,
        "description": "a lot of eggs plus some milk"
    }
    '''

    personals = req['personals']
    '''
    Ex.
    {
        "Jason": {
            "total": 12.40,
            "description": "snackies"
        }
    }
    # [
    #     {
    #         "member": "Jason",
    #         "total": 12.40,
    #         "description": "snackies"
    #     }
    # ]
    '''

    #if 'trips' not in room_data.keys():
    #    room_data['trips'] = []

    #room_data['trips'].append
    trip = trips_engine.create(room, buyer, communal, personals)

    # Recalculate debt (recalculates EVERYTHING. NOT EFFICIENT)
    new_member_data = calculate_debt(room_data['members'].keys(), trips_engine.get_all(room), transactions_engine.get_all(room))
    print(new_member_data)
    room_data['members'] = new_member_data

    rooms_engine.save(room_data)

    return trip

@trips_bp.route('', methods=['GET'])
def get_trips():
    # TODO: Security check
    req = request.get_json()
    room = req['room']
    return {"trips": trips_engine.get_all(room)}


'''
Remove a trip and revert the associated debt.
'''
def remove_trip():
    pass