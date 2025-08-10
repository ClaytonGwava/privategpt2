import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import IngestButton from './components/IngestButton';
import ChatBox from './components/ChatBox';

const App = () => {
  const [uploadedFileName, setUploadedFileName] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold flex items-center justify-center gap-3 text-indigo-600 dark:text-indigo-400">
            📄 PrivateGPT 2.0 Chat
          </h1>
        </div>

        <FileUploader setUploadedFileName={setUploadedFileName} />

        {uploadedFileName && <IngestButton fileName={uploadedFileName} />}

        <ChatBox />
      </div>
    </div>
  );
};

export default App;
