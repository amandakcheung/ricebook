from flask import (Flask, render_template, make_response, url_for, request,
                   redirect, flash, session, send_from_directory, jsonify)
from werkzeug.utils import secure_filename

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    import os
    port = os.getuid()
    app.debug = True
    app.run('0.0.0.0',port)