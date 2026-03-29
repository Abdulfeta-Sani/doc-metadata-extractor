![Artchitecture Diagram](./screenshots/Architecture%20Diagram.png)

Architecture Diagram

      The architecture diagram shows the main components of the system and how they interact. The frontend, built with React and Tailwind CSS, provides the user interface for uploading PDF files, searching documents, and viewing extracted metadata. The backend, built with FastAPI, handles API requests, coordinates PDF processing, and communicates with the SQLite database. PyMuPDF is used in the backend to extract metadata and text content from uploaded PDF files before the data is stored and returned to the frontend.

![Data-flow diagram ](./screenshots/Data-flow%20diagram.png)

Data Flow Diagram

      The data flow diagram shows how information moves through the system during upload and search operations. When a user uploads a PDF through the frontend, the file is sent to the FastAPI backend, where it is saved and processed using PyMuPDF to extract metadata such as title, author, page count, and a text excerpt. This extracted information is then stored in the SQLite database. For viewing or searching documents, the frontend sends requests to the backend, which retrieves matching records from the database and returns them to the user interface for display.