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
    const response = await fetch("http://localhost:5001/Feedback");
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // UseEffect hook with empty dependency array for initial fetch
  useEffect(() => {
    fetchFeedback();
  }, []);

  const addFeedback = async (newFeedback) => {
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
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const response = await fetch(`http://localhost:5001/Feedback/${id}`, {
        method: "DELETE",
      });
      await response.json();
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5001/Feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
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
