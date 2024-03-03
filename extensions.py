"""
Initialises Flask extensions used across the application.

Includes Flask-SQLAlchemy for database interactions and
Flask-Migrate for handling database migrations.
"""

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()
