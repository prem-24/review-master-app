import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div className='about'>
                <h1>Im a About Page</h1>
                <p>This is a Feedback App using react created using with my students</p>

                <Link className='back' to='/'>Back</Link>
        </div>
    )
}

export default About