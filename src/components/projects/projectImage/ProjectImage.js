import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import ImageModal from "../../../helpers/imageModal/ImageModal";
import style from "./ProjectImage.module.css";

function ProjectImage({ screenshot }) {
  const [imageModal, setImageModal] = useState(false);
  useEffect(() => {
    if(imageModal){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [imageModal])
  return (
    <div>
      <img className={style.image}
        src={screenshot}
        alt={screenshot}
        onClick={() => setImageModal(true)}
      />
      <AnimatePresence>
        {imageModal && (
          <ImageModal screenshot={screenshot} setImageModal={setImageModal} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectImage;
