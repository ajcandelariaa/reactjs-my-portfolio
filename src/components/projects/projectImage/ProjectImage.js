import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import ImageModal from "../../../helpers/imageModal/ImageModal";
import style from "./ProjectImage.module.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ProjectImage({ screenshot }) {
  const [imageModal, setImageModal] = useState(false);
  const { ref, inView } = useInView();
  const controls = useAnimation();

  const animate = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (imageModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [imageModal]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animate}
    >
      <img
        className={style.image}
        src={screenshot}
        alt={screenshot}
        onClick={() => setImageModal(true)}
      />
      <AnimatePresence>
        {imageModal && (
          <ImageModal screenshot={screenshot} setImageModal={setImageModal} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ProjectImage;
