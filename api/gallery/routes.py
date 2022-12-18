import os
from api.gallery import bp
from flask import request, jsonify
from werkzeug.utils import secure_filename
from werkzeug.datastructures import  FileStorage
from ..s3_functions import list_files, upload_file, show_image

@bp.route("/api/gallery", methods=["GET"])
def gallery_list():

    BUCKET = "react-flask-art-gallery-aws-s3-bucket"

    gallery_list = show_image(BUCKET)

    return jsonify({
        "success": 1,
        "gallery_list": gallery_list
    }), 202