# 💼 PrivateGPT 2.0 – Local RAG Chatbot for Fintech Risk & Compliance

A fully private, offline-capable Retrieval-Augmented Generation (RAG) chatbot designed for **fintech teams**—particularly in **compliance**, **credit risk**, and **internal audit**—who need instant, secure access to internal knowledge.

🔐 **Privacy-First** — Runs locally with no cloud or internet  
📚 **Fintech-Specific** — Tailored to regulatory docs, risk models, audit reports  
⚡ **Fast & Smart** — Built with FAISS, LangChain, and the open-source `gpt-oss-20b`

---

## 🎯 Why This Project?

In fintech, internal teams often struggle to locate critical information buried in compliance manuals, credit policy documents, or historical audit trails—especially under time pressure or regulatory deadlines. This chatbot solves that by enabling:

- 🔍 Instant, natural-language Q&A on internal documentation  
- 💾 100% offline use — no sensitive data leaves your environment  
- 🛡️ Enhanced productivity and regulatory preparedness

---

## 🚀 Features

- ✅ 100% offline and private (no external API or cloud access)
- 📂 Uploads PDF, CSV, Notion docs, and more
- 🤖 Uses `gpt-oss-20b` for high-quality, contextual responses
- 🔎 Fast document search with FAISS vector index
- 🧠 RAG pipeline powered by LangChain
- 🎙️ (Optional) Add Whisper for speech-to-text queries and TTS responses

---

## 📁 Project Structure

```text
privategpt/
│
├── app/                      # FastAPI backend
│   └── main.py
│
├── ingest/                   # Ingestion & embedding
│   ├── loader.py
│   ├── splitter.py
│   ├── embedder.py
│   └── utils.py
│
├── rag/                      # RAG components
│   ├── retriever.py
│   ├── generator.py
│   └── prompts.py
│
├── data/
│   └── raw/                  # Uploaded fintech documents
│
├── vectorstore/             # FAISS or Chroma DB
│
├── config/
│   └── config.py
│
├── frontend/                 # React app lives here
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.tsx
│       └── index.tsx
│
├── tests/
│
├── .env
├── requirements.txt          # Python backend dependencies
├── package.json              # React frontend dependencies
└── README.md
```


---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/privategpt2.git
cd privategpt2
```
### 2. Create and Activate Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate  # Windows
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

```markdown
### 4. Setup the Model with Ollama

Make sure Ollama is installed on your system: https://ollama.com/docs/installation

Pull the GPT-OSS 20B model from Ollama:

```bash
ollama pull gpt-oss:20b

### 🧪 Example Use Cases
- 🔎 "What are the key criteria in our Tier 1 credit risk model?"

- 📋 "Summarize the audit findings from Q2 2024."

- 📘 "Explain KYC compliance steps from our 2023 handbook."

- 👩‍💻 "Who approved the exception in our March 2024 credit memo?"

### 🔒 No Cloud. No Tracking. Just Intelligence.
This project is ideal for compliance-sensitive environments where privacy, speed, and relevance matter most.

### 📌 Coming Soon
-  GUI interface for uploading documents

-  User feedback loop for QA improvement

-  Voice-based chat with Whisper integration

### 🧠 Built With
- LangChain

- FAISS

- Transformers

- gpt-oss-20b