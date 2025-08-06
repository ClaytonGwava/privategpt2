# 💼 PrivateGPT 2.0 – Local Fintech RAG Chatbot

A fully offline, domain-specific Retrieval-Augmented Generation (RAG) chatbot for the **fintech** sector, powered by the open-source [`gpt-oss-20b`](https://huggingface.co/openai/gpt-oss-20b) language model.

🔐 **Private** — No internet or cloud dependency  
📚 **Domain-Specific** — Trained with your fintech PDFs, CSVs, and docs  
⚡ **Fast** — Uses local vector DB + efficient embedding  
🧠 **Smart** — Built with LangChain and Transformers

---

## 🚀 Features

- 🔒 100% local & private (no external API calls)
- 🧾 Supports PDF, CSV, Notion exports
- 🧠 Uses `gpt-oss-20b` for powerful generation
- 📎 LangChain-based RAG pipeline
- 🔎 FAISS for fast semantic search
- 🎙️ (Optional) Add Whisper for voice input and TTS

---

## 📁 Project Structure

```text
privategpt2/
│
├── backend/ # FastAPI or LangChain server
│ ├── main.py
│ └── rag_pipeline.py
│
├── data/ # Your local documents (PDF, CSV, etc.)
│
├── models/ # gpt-oss-20b and embeddings
│ └── gpt-oss-20b/
│
├── embeddings/ # FAISS index and chunked data
│
├── utils/ # Text splitting, cleaning, etc.
│
├── requirements.txt
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
### 4. Download and Setup the Model

```bash
cd models
git clone https://huggingface.co/openai/gpt-oss-20b
cd ..
```