from flask import Flask
from dotenv import load_dotenv
import os

# Import the extensions (db and migrate)
from extensions import db, migrate

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions with the app
db.init_app(app)
migrate.init_app(app, db)

# Import models after initializing db and migrate
from models import User, Quote

@app.route('/')
def home():
    return 'Quote Diary'
