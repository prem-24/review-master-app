## Review Master App

The Random Review Master App is a web application that allows users to post random reviews for products and perform CRUD (Create, Read, Update, Delete) operations on the reviews. The app is built using React for the frontend and utilizes a JSON server as a fake REST API to store and retrieve review data.

## Features

- **Post Reviews**: Users can post new reviews for products, including a title, description, and rating.
- **View Reviews**: Users can view all posted reviews, sorted by date or rating.
- **Update Reviews**: Users can edit and update existing reviews.
- **Delete Reviews**: Users can delete reviews they've posted.
- **Toast Notifications**: The app uses React-Toastify to display toast notifications for actions like adding, updating, and deleting reviews.

## Dependencies

The app uses the following dependencies:

- **[@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)**, **[@testing-library/react](https://www.npmjs.com/package/@testing-library/react)**, **[@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event)**: Testing utilities for React.
- **[concurrently](https://www.npmjs.com/package/concurrently)**: Utility to run multiple commands concurrently. Used to start the React app and JSON server simultaneously.
- **[json-server](https://www.npmjs.com/package/json-server)**: Fake REST API using JSON data.
- **[react](https://reactjs.org/)**, **[react-dom](https://reactjs.org/docs/react-dom.html)**: Core React libraries for building user interfaces.
- **[react-icons](https://react-icons.github.io/react-icons/)**: Library for including icons in React applications.
- **[react-router-dom](https://reactrouter.com/web/guides/quick-start)**: DOM bindings for React Router for handling navigation.
- **[react-scripts](https://www.npmjs.com/package/react-scripts)**: Scripts and configuration used by Create React App.
- **[react-toastify](https://fkhadra.github.io/react-toastify/introduction/)**: React component for toast notifications.
- **[web-vitals](https://www.npmjs.com/package/web-vitals)**: Library for measuring Web Vitals metrics.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/random-review.git

2.Install dependencies:

    cd random-review
    npm install

## Usage

1.Start the JSON server and React app concurrently:

   npm run dev

2.Open http://localhost:3000 to view the app in your browser.

## Contributing


We welcome contributions to the Random Review Master App! To contribute, follow these steps:

Fork the repository.

1-Create a new branch (git checkout -b feature/your-feature-name).
2-Make your changes.
3-Commit your changes (git commit -am 'Add new feature').
4-Push to the branch (git push origin feature/your-feature-name).
5-Create a new Pull Request.