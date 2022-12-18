from flask import Blueprint

bp = Blueprint("gallery", __name__)

from api.gallery import routes