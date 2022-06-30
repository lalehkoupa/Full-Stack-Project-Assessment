import React, { useState } from "react";

const AddVideo = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  // const emptyForm = () => {
  //   setTitle("");
  //   setUrl("");
  // };

  return (
    <div className="addVideo">
      {showForm ? (
        <form onSubmit={(e) => onAdd(e, title, url)}>
          <div>
            <label htmlFor="title">Tile:</label>
            <input
              className="input"
              type="text"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="url">Url:</label>
            <input
              className="input"
              type="text"
              id="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              required
            ></input>
          </div>
          <div>
            <button className="button" onClick={handleShowForm}>
              Cancel
            </button>
            <button className="button">Add</button>
          </div>
        </form>
      ) : (
        <button className="button" onClick={handleShowForm}>
          Add Video
        </button>
      )}
    </div>
  );
};

export default AddVideo;
