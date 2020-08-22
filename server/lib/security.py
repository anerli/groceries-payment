import bcrypt

def hash_password(password: str) -> str:
    """Hash a password for storing."""
    salt = bcrypt.gensalt()
    # Also stores the salt
    return bcrypt.hashpw(password.encode(), salt).decode()

def verify_password(provided_password: str, stored_password: str) -> bool:
    """Verify a stored password against one provided by user"""
    return bcrypt.checkpw(provided_password.encode(), stored_password.encode())