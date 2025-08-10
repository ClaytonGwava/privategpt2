import React, { useState } from 'react';

const FileUploader = ({ setUploadedFileName }) => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const uploadFile = async () => {
    if (!file) return alert('Please select a file');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:8000/upload-doc/', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setUploadedFileName(data.filename);
      setUploadStatus(`✅ Uploaded: ${data.filename}`);
    } catch (err) {
      setUploadStatus('❌ Upload failed');
    }
  };

  return (
    <div>
      <label className="block text-lg font-medium mb-2">Upload PDF Document</label>
      <div className="flex items-center gap-4">
        <input
          type="file"
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          onClick={uploadFile}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow"
        >
          Upload
        </button>
      </div>
      {uploadStatus && <p className="mt-2 text-green-500">{uploadStatus}</p>}
    </div>
  );
};

export default FileUploader;
