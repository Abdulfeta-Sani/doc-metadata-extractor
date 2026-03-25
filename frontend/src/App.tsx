import { useState } from "react";
import Upload from "./components/Upload";
import DocumentList from "./components/DocumentList";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");

  const refresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const applySearch = () => {
    setAppliedSearch(searchInput);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto border-2 border-gray-300 rounded-2xl bg-white p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Document Metadata Extractor
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="md:h-[70vh] md:flex md:items-center">
            <div className="w-full">
              <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="border border-gray-300 rounded-full px-4 py-2 w-full"
                />
                <button
                  onClick={applySearch}
                  className="px-5 py-2 bg-green-500 text-white rounded-full"
                >
                  Search
                </button>
              </div>
              </div>

              <div>
              <Upload onUpload={refresh} />
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 h-[70vh] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">
              List of Documents with extracted metadata
            </h2>
            <DocumentList searchTerm={appliedSearch} refreshKey={refreshKey} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;