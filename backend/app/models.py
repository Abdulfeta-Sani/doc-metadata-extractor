from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from .database import Base

class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    author = Column(String)
    page_count = Column(Integer)
    excerpt = Column(Text)
    uploaded_at = Column(DateTime, default=datetime.utcnow)