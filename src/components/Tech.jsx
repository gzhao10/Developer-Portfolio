import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Concepts, languages, and frameworks </p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]'
      >
        COURSEWORK:
        <br/>
        Software Engineering | Data Structures & Algorithms | Object Oriented Programming | Computer Security | Computer Networking | Artificial Intelligence | Databases | Operating Systems | Java & Web Design | Computer Architecture | Game Programming

      </motion.p>

      

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech,'skills')