"""
Defines Flask-WTForms for user authentication and managing quotes. 
"""

from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length, EqualTo, Regexp

class LoginForm(FlaskForm):
    """
    Form used for logging users in. Requires username and a password.
    """
    username = StringField('Username', validators=[
        DataRequired(), Length(min=4, max=25)])
    password = PasswordField('Password', validators=[
        DataRequired(), Length(min=6)])
    submit = SubmitField('Login')

class SignupForm(FlaskForm):
    """
    Form used for signing up new users. Requires username, password, 
    and password confirmation.
    """
    username = StringField('Username', validators=[
        DataRequired(), Length(min=4, max=25), 
        Regexp('^[A-Za-z0-9]+$', message="Username must contain only letters and numbers.")])
    password = PasswordField('Password', validators=[
        DataRequired(), Length(min=8, message="Password should be at least 8 characters long.")])
    confirm_password = PasswordField('Confirm Password', validators=[
        DataRequired(), EqualTo('password', message='Passwords must match.')])

class QuoteForm(FlaskForm):
    """
    Form for submitting new quotes. Includes fields for the quote content
    and an optional author name.
    """
    content = TextAreaField('Quote Content', validators=[
        DataRequired(), Length(max=500)])
    author = StringField('Author', validators=[DataRequired(), Length(max=100)]) 
    submit = SubmitField('Submit')
