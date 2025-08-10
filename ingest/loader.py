from PyPDF2 import PdfReader


def load_pdf(file_path):
    reader = PdfReader(file_path)
    return "\n".join(page.extract_text() for page in reader.pages if page.extract_text)
