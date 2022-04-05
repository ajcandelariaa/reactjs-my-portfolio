import React, { useState } from "react";
import style from "./Achievement.module.css";
import { AnimatePresence } from "framer-motion";
import ImageModal from "../../helpers/ImageModal";

function Achievement({ achievement }) {
  const [imageModal, setImageModal] = useState(false);

  return (
    <div>
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
    </div>
  );
}

export default Achievement;
