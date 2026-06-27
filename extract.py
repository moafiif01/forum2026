import os

def extract_docx(file_path):
    import docx
    doc = docx.Document(file_path)
    text = []
    for para in doc.paragraphs:
        if para.text.strip():
            text.append(para.text)
    return "\n".join(text)

def extract_pdf(file_path):
    from pypdf import PdfReader
    reader = PdfReader(file_path)
    text = []
    for i, page in enumerate(reader.pages):
        page_text = page.extract_text()
        if page_text:
            text.append(f"--- PAGE {i+1} ---")
            text.append(page_text)
    return "\n".join(text)

docx_file = "T6_Rapport_Evaluation_1ere_Edition_Forum_ENSAM_R.docx"
pdf_file1 = "DOSSIER DE PARTENARIAT  (3).pdf"
pdf_file2 = "Présentation générale de l’École.pdf"

with open("extracted_docx.txt", "w", encoding="utf-8") as f:
    f.write(extract_docx(docx_file))

with open("extracted_pdf1.txt", "w", encoding="utf-8") as f:
    f.write(extract_pdf(pdf_file1))
    
with open("extracted_pdf2.txt", "w", encoding="utf-8") as f:
    f.write(extract_pdf(pdf_file2))

print("Extraction complete.")
