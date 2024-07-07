# Notes App

This Notes App project is built using the MERN Stack and created for learning purposes. You can check out the demo at [Notes App Demo](https://notes-app-mern-theta.vercel.app/)

## Tech Stack

- **MongoDB**: For database management
- **Express.js**: For creating the backend server and API
- **React**: For building the frontend user interface
- **Node.js**: For running server-side JavaScript

## Features

- **Create Account**: Register a new account with email and password
- **Login**: Log in with the registered email and password
- **Add Note**: Add a new note with title and content
- **Edit Note**: Edit the title and content of an existing note
- **Delete Note**: Delete notes that are no longer needed
- **Pin Note**: Pin important notes to the top
- **Search Notes**: Search notes by title or content

## Installation and Running the Project

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Narathip99/notes-app-mern.git
    cd notes-app-mern
    ```

2. **Install dependencies for both frontend and backend**:

    ```bash
    # In the main project directory
    cd mern-notes-app-backend
    npm install
    cd ../mern-notes-app-frontend
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the `backend` directory and add the following values:

    ```env
    ACCESS_TOKEN_SECRET=your_secret_key
    MONGO_URI=your_mongodb_uri
    ```

4. **Run the project**:

    ```bash
    # In the frontend directory
    npm run dev
    # In the backend directory
    npm run dev
    ```

5. **Access the application**:

    Open your browser and go to [http://localhost:5173](http://localhost:5173) to view the frontend and [http://localhost:8080](http://localhost:8080) to view the backend

## License

This project is created for learning purposes and is free to use.
