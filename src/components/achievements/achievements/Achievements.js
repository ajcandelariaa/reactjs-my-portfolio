import React, { useEffect } from "react";
import style from "./Achievements.module.css";
import { getAchievements } from "../../../helpers/Data";
import Achievement from "../achievement/Achievement";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Achievements() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  const animate = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="achievements">
      <div className={style.container}>
        <div className={style.wrapper}>
          <motion.p
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animate}
            className={style.heading}
          >
            Achievements
          </motion.p>
          <div className={style.images_grid}>
            {getAchievements().map((achievement) => (
              <Achievement achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
