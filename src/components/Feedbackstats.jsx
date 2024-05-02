import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const Feedbackstats = () => {

  const { feedback } = useContext(FeedbackContext);


  return (
    <div className="feedback-statss">
      <h1 >Feedbacks  : <span className='stats'><span className='bg-dummy'></span>{feedback.length < 10 ? "0"+feedback.length:feedback.length}</span></h1>
    </div>
  )
}

export default Feedbackstats