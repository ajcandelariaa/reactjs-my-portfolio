import React, { useEffect, useRef } from "react";
import style from "./Contact.module.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

  const animate = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    }
  }, [controls4, inView4]);

  useEffect(() => {
    if (inView5) {
      controls5.start("visible");
    }
  }, [controls5, inView5]);

  useEffect(() => {
    if (inView6) {
      controls6.start("visible");
    }
  }, [controls6, inView6]);

  const handleForm = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dhbbmif', 'template_v6zpu9h', form.current, 'FMt_aKPxYCGQvy8GB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="contact">
      <div className={style.container}>
        <motion.p
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animate}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={style.heading}
        >
          Contact Me
        </motion.p>
        <form ref={form} onSubmit={handleForm}>
          <div className={style.form_inputs}>
            <motion.input
              ref={ref2}
              animate={controls2}
              initial="hidden"
              variants={animate}
              transition={{ duration: 0.5, delay: 0.3 }}
              type="text"
              className={style.input}
              placeholder="Name"
              name="name"
            />
            <motion.input
              ref={ref3}
              animate={controls3}
              initial="hidden"
              variants={animate}
              transition={{ duration: 0.5, delay: 0.3 }}
              type="text"
              className={style.input}
              placeholder="Email Address"
              name="email"
            />
            <motion.input
              ref={ref4}
              animate={controls4}
              initial="hidden"
              variants={animate}
              transition={{ duration: 0.5, delay: 0.3 }}
              type="text"
              className={style.input}
              placeholder="Subject"
              name="subject"
            />
            <motion.textarea
              ref={ref5}
              animate={controls5}
              initial="hidden"
              variants={animate}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={style.input}
              placeholder="Your Message"
              rows="8"
              name="message"
            ></motion.textarea>
          </div>
          <motion.div
            ref={ref6}
            animate={controls6}
            initial="hidden"
            variants={animate}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={style.form_button}
          >
            <button>Submit</button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
