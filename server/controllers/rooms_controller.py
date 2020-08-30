from flask import Blueprint, request

import engines.rooms_engine as rooms_engine

import lib.security as security

rooms_bp = Blueprint('rooms_bp', __name__)

@rooms_bp.route('', methods=['POST'])
def create_room():
    req = request.get_json()
    
    created_user_data = rooms_engine.create(req['name'], req['password'])
    return created_user_data

# @rooms_bp.route('', methods=['GET'])
# def get_rooms():
#     return {'rooms': rooms_engine.get_all()}

@rooms_bp.route('/<room>', methods=['GET'])
def get_room(room):
    password = request.args.get('password')
    room_data = rooms_engine.load(room)
    if not security.verify_password(password, room_data['password']):
        return "Incorrect room password.", 400

    return rooms_engine.load(room)
    #return 'bruh'

@rooms_bp.route('/members', methods=['POST'])
def add_member():
    req = request.get_json()

    room = req['room']
    password = req['password']
    member = req['member']

    room_data = rooms_engine.load(room)

    

    if not security.verify_password(password, room_data['password']):
        return "Incorrect room password.", 400

    #room_data = rooms_engine.add_member(room_data, member)
    #print('hello')
    #get_rooms()

    if 'members' not in room_data.keys():
        room_data['members'] = {}
    elif member in room_data['members'].keys():
        return 'Member with that name already in room ' + room, 400
    # elif member in map(lambda m: m['name'], room_data['members']):
    #     return 'Member with that name already in room ' + room, 400

    # Empty debt dictionary
    room_data['members'][member] = {}

    rooms_engine.save(room_data)

    return room_data




    

