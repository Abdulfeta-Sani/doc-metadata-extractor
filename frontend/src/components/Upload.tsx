import { useState } from "react";
import { uploadDocument } from "../api/documents";
import { useRef } from "react";


export default function Upload({ onUpload }: { onUpload: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

const fileInputRef = useRef<HTMLInputElement | null>(null);

const handleUpload = async () => {
  if (!file) return;

  setMessage("Uploading...");

  try {
    await uploadDocument(file);
    setMessage("Upload successful ✅");
    setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    setTimeout(() => setMessage(""), 3000);
    onUpload();
  } catch (error) {
    console.error(error);
    setMessage("Upload failed ❌");
  }
};



  return (
    <div className="mb-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">Upload Files</h3>
      <p className="mt-1 text-sm text-gray-500">PDF only</p>

      <label
        htmlFor="pdf-upload-input"
        className="mt-4 flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4"
      >
        <span className="text-sm text-gray-700">
          {file ? file.name : "Choose File (no file chosen)"}
        </span>
      </label>

      <input
        id="pdf-upload-input"
        type="file"
        accept="application/pdf"
        ref={fileInputRef}
        className="hidden"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={handleUpload}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Upload
      </button>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
}