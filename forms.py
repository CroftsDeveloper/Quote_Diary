from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length, EqualTo, Regexp

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[
                           DataRequired(), Length(min=4, max=25)])
    password = PasswordField('Password', validators=[
                             DataRequired(), Length(min=6)])
    submit = SubmitField('Login')
    
class SignupForm(FlaskForm):
    username = StringField('Username', validators=[
                           DataRequired(), Length(min=4, max=25), 
                           Regexp('^[A-Za-z0-9]+$', message="Username must contain only letters and numbers")])
    password = PasswordField('Password', validators=[
                             DataRequired(), Length(min=8, message="Password should be at least 8 characters long")])
    confirm_password = PasswordField('Confirm Password', validators=[
                                     DataRequired(), EqualTo('password', message='Passwords must match')])

class QuoteForm(FlaskForm):
    content = TextAreaField('Quote Content', validators=[
                            DataRequired(), Length(max=500)])
    author = StringField('Author', validators=[DataRequired(), Length(max=100)]) 
    submit = SubmitField('Submit')
