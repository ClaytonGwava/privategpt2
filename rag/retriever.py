from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings


def retrieve_relevant_chunks(query, index_path="vectorstore/"):
    embeddings = HuggingFaceEmbeddings(model_name="hkunlp/instructor-xl")
    vectorstore = FAISS.load_local(index_path, embeddings, allow_dangerous_deserialization=True)
    return vectorstore.similarity_search(query, k=5)
