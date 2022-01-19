import React, { useRef } from "react";

import Masonry from "react-masonry-css";
import LazyImage from "../components/LazyImage";
import { isEmpty } from "../tools/Fonctions";

const Gallery = ({ elements }) => {
  let modal = useRef(null);
  const handleModal = (element) => {
    let imgModal = modal.current.childNodes[0];
    let imgElement = element.childNodes[1];

    imgModal.src = imgElement.src;
    imgModal.alt = imgElement.alt;
  };

  const closeModal = () => {
    modal.current.classList.remove("display");
  };

  return (
    <section className="illustration container gallery">
      <picture className="modal" ref={modal}>
        <img
          src="#"
          alt="modal"
          onLoad={() => {
            modal.current.classList.add("display");
          }}
        />
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          onClick={closeModal}
        >
          <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
        </svg>
      </picture>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid "
        columnClassName="my-masonry-grid_column"
      >
        {!isEmpty(elements) &&
          elements.map((element) => {
            return (
              <LazyImage
                key={element.id}
                id={element.id}
                onClick={(e) => {
                  handleModal(e.currentTarget);
                }}
                name={element.name}
                title={element.name}
                alt={element.imgsDescription[0]}
                src={element.imgsPaths[0].url}
                thumb={element.imgsPaths[0].thumbnails.small.url}
                height={element.imgsPaths[0].height}
                width={element.imgsPaths[0].width}
              />
            );
          })}
      </Masonry>
    </section>
  );
};

export default Gallery;
