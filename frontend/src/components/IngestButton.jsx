import React, { useState } from 'react';

const IngestButton = ({ fileName }) => {
  const [ingestStatus, setIngestStatus] = useState('');

  const ingestFile = async () => {
    try {
      const res = await fetch('http://localhost:8000/ingest/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file_name: fileName }),
      });
      const data = await res.json();
      setIngestStatus(`✅ ${data.status}`);
    } catch (err) {
      setIngestStatus('❌ Ingest failed',err);
    }
  };

  return (
    <div className="mb-4">
      <button
        onClick={ingestFile}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        Ingest Document
      </button>
      {ingestStatus && <p className="mt-2 text-sm text-green-700">{ingestStatus}</p>}
    </div>
  );
};

export default IngestButton;
