import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import moment from "moment";

const url = "http://localhost:4000";

function Write() {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(url + `/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(url + `/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            업로드 이미지
          </label>
          <div className="buttons">
            <button>임시 저장</button>
            <button onClick={handleClick}>저장하기</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "react"}
              name="cat"
              value="react"
              id="react"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="react">React</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "javascript"}
              name="cat"
              value="javascript"
              id="javascript"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="javascript">Javascript</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "nodejs"}
              name="cat"
              value="nodejs"
              id="nodejs"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="nodejs">Nodejs</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "aws"}
              name="cat"
              value="aws"
              id="aws"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="aws">AWS</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "mysql"}
              name="cat"
              value="mysql"
              id="mysql"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="mysql">Mysql</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
