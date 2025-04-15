import React, { useEffect } from "react";
import style from "./Achievements.module.css";
import {
  getAWSCertificates,
  getCertiportCertificates,
  getCiscoCertificates,
  getMicrosoftCertificates,
  getUdemyCertificates,
} from "../../../helpers/Data";
import Achievement from "../achievement/Achievement";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Reusable hook for animation on scroll
function useScrollAnimation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
}

const animateVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 50 },
};

function Achievements() {
  const { ref: headingRef, controls: headingControls } = useScrollAnimation();
  const { ref: awsRef, controls: awsControls } = useScrollAnimation();
  const { ref: udemyRef, controls: udemyControls } = useScrollAnimation();
  const { ref: ciscoRef, controls: ciscoControls } = useScrollAnimation();
  const { ref: certiportRef, controls: certiportControls } = useScrollAnimation();
  const { ref: microsoftRef, controls: microsoftControls } = useScrollAnimation();

  return (
    <div className="achievements">
      <div className={style.container}>
        <div className={style.wrapper}>
          <motion.p
            ref={headingRef}
            animate={headingControls}
            initial="hidden"
            variants={animateVariants}
            className={style.heading}
          >
            Certifications
          </motion.p>

          {/* AWS Section */}
          <motion.p
            ref={awsRef}
            animate={awsControls}
            initial="hidden"
            variants={animateVariants}
            className={style.title}
          >
            AWS Certificates
          </motion.p>
          <div className={style.images_grid}>
            {getAWSCertificates().map((achievement, index) => (
              <Achievement key={`aws-${index}`} achievement={achievement} />
            ))}
          </div>

          {/* Udemy Section */}
          <motion.p
            ref={udemyRef}
            animate={udemyControls}
            initial="hidden"
            variants={animateVariants}
            className={style.title}
          >
            Udemy Certificates
          </motion.p>
          <div className={style.images_grid}>
            {getUdemyCertificates().map((achievement, index) => (
              <Achievement key={`udemy-${index}`} achievement={achievement} />
            ))}
          </div>

          {/* Cisco Section */}
          <motion.p
            ref={ciscoRef}
            animate={ciscoControls}
            initial="hidden"
            variants={animateVariants}
            className={style.title}
          >
            Cisco Certificates
          </motion.p>
          <div className={style.images_grid}>
            {getCiscoCertificates().map((achievement, index) => (
              <Achievement key={`cisco-${index}`} achievement={achievement} />
            ))}
          </div>

          {/* Certiport Section */}
          <motion.p
            ref={certiportRef}
            animate={certiportControls}
            initial="hidden"
            variants={animateVariants}
            className={style.title}
          >
            Certiport Certificate
          </motion.p>
          <div className={style.images_grid}>
            {getCertiportCertificates().map((achievement, index) => (
              <Achievement key={`certiport-${index}`} achievement={achievement} />
            ))}
          </div>

          {/* Microsoft Section */}
          <motion.p
            ref={microsoftRef}
            animate={microsoftControls}
            initial="hidden"
            variants={animateVariants}
            className={style.title}
          >
            Microsoft Certificate
          </motion.p>
          <div className={style.images_grid}>
            {getMicrosoftCertificates().map((achievement, index) => (
              <Achievement key={`ms-${index}`} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;