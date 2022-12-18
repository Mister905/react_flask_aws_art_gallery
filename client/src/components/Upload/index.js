import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { upload_image } from "../../actions/upload";

function Upload() {
  const [image, set_image] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  return (
    <React.Fragment>
      <div className="row">
        <div className="col m12">
          <Link to={"/"}>Gallery</Link>
        </div>
      </div>
      <div className="row">
        <div className="col m12">
          <h1>Upload</h1>
        </div>
      </div>

      <div className="row">
        <div className="col m12">
          <img src={image} />
        </div>
      </div>

      <div className="row">
        <div className="col m12">
          <Upload_Form />
        </div>
      </div>
    </React.Fragment>
  );
}

function Upload_Form() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { handleSubmit, getFieldProps, errors, setFieldValue } = useFormik({
    validationSchema: Yup.object().shape({
      image: Yup.mixed()
        .test("required", "You need to provide a file", (value) => {
          return value;
        })
        .test("fileSize", "The file is too large", (value, context) => {
          console.log(
            "File " + value.name + " is " + value.size + " bytes in size"
          );
          return value && value.size <= 3000000;
        })
        .test("type", "We only support jpeg", function (value) {
          return value && value.type === "image/jpeg";
        }),
    }),

    initialValues: {
      image: "",
    },

    onSubmit: (value) => {
      dispatch(upload_image(value, navigate));
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            id="image"
            name="image"
            type="file"
            onChange={(event) => {
              setFieldValue("image", event.currentTarget.files[0]);
            }}
          />

          {errors.image && (
            <span className="custom-helper-error">{errors.image}</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </React.Fragment>
  );
}

export default Upload;
