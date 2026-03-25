import { useEffect, useState } from "react";
import { getDocuments } from "../api/documents";

interface Document {
  id: number;
  title: string;
  author: string;
  page_count: number;
  excerpt: string;
  uploaded_at: string;
}

export default function DocumentList({
  searchTerm,
  refreshKey,
}: {
  searchTerm: string;
  refreshKey: number;
}) {
  const [documents, setDocuments] = useState<Document[]>([]);

const fetchDocs = async () => {
  try {
    const data = await getDocuments(searchTerm);
    console.log("Documents:", data);
    setDocuments(data);
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
};

  useEffect(() => {
    fetchDocs();
  }, [searchTerm, refreshKey]);

  return (
    <div className="space-y-4">
      {documents.length === 0 && (
        <p className="text-gray-500 text-sm">No documents found.</p>
      )}

      <div className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold">{doc.title}</h2>
            <p><strong>Author:</strong> {doc.author}</p>
            <p><strong>Pages:</strong> {doc.page_count}</p>
            <p className="text-sm text-gray-600">{doc.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}