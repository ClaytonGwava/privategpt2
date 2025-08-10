from langchain.prompts import PromptTemplate

compliance_prompt = PromptTemplate.from_template(
    """Use the following context to answer the question in about 100 words. End by asking if the user wants more information.

Context:
{context}

Question:
{question}

Answr:"""
)
