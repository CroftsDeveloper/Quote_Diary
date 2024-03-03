"""
Sets up user and quote models for Flask app.

"""
from datetime import datetime
from flask_login import UserMixin
from extensions import db

class User(db.Model, UserMixin):
    """
    User model: keeps track of users and their quotes.
    - id: user's ID
    - username: user's name (must be unique)
    - password: hashed password (for security)
    - quotes: a list of quotes the user has added
    """
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    quotes = db.relationship('Quote', backref='author', lazy=True)

    def __repr__(self) -> str:
        """Returns a string representation with user's username."""
        return f'<User {self.username}>'

class Quote(db.Model):
    """
    Stores individual quotes.
     - id (int): Unique ID for each quote.
     - content (str): Text of the quote.
     - author_name (str, optional): Name of the quote's author.
     - author_id (int): ID of user who added quote.
     - created_at (datetime): When quote was added.
     - updated_at (datetime): When quote was last updated.
    """

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    author_name = db.Column(db.String(100), nullable=True)
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)

    def __repr__(self) -> str:
        """Shows quote ID and which user added it."""
        return f'<Quote {self.id} by User {self.author_id}>'
