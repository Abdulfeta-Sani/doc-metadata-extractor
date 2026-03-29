# Explanation of Design Choices & Library Selection

## Abstract

This project was developed as a full-stack application for uploading PDF documents, extracting metadata, storing the results, and making them searchable through a web interface. The main goal was to build a solution that is clear, practical, and easy to understand. The design focuses on separating the frontend, backend, PDF processing, and database responsibilities so that each part of the system has a clear role.

## Explanation of Design Choices & Library Selection

The system follows a client-server design. The frontend is responsible for user interaction, while the backend handles file processing, metadata extraction, and database operations. This structure was chosen because it keeps the application organized and makes each part easier to maintain.

On the frontend, React was used because it supports a component-based approach, which makes it easier to separate features such as file upload, search, and document display. TypeScript was included to improve code reliability and make the structure of the application clearer. Tailwind CSS was chosen for styling because it allows fast and consistent UI development without needing a large amount of custom CSS.

On the backend, FastAPI was selected because it is lightweight, modern, and suitable for building REST APIs quickly. It also provides automatic API documentation, which makes testing the endpoints easier. SQLite was used as the database because it is simple to set up and works well for a small project like this. SQLAlchemy was chosen to manage database interactions because it improves readability and avoids writing raw SQL for common operations.

For PDF processing, PyMuPDF was selected because it is efficient and provides access to both document metadata and text content. This made it possible to extract the title, author, page count, and a short text excerpt in a straightforward way. Overall, the design and library choices were made to keep the project simple, functional, and aligned with the main objective of metadata extraction and search.

## Conclusion

In conclusion, the design and library choices in this project were based on simplicity, clarity, and practicality. Each technology was selected because it fit the needs of the system and helped keep the implementation clean and understandable. The final result is a structured application that demonstrates PDF upload handling, metadata extraction, database storage, and search functionality in a professional and straightforward way.
