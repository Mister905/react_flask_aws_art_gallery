from flask import Flask

# from flask import Flask, render_template, request, redirect, send_file
# from s3_functions import upload_file, show_image
# from werkzeug.utils import secure_filename



from flask.json import jsonify
from flask_jwt_extended.jwt_manager import JWTManager
from api.config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from werkzeug.security import generate_password_hash


db = SQLAlchemy()
ma = Marshmallow()
jwt = JWTManager()
migrate = Migrate()


def create_app():
    
    app = Flask(__name__)
    
    app.config.from_object(Config)
    
    db.init_app(app)
    
    ma.init_app(app)
    
    jwt.init_app(app)
    
    migrate.init_app(app, db)

    UPLOAD_FOLDER = "uploads"

    BUCKET = "react-flask-art-gallery-aws-s3-bucket"

    return app

