/* eslint-disable no-unused-vars */
import React from 'react'
import ProjectsText from './ProjectsText'
import ProjectSingle from './ProjectSingle'
import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

const projects = [
  {
    title: "COVID-19 Tracker",
    year: "2021",
    align: "right",
    image: "../images/covid-19.png",
    source: "https://github.com/nihal-h124/covid/tree/master",
    link: "https://covid-19-tracker-a5f68.web.app/",
  },
  {
    title: "Le'Blanc",
    year: "2022",
    align: "left",
    image: "../images/le'blanc-1.png",
    source: "https://github.com/nihal-h124/Le-Blanc/tree/master",
    link: "https://le-blanc-e5255.web.app/",
  },
  {
    title: "COSI",
    year: "2022-2023",
    align: "right",
    image: "../images/cosi.png",
    link: "#",
  },
  {
    title: "SPICE Platform",
    year: "2024",
    align: "left",
    image: "../images/one-ic.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn('up', 0.8)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText/>
      </motion.div>
        
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item, index) => {
               return <ProjectSingle key={index} title={item.title} year={item.year} align={item.align} image={item.image} link={item.link} />
            })}
        </div>
    </div>
  )
}

export default ProjectsMain