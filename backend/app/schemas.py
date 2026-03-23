from pydantic import BaseModel
from datetime import datetime

class DocumentResponse(BaseModel):
    id: int
    title: str
    author: str
    page_count: int
    excerpt: str
    uploaded_at: datetime

    class Config:
        from_attributes = True