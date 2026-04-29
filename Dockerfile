# Use Python 3.11 for PyTorch compatibility
FROM python:3.11-slim

# Hugging Face Spaces run as a user with UID 1000
RUN useradd -m -u 1000 user
USER user
ENV PATH="/home/user/.local/bin:$PATH"

WORKDIR /app

# Copy your backend requirements specifically
COPY --chown=user backend/requirements.txt .

# Install dependencies (CPU versions to avoid the error you had)
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend folder
COPY --chown=user backend/ .

# HF Spaces listen on port 7860 by default
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]