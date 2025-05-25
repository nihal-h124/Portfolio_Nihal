/* eslint-disable no-unused-vars */
import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiAxios } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import SkillsSingle from './SkillsSingle';
import { motion } from 'framer-motion';
import { fadeIn } from '../../motion/variants';

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "Vue",
    icon: IoLogoVue,
  },
  {
    skill: "Node.js",
    icon: DiNodejs,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "Git",
    icon: FaGitSquare,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "Tailwind",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Next.js",
    icon: RiNextjsFill,
  },
 {
    skill: "REST",
    icon: FaReact,
  },
  {
    skill: "Axios",
    icon: SiAxios,
  },
  {
    skill: "Postman",
    icon: SiPostman,
  },
];

const SkillsAllSm = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item, index) => {
        return (
          <motion.div 
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
          key={index} 
          className='flex flex-col items-center'>
          <item.icon className='text-7xl text-orange'/>
          <p className='text-center mt-4 text-white'>{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  )
}

export default SkillsAllSm