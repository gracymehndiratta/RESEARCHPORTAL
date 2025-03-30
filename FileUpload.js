import { useState } from "react";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage("Please select a file first!");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(`Upload successful! File available at: ${result.filePath}`);
      } else {
        setMessage(`Upload failed: ${result.error}`);
      }
    } catch (error) {
      setMessage("Error uploading file.");
    }

    setUploading(false);
  };

  return (
    <div className="p-4 border rounded-md shadow-lg max-w-md mx-auto bg-white">
      <h2 className="text-lg font-bold mb-2">Upload a Document</h2>

      {/* Drag and Drop Area */}
      <label className="file-upload border-dashed border-2 border-gray-300 rounded-md p-6 text-center cursor-pointer">
        <p className="text-gray-600">Drag and drop files here, or click to upload.</p>
        <input 
          type="file" 
          className="hidden" 
          onChange={handleFileChange} 
        />
      </label>

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2 w-full disabled:bg-gray-400"
      >
        {uploading ? "Uploading..." : "Upload Document"}
      </button>

      {/* Display message */}
      {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
    </div>
  );
}
