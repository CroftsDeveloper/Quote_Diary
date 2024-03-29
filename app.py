"""
Main application module for setting up the Flask app, including configurations,
route definitions, and initialising extensions like Flask-Login, 
Flask-Migrate, as well as Flask-Bcrypt for security.
"""

from flask import Flask, render_template, redirect, url_for, request, flash
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, login_user, current_user, logout_user, login_required
from dotenv import load_dotenv
import os

# Import extensions, forms, and models
from extensions import db, migrate
from forms import LoginForm, SignupForm, QuoteForm
from models import User, Quote

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

# DATABASE_URL for PostgreSQL compatibility with Heroku
uri = os.environ.get('DATABASE_URL', 'sqlite:///mydatabase.db')  # fallback to sqlite if no DATABASE_URL
if uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)
app.config['SQLALCHEMY_DATABASE_URI'] = uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialise Flask extensions
db.init_app(app)
migrate.init_app(app, db)
bcrypt = Bcrypt(app)

# Setup Flask-Login
login_manager = LoginManager(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    """Retrieve user by ID for login management."""
    return db.session.get(User, int(user_id))

# Define application routes
@app.route('/')
def home():
    """Render the home page."""
    return render_template('index.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    """Handle user signup."""
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    form = SignupForm()
    if form.validate_on_submit():
        existing_user = User.query.filter_by(username=form.username.data).first()
        if existing_user:
            flash('Username already exists. Please choose a different one.', 'danger')
            return render_template('signup.html', form=form)
        
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created! You can now log in.', 'success')
        return redirect(url_for('login'))
    return render_template('signup.html', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    """Handle user login."""
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('dashboard'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template('login.html', form=form)

@app.route('/logout')
@login_required
def logout():
    """Log out the current user."""
    logout_user()
    return redirect(url_for('home'))

@app.route('/dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    """Render dashboard page for logged-in users."""
    form = QuoteForm()
    if form.validate_on_submit():
        new_quote = Quote(content=form.content.data, author_name=form.author.data, author_id=current_user.id)
        db.session.add(new_quote)
        db.session.commit()
        flash('Your quote has been added!', 'success')
        return redirect(url_for('dashboard'))
    
    user_quotes = Quote.query.filter_by(author_id=current_user.id).all()
    return render_template('dashboard.html', quotes=user_quotes, form=form)

@app.route('/edit_quote/<int:quote_id>', methods=['GET', 'POST'])
@login_required
def edit_quote(quote_id):
    """Edit an existing quote."""
    quote = Quote.query.get_or_404(quote_id)
    form = QuoteForm()
    if form.validate_on_submit():
        quote.content = form.content.data
        quote.author_name = form.author.data
        db.session.commit()
        flash('Your quote has been updated!', 'success')
        return redirect(url_for('dashboard'))
    elif request.method == 'GET':
        form.content.data = quote.content
        form.author.data = quote.author_name
    return render_template('edit_quote_form.html', form=form, quote=quote)

@app.route('/delete_quote/<int:quote_id>', methods=['POST'])
@login_required
def delete_quote(quote_id):
    """Delete an existing quote."""
    quote = Quote.query.get_or_404(quote_id)
    db.session.delete(quote)
    db.session.commit()
    flash('Your quote has been deleted!', 'success')
    return redirect(url_for('dashboard'))

if __name__ == '__main__':
    app.run(debug=False)
