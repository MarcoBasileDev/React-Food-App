# React Food App

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![Static Badge](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

This application is a collection of recipes loved by people, where individuals can post their own recipes through a form including title, description, steps to execute, and attaching an image. Recipes are saved in a SQLite database, with only the corresponding image path stored, while the images themselves are placed within the public/images folder.

## Learning Goals

- **Project Setup:** Understanding how to initialize a project with Next.js.
- **File-Based Routing & React Server Components:** Learning the concept of routing based on file structure and utilizing React server components for server-side rendering.
- **Dynamic Routes & Route Parameters:** Configuring routes that accept dynamic parameters, enabling dynamic content generation.
- **Pages & Layout:** Understanding the structure of pages and implementing layouts for consistent UI across the application.
- **Styling with CSS Modules:** Utilizing CSS modules for scoped styling, enhancing modularity and maintainability.
- **Client Components Optimization:** Efficient usage of client components to enhance performance and user experience.
- **SQLite Database Setup & CRUD Operations:** Setting up a SQLite database and performing CRUD operations for data manipulation.
- **Error Handling:** Implementing mechanisms to handle errors gracefully, ensuring smooth user experience.
- **Image Picker Integration:** Integrating an image picker for user-friendly image selection.
- **Server-Side Input Validation:** Implementing input validation on the server side to ensure data integrity and security.
- **Next.js Caching Mechanism:** Understanding and leveraging Next.js caching for improved performance and scalability.

## Features

- **Recipe Submission:** Users can post their recipes via a form including fields for name, email, title, dish description, recipe, and an image picker.
- **Viewing Others' Recipes:** Users have the ability to view recipes posted by other users, allowing for exploration and inspiration.

## Technologies Used

- React
- Next.js
- SQLite

## Usage

### Setup and Installation

- clone the repository: git clone https://github.com/MarcoBasileDev/React-Food-App.git
- Install all dependencies: npm install
- Create the database: node initdb.js
- Run the development server: npm run dev

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
