import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function AdminPage() {
  const { data: session } = useSession();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setUploadMessage("File uploaded successfully!");
      } else {
        setUploadMessage(`Upload failed: ${data.error}`);
      }
    } catch (error) {
      setUploadMessage("Error uploading file.");
    }
  };

  // If user is not authenticated, show login prompt
  if (!session) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p>You must be logged in to access this page.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Welcome, {session.user.name}</h1>

      {/* File Upload Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-md">
        <h2 className="text-xl font-semibold mb-2">Upload a Document</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="border p-2 w-full rounded"
        />
        <button
          onClick={handleUpload}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Upload
        </button>
        {uploadMessage && <p className="mt-2 text-sm">{uploadMessage}</p>}
      </div>

      {/* Sign Out Button */}
      <button
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}
