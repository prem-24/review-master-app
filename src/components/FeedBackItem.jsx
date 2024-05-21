import { useContext } from "react";
import Card from "./shared/Card"
import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";


const FeedBackItem = ({ item }) => {

  const { deleteFeedback , editFeedback} = useContext(FeedbackContext);

  return (
  
     <Card reverse={false}>
        <div className="num-display">
            {item.rating}
        </div>
        <div className="text-display">
            <h2>{item.text}</h2>
        </div>
        <div className="desc-display">
            <p>{item.desc}</p>
        </div>

        <div className="name-email">
           <span className="name-primary">{item.name}</span>
           <span className="name-secondary">{item.email}</span>
        </div>
     
       <button className="close" onClick={() => deleteFeedback(item._id)}>
          <FaTimes />
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit />
        </button>

    </Card>

  )
}

export default FeedBackItem