from flask import Blueprint, request

import engines.users_engine as users_engine

users_bp = Blueprint('users_bp', __name__)

@users_bp.route('', methods=['POST'])
def create_user():
    req = request.get_json()
    created_user_data = users_engine.create(req['name'], req['password'])
    return created_user_data

@users_bp.route('', methods=['GET'])
def get_users():
    return {'users': users_engine.get_all()}