import React, { useState } from "react";

const NewsItem = ({ title, description, imageUrl, id, description2, title2 }) => {
  const [showModal, setShowModal] = useState(false);
  const modalId = `exampleModal-${id}`;
  console.log(imageUrl)

  return (
    <div className="d-flex justify-content-center align=items-center">
      <div className="card" style={{ width: "20rem" }}>
        <img src={imageUrl} className="card-img-top" alt={title.slice(0,14)} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <button
            key={id}
            onClick={() => setShowModal(true)}
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#${modalId}`}
          >
            Read more ...
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          title2={title2}
          description2={description2}
          imageUrl={imageUrl}
          modalId={modalId}
        />
      )}
    </div>
  );
};

const Modal = ({ title2, description2, imageUrl, modalId }) => {
  return (
    <div
      key={imageUrl}
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby={`${modalId}-label`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`${modalId}-label`}>
              {title2}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{description2}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;