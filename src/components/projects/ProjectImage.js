import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import ImageModal from "../../helpers/ImageModal";
import style from "./ProjectImage.module.css";

function ProjectImage({ screenshot }) {
  const [imageModal, setImageModal] = useState(false);

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
