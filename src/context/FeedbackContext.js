



import { createContext, useState , useEffect} from "react";




const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit:false
    })

    const fetchFeedback = async() => {
        const response = await fetch("http://localhost:5001/Feedback");

        const data = await response.json();

        setFeedback(data);

        setIsLoading(false);
    }

    // fetch Data
    useEffect(() => {
        fetchFeedback();
    },[])
    


    const addFeedback = async(newFeedback) => {

        const response = await fetch("http://localhost:5001/Feedback", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newFeedback),
          });
        const data = await response.json();
        console.log(data);

        setFeedback([data, ...feedback]);
    }

    const deleteFeedback = async(id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            const response = await fetch(`http://localhost:5001/Feedback/${id}`, {
                method: "DELETE",
              });
              await response.json();
             
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const updateFeedback = (id, updItem) => {
       setFeedback(feedback.map((item) => item.id === id ? {
        ...item, ...updItem
       } : item));
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        isLoading,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>

}


export default FeedbackContext;
