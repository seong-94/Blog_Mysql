import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  const [value, setValue] = useState("");
  return (
    <div className="write">
      <div className="content">
        <input type="text" placeholder="Title"></input>
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b> Status : </b> Draft
          </span>
          <span>
            <b> Visibility : </b> Public
          </span>
          <input type="file" id="file" name="" />
          <label className="file" htmlFor="file">
            Upload file
          </label>
          <div className="buttons">
            <button> Save as Draft </button>
            <div></div>
            <button> Update </button>
          </div>
        </div>
        <div className="item">
          <h1>카테고리</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">카테고리 1</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">카테고리 2</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">카테고리 3</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">카테고리 4</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">카테고리 5</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
