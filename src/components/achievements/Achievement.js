import React, { useEffect, useState } from "react";
import style from "./Achievement.module.css";
import { AnimatePresence } from "framer-motion";
import ImageModal from "../../helpers/imageModal/ImageModal";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Achievement({ achievement }) {
  const [imageModal, setImageModal] = useState(false);
  const { ref, inView } = useInView();
  const controls = useAnimation();

  const animate = {
    visible: { opacity: 1, y: 0, transition: { duration: .5, delay: achievement.delay} },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  
  useEffect(() => {
    if(imageModal){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [imageModal])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animate}
    >
      <div className={style.achievement_grid}>
        <img src={achievement.badge} alt={achievement.badge} />
        <div className={style.achievement_info}>
          <p className={style.achievement_title}>{achievement.title}</p>
          <p className={style.achievement_sub}>
            Issued by: {achievement.issuedBy}
          </p>
          <p className={style.achievement_sub}>
            Issued date: {achievement.issuedDate}
          </p>
          <div className={style.achievement_buttons}>
            <button onClick={() => setImageModal(true)}>Certificate</button>
            <a href={achievement.credly} target="_blank" rel="noreferrer">
              Credly
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {imageModal && (
          <ImageModal
            screenshot={achievement.certificate}
            setImageModal={setImageModal}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Achievement;
