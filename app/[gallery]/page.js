"use client";

import "./pageGallery.scss";
import { useGallery } from "@/hooks/useGallery";
import Image from "next/image";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function PageGallery({ params }) {
  const { gallery } = params;
  const { data } = useGallery();
  const [fullImg, setFullImg] = useState("/");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="page-gallery container">
      <Modal show={show} onHide={handleClose} centered>
        <Image
          src={fullImg}
          alt={"full img"}
          onClick={handleShow}
          width={500}
          height={500}
          style={{ width: "100%", height: "auto" }}
        />
      </Modal>

      <h1 className="page-gallery__title">{gallery}</h1>
      <div className="page-gallery__items">
        {!data
          ? "loading"
          : data[gallery].map((item, i) => {
              return (
                <Image
                  key={i}
                  src={`/images/${gallery}/${item}`}
                  alt={item}
                  onClick={() => {
                    setFullImg(`/images/${gallery}/${item}`);
                    handleShow();
                  }}
                  width={300}
                  height={300}
                />
              );
            })}
      </div>
    </div>
  );
}
