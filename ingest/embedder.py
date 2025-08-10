from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS


def embed_and_store(chunks, index_path="vectorstore/"):
    embeddings = HuggingFaceEmbeddings(model_name="hkunlp/instructor-xl")
    vectorstore = FAISS.from_texts(chunks, embeddings)
    vectorstore.save_local(index_path)
