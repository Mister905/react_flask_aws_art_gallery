from flask import Flask
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
    
    from api.upload import bp as upload_bp
    app.register_blueprint(upload_bp)

    from api.gallery import bp as gallery_bp
    app.register_blueprint(gallery_bp)

    app.config.from_object(Config)
    
    db.init_app(app)
    
    ma.init_app(app)
    
    jwt.init_app(app)
    
    migrate.init_app(app, db)

    return app

