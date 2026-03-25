### 📄 Document Metadata Extraction & Search Interface

## 🚀 Overview

This project is a full-stack system that allows users to upload PDF documents, automatically extract metadata, store it in a database, and retrieve or search through the stored documents.

## 🧩 Problem Statement

# The goal is to build a system that:

* Accepts PDF uploads
* Extracts key metadata:

  * Title
  * Author
  * Number of pages
  * First 200 characters of text
  * Stores the extracted data
* Provides endpoints to retrieve and search documents

## 🛠️ Tech Stack

## Backend

* FastAPI — API framework
* SQLite — Database
* SQLAlchemy — ORM
* PyMuPDF (fitz) — PDF processing

## Frontend

* React (Vite + TypeScript)
* Tailwind CSS

## 📦 Features

## ✅ Completed (Phase 4 - Full System)

* Upload PDF files
* Extract metadata from PDF
* Store metadata in SQLite database
* Retrieve all documents
* Retrieve a document by ID
* Search documents by title or author
* Frontend UI for uploading PDFs
* Display list of uploaded documents
* Search interface integrated with backend

## ⏳ Upcoming (Phase 5+)

* UI/UX improvements
* Error handling enhancements
* Better loading states and feedback
* Screenshots and final documentation

## 📂 Project Structure

doc-metadata-extractor/
│
├── backend/
│   └── app/
│       ├── main.py
│       ├── database.py
│       ├── models.py
│       ├── schemas.py
│       ├── crud.py
│       └── utils/
│           └── pdf_extractor.py
│
├── frontend/
│   └── src/
│       ├── api/
│       │   └── documents.ts
│       ├── components/
│       │   ├── Upload.tsx
│       │   └── DocumentList.tsx
│       ├── App.tsx
│       └── main.tsx
│
└── README.md

## 🔌 API Endpoints

#### POST /upload

```
- Accepts a PDF file
- Extracts metadata
- Stores it in the database
```

#### GET /documents

```
- Returns all uploaded documents
```

#### GET /documents?search=keyword

```
- Filters by title or author (case-insensitive)
```

#### GET /documents/{id}

```
- Returns a single document
```

## 📊 Example Response

{
"id": 1,
"title": "Project Report",
"author": "John Doe",
"page_count": 12,
"excerpt": "This project focuses on...",
"uploaded_at": "2026-03-13T09:00:00Z"
}

## ⚙️ Setup Instructions

### 🔹 Backend Setup

```
-cd backend
-python -m venv venv
-source venv/bin/activate   # (Linux/macOS)
-venv\Scripts\activate      # (Windows)
```

* pip install fastapi uvicorn sqlalchemy pymupdf python-multipart
* uvicorn app.main:app --reload

# 👉 Access API docs:

* http://127.0.0.1:8000/docs

### 🔹 Frontend Setup

```
-cd frontend
-npm install
-npm run dev
```

# 👉 Access frontend:

* http://localhost:5173

## 🧠 Design Decisions

FastAPI was chosen for its simplicity and performance
SQLite is used for lightweight storage suitable for small systems
PyMuPDF provides efficient PDF parsing and metadata extraction
Metadata is extracted once and stored to improve performance
Search is implemented via query parameters for simplicity and flexibility
Separation of backend and frontend improves scalability and maintainability

# 📌 Current Status

✅ Phase 1 — Project Setup
✅ Phase 2 — System Design
✅ Phase 3 — Backend Implementation
✅ Phase 4 — Frontend Development & Integration
🔄 Phase 5 — Refinement & UI Improvements

# 📷 Screenshots

To be added in later phases

# 📄 License

This project is for educational purposes.
