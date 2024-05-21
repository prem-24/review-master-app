import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // State variables with clear and descriptive names
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Consistent indentation and spacing for readability
  const fetchFeedback = async () => {
    const response = await fetch("https://review-master-backend.onrender.com/review");
    const data = await response.json();
    setFeedback(data);

    console.log(data)
    setIsLoading(false);
  };

  // UseEffect hook with empty dependency array for initial fetch
  useEffect(() => {
    fetchFeedback();
  }, []);

  const addFeedback = async (newFeedback) => {
    const response = await fetch("https://review-master-backend.onrender.com/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    console.log(data.review); // Assuming data contains the new feedback object
    setFeedback([...feedback, data.review]); // Append the new feedback object to the existing feedback state array
  };
  

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        const response = await fetch(`https://review-master-backend.onrender.com/review/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          // If the deletion was successful, update the feedback state
          setFeedback(feedback.filter((item) => item._id !== id));
          console.log("Feedback deleted successfully");
        } else {
          console.error("Failed to delete feedback");
        }
      } catch (error) {
        console.error("An error occurred while deleting feedback:", error);
      }
    }
  };
  

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`https://review-master-backend.onrender.com/review/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    console.log(data);
    // Update the feedback state based on the response data
    setFeedback(feedback.map(item => item._id === id ? { ...item, ...updItem } : item));
  };
  
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedback,
      isLoading,
      feedbackEdit,
    }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
