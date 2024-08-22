import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("1", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <strong>As a dedicated JavaScript software developer with over 2 years of experience</strong>, 
        I specialize in creating dynamic and scalable web applications. 
        My expertise lies in building microservice-based e-commerce solutions,
         where I have successfully contributed to the development of <strong>12 individual services</strong>. 
         I have a strong command of <strong>React.js, Next.js, and TypeScript</strong>,
          which I leverage to deliver seamless and efficient user experiences.
        {isExpanded && (
          <>
            <br /><br />
            In addition to front-end development, I am proficient in using <strong>Git and Bitbucket</strong> 
            for version control, enabling efficient collaboration and code management across teams.
             My workflow often involves <strong>Jira</strong> for project management, where I track tasks, manage sprints,
              and ensure timely delivery of features. I also utilize <strong>Figma</strong> for UI/UX design collaboration 
              and <strong>Swagger</strong> for API documentation, ensuring clear communication and smooth integration between 
              different services.
            <br /><br />
            My experience extends to deployment processes, where I ensure that applications are reliably delivered to
             production environments. 
             I am passionate about writing clean,
              maintainable code and am committed to continuous learning and improvement. 
              I thrive in collaborative environments and am eager to bring my skills to 
              innovative projects that challenge me to grow as a developer.
          </>
        )}
      </motion.p>

      <button 
        onClick={toggleReadMore} 
        className="text-blue-500 mt-2"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
