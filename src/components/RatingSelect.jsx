import React, { useState,useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext';

const RatingSelect = ({ select }) => {


    const [selected, setSelected] = useState(1);

    const { feedbackEdit } = useContext(FeedbackContext);

    useEffect(() => {
        setSelected(feedbackEdit.item.rating);
    }, [feedbackEdit]);

    const handleChange = (e) => {
        setSelected(+e.target.value);
        select(+e.target.value);
    }


    const array = [
        "Bad (1/5)",
        "So-so (2/5)",
        "Ok (3/5)",
        "Good (4/5)",
        "Great (5/5)",
    ]

    return (
        <ul className='rating'>
            {array.map((label, index) => (
                <li key={`rating-${index + 1}`}>
                  
                    <input
                        type='radio'
                        id={`num${index + 1}`}
                        name='rating' 
                        value={index + 1}
                        onChange={handleChange}
                        checked={selected === index + 1}
                    />
                    <label htmlFor={`num${index + 1}`}>
                        {selected ? (
                            <i className="fa fa-solid fa-star"></i>
                        ) : (
                            <i className="fa fa-regular fa-star"></i>
                        )}
                    </label>
                    <span>{label}</span>
                    <div className="line"></div>
                </li>
            ))}
        </ul>
    )
}

export default RatingSelect