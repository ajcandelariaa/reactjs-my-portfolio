import React from "react";
import style from "./ImageModal.module.css";
import { motion } from "framer-motion";

function ImageModal({ screenshot, setImageModal }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0.2,
          },
        }}
        className={style.backdrop}
        onClick={() => setImageModal(false)}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.2,
          },
        }}
        exit={{
          opacity: 0,
        }}
        className={style.modal_info}
      >
        <img src={screenshot} alt="screenshot" />
      </motion.div>
    </div>
  );
}

export default ImageModal;
