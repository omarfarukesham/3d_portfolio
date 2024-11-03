import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from 'react-tooltip'

const Hero2 = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleHireBtn = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleDownloadResume = () => {
    // Link to the resume PDF
    const link = document.createElement("a");
    link.href = "/Resume_of_OmarFaruk.pdf"; 
    link.download = "Resume_of_OmarFaruk.pdf"; // Name of the downloaded file
    link.click();
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} z-20 pointer-events-none h-fit flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Omar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop interactive user <br className='sm:block hidden' />
            interfaces and web applications.
          </p>
          <button  onClick={handleHireBtn}  className="bg-[#915EFF] text-white pointer-events-auto rounded px-2 py-1 mt-2 hover:bg-white hover:text-black transition duration-200">Hire Me</button>
        </div>
      </div>
      
      {/* <ComputersCanvas /> */}
    
  

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      <AnimatePresence>
        {isOpenModal && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
            
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
       <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
         <button
           className="absolute top-2 right-2 text-gray-400 h-8 w-8 flex justify-center items-center rounded-full border border-gray-400 p-2 hover:text-gray-900 "
           onClick={closeModal}
         >
        X
         </button>
         <h3 className="text-black text-lg font-bold mb-4 text-left">Let's work together!</h3>
         <address className="text-black text-left">
           Connect me direct: <br />
           <span className="flex justify-start gap-2 items-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth={1.0} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
          </svg>

           Email: <span className="font-semibold">omar.lu86@gmail.com</span><br />
           </span>
           <span className="flex gap-1 items-center justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth={1.0} stroke="currentColor" className="size-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
           Whatsapp: <span className="font-semibold"> +8801775-070627</span>
           </span>
         </address>
         <div className="mt-5">
         {isTooltipVisible && (
                      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2  bg-gray-200 text-black text-xs rounded py-1 px-2">
                        Download Resume
                      </div>
                    )}
        <div>
      
        </div>
           <button
             onClick={handleDownloadResume}
             onMouseEnter={() => setIsTooltipVisible(true)}
             onMouseLeave={() => setIsTooltipVisible(false)}
             className="bg-[#915EFF] px-4 py-1 rounded my-2 hover:bg-gray-300 hover:text-black text-white text-sm transition duration-500"
           >
             Resume
           </button>
           
         </div>
       </div>
     </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;
