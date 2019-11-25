from flask import render_template
from app import app

@app.route('/')
@app.index('/index')
def index():
    