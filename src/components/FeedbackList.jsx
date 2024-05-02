import { useContext } from 'react'
import FeedBackItem from './FeedBackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {


  const { feedback, isLoading} = useContext(FeedbackContext);

  if(!isLoading && (!feedback || feedback.length === 0)){
    return <h4>There is no data</h4>
  } 

  return isLoading ? (
    <h3>Loading ...</h3>
  ) : (
   <div className='feedback-list'>
      {feedback.map((item) => (
         <FeedBackItem key={item.id} item={item}/>
      ))}
   </div>
  )
}

export default FeedbackList