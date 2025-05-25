/* eslint-disable no-unused-vars */
import React from 'react'
import ExperienceSingle from './ExperienceSingle'
import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

const experiences = [
  {
    title: 'Frontend Entwickler HiWi',
    company: 'DTV Verkehrsconsult GmbH',
    duration: 'Juni 2018 - März 2019',
    description: [
        'Entwicklung mehrerer Komponenten für ein webbasiertes Verkehrsdatensystem.',
        'Gestaltung einer Website zur Verkehrsüberwachung und -sicherheit mit React',
        'Arbeit an JavaScript zur Änderung des Verhaltens von Formularen.',
        'Verwendete Technologien: HTML, CSS, Javascript, React.js, Redux, PHP.'
    ],
  },
  {
    title: 'Frontend Entwickler HiWi',
    company: 'fka GmbH',
    duration: 'April 2019 - Juli 2019',
    description: [
        'Arbeitete am Frontend mit React, Javascript zur Entwicklung von Websites für ZF.',
        'Erstellung von zwei verschiedenen Anmeldeseiten für ZF- und fka-Kunden.',
        'Entwicklung zahlreicher interaktiver Komponenten für kundenspezifische Software im Automobilsektor.',
        'Verwendete Technologien: HTML, CSS, Javascript, React.js, Redux.'
    ],
  },
  {
    title: 'Frontend Entwickler',
    company: 'HafenCity Universität',
    duration: 'Sept 2022 - Sept 2023',
    description: [
        'Arbeitete an einem Stadtplanungstool namens “Cockpit Urban Infrastructures(CoSI)”.',
        'Arbeitete an der Entwicklung neuer Komponenten wie z.B. ExportPDF, TimeSeriesAnalysis uzw.',
        'Wir folgten dem agilen Sprint-Entwicklungsprozess und verwendeten Jira regelmäßig, um unseren Fortschritt zu verfolgen.',
        'Verwendete Technologien: HTML, CSS, JavaScript, Vue.js, Vuex, Vuetify, Git, Nodejs, Mocha, Jira, Bitbucket, Agile Sprint.'
    ],
  },
   {
    title: 'Frontend Entwickler',
    company: 'ic-solutions GmbH',
    duration: 'Aug 2024 - Dez 2024',
    description: [
        'Entwicklung und Wartung von Funktionen für interne Tools SPICE und SPICE Capture.',
        'Leitung der Entwicklung der Komponente LicenseGenerator, die eindeutige Lizenzschlüssel mit der Microsoft Authentication Library (MSAL) generiert.',
        'Entwurf und Test des Anmeldeflusses durch Simulation von GET- und POST-Anforderungen mit Axios & Postman.',
        'Verwendete Technologien: HTML, CSS, TypeScript, Vue 3, Pinia, Vuetify, Git.'
    ],
  },
]

const ExperienceAll = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
        {experiences.map((experience, index) => {
            return (
                <>
                  <ExperienceSingle key={index} experience={experience} />     
                  {index < 3 ? (
                    <motion.div
                      variants={fadeIn('right', 0.8)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: false, amount: 0.7 }}
                    >
                      <FaCircleArrowRight className='text-6xl text-orange lg:block sm:hidden gap-3' />
                    </motion.div>
                  ) : null}           
                </>               
            )
        }
        )}
    </div>
  )
}

export default ExperienceAll