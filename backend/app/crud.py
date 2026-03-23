from sqlalchemy.orm import Session
from .models import Document

def create_document(db: Session, data: dict):
    doc = Document(**data)
    db.add(doc)
    db.commit()
    db.refresh(doc)
    return doc


def get_documents(db: Session, search: str = None):
    query = db.query(Document)

    if search:
        query = query.filter(
            (Document.title.ilike(f"%{search}%")) |
            (Document.author.ilike(f"%{search}%"))
        )

    return query.all()


def get_document(db: Session, doc_id: int):
    return db.query(Document).filter(Document.id == doc_id).first()