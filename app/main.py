# app/main.py
from fastapi import FastAPI, UploadFile
from ingest.loader import load_pdf
from ingest.splitter import split_text
from ingest.embedder import embed_and_store
from rag.retriever import retrieve_relevant_chunks
from rag.generator import generate_answer
from fastapi.middleware.cors import CORSMiddleware
import os
from pydantic import BaseModel

class QuestionRequest(BaseModel):
    query: str

class IngestRequest(BaseModel):
    file_name: str
    
app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],
)


@app.post("/upload-doc/")
async def upload_doc(file: UploadFile):
    file_path = f"data/raw/{file.filename}"
    with open(file_path, "wb") as f:
        f.write(await file.read())
    return {"filename": file.filename}


@app.post("/ingest/")
def ingest(request: IngestRequest):
    file_name = request.file_name
    text = load_pdf(f"data/raw/{file_name}")
    chunks = split_text(text)
    embed_and_store(chunks)
    return {"status": "Document ingested"}


@app.post("/ask/")
def ask_question(request: QuestionRequest):
    query = request.query
    docs = retrieve_relevant_chunks(query)
    answer = generate_answer(query, docs)
    return {"answer": answer}
