from .prompts import compliance_prompt


import subprocess
from .prompts import (
    compliance_prompt,
)


def ollama_generate(prompt: str) -> str:
    process = subprocess.run(
        ["ollama", "run", "gpt-oss:20b"],
        input=prompt,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )

    if process.returncode != 0:
        raise RuntimeError(f"Ollama error: {process.stderr}")
    return process.stdout.strip()


def generate_answer(query, context_docs):
    context = "\n".join(doc.page_content for doc in context_docs)
    prompt_text = compliance_prompt.format(question=query, context=context)
    response = ollama_generate(prompt_text)
    keyword = "...done thinking."
    idx = response.rfind(keyword)
    if idx == -1:
        return response.strip()
    return response[idx + len(keyword) :].strip()
