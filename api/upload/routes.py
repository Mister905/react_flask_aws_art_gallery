import os
from api.upload import bp
from flask import request, jsonify
from werkzeug.utils import secure_filename
from werkzeug.datastructures import  FileStorage
from ..s3_functions import list_files, upload_file, show_image

@bp.route("/api/upload", methods=["POST"])
def upload_image():
    UPLOAD_FOLDER = os.path.abspath(os.path.join(os.path.dirname( __file__ ), '..', 'uploaded_files'))
    BUCKET = "react-flask-art-gallery-aws-s3-bucket"    
    f = request.files['image']
    f.save( os.path.join( UPLOAD_FOLDER, secure_filename(f.filename) ) )
    upload_file(f"uploaded_files/{f.filename}", BUCKET)

    return jsonify({
        "success": 1
    }), 202