import fitz  # PyMuPDF

def extract_pdf_metadata(file_path: str):
    doc = fitz.open(file_path)

    metadata = doc.metadata or {}

    title = metadata.get("title") or "Unknown Title"
    author = metadata.get("author") or "Unknown Author"
    page_count = len(doc)

    text = ""
    for page in doc:
        text += page.get_text()

    excerpt = text[:200]

    doc.close()

    return {
        "title": title,
        "author": author,
        "page_count": page_count,
        "excerpt": excerpt
    }