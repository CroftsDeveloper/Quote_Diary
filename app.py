from flask import Flask, render_template, redirect, url_for
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
import os

# Import the extensions (db and migrate)
from extensions import db, migrate

# Import forms
from forms import LoginForm, SignupForm

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions with the app
db.init_app(app)
migrate.init_app(app, db)
bcrypt = Bcrypt(app)

# Import models after initializing db and migrate
from models import User, Quote

@app.route('/')
def home():
    return 'Quote Diary'

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    form = SignupForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        # Redirect to a different page or send a success message
        return redirect(url_for('home'))
    return render_template('signup.html', title='Sign Up', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            # Logic for logging in the user
            # Redirect to a different page or send a success message
            return redirect(url_for('home'))
    return render_template('login.html', title='Login', form=form)

@app.route('/logout')
def logout():
    # Logic to log out the user
    # Redirect to login page or home page
    return redirect(url_for('home'))
