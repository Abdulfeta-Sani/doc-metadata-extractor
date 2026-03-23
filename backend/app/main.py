from fastapi import FastAPI, UploadFile, File, Depends, HTTPException
from sqlalchemy.orm import Session
import shutil
import os

from .database import SessionLocal, engine, Base
from . import models, schemas, crud
from .utils.pdf_extractor import extract_pdf_metadata

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/upload", response_model=schemas.DocumentResponse)
def upload_pdf(file: UploadFile = File(...), db: Session = Depends(get_db)):

    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files allowed")

    file_path = os.path.join(UPLOAD_DIR, file.filename)

    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract metadata
    data = extract_pdf_metadata(file_path)

    # Save to DB
    document = crud.create_document(db, data)

    return document


@app.get("/documents", response_model=list[schemas.DocumentResponse])
def list_documents(search: str = None, db: Session = Depends(get_db)):
    return crud.get_documents(db, search)


@app.get("/documents/{doc_id}", response_model=schemas.DocumentResponse)
def get_document(doc_id: int, db: Session = Depends(get_db)):
    doc = crud.get_document(db, doc_id)

    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")

    return doc