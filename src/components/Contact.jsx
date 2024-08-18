import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, message: "", type: "" });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_95c68dc', //service-id
        'template_94c54sg', // template-id
        {
          from_name: form.name,
          to_name: "Omar JS Dev",
          from_email: form.email,
          to_email: "omarfarukesham@gmail.com",
          message: form.message,
        },
        'Vz8fYMrvgXWsq52ow' //public key
      )
      .then(
        () => {
          setLoading(false);
          setModal({
            isOpen: true,
            message: "Thank you. I will get back to you as soon as possible.",
            type: "success",
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setModal({
            isOpen: true,
            message: "Ahh, something went wrong. Please try again.",
            type: "error",
          });
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      {modal.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className={`p-8 rounded-2xl shadow-lg text-center ${modal.type === "success" ? "bg-white" : "bg-white"}`}>
            <h3 className="text-black text-lg font-bold mb-4">{modal.type === "success" ? "Email Sent" : "Error"}</h3>
            <p className="text-black mb-6">{modal.message}</p>
            <button
              className="bg-tertiary py-2 px-6 rounded-xl text-white font-bold"
              onClick={() => setModal({ isOpen: false, message: "", type: "" })}
            >
              Close
            </button>
          </div>
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setModal({ isOpen: false, message: "", type: "" })}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
