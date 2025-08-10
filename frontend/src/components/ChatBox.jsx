import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');

  const sendMessage = async () => {
    if (!query.trim()) return;

    const updated = [...messages, { sender: 'user', text: query }];
    setMessages(updated);
    setQuery('');

    try {
      const res = await fetch('http://localhost:8000/ask/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setMessages([...updated, { sender: 'bot', text: data.answer }]);
    } catch (err) {
      setMessages([...updated, { sender: 'bot', text: '❌ Error getting response' }]);
    }
  };

  return (
    <div className="mt-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg h-64 overflow-y-auto p-4 mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${
              msg.sender === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              <strong>{msg.sender === 'user' ? 'You' : 'GPT'}:</strong> {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask a question..."
          className="flex-1 border border-gray-300 px-4 py-2 rounded-lg"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
