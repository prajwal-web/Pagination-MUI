import React, { useState, useEffect } from "react";
import getImageApi from "./getImageApi";
import ImageGallery from "./ImageGallery";
import Pagination from "./Pagination";

const Apifetch = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 10;

  useEffect(() => {
    getImageApi().then((data) => setImages(data));
  }, []);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const currentImages = images.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <ImageGallery images={currentImages} />
    </>
  );
};

export default Apifetch;
