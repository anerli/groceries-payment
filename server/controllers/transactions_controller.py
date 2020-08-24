from flask import Blueprint, request
import engines.transactions_engine as transactions_engine
import engines.rooms_engine as rooms_engine
import engines.trips_engine as trips_engine
import lib.security as security
from lib.common_controller_functions import calculate_debt

transactions_bp = Blueprint('transactions_bp', __name__)

@transactions_bp.route('', methods=['POST'])
def add_transaction():
    req = request.get_json()

    room = req['room']
    password = req['password']

    room_data = rooms_engine.load(room)
    if not security.verify_password(password, room_data['password']):
        return "Incorrect room password.", 400

    payer = req['payer']
    payee = req['payee']
    amount = req['amount']

    transaction = transactions_engine.create(room, payer, payee, amount)

    # Update debt with new transaction in the db
    room_data['members'] = calculate_debt(room_data['members'].keys(), trips_engine.get_all(room), transactions_engine.get_all(room))

    rooms_engine.save(room_data)
    
    return transaction