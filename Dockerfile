FROM python:3.11-slim

# Switch to root to install system-level packages
USER root
RUN apt-get update && apt-get install -y \
    build-essential \
    libgl1-mesa-glx \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Now switch to the HF user
RUN useradd -m -u 1000 user
USER user
ENV PATH="/home/user/.local/bin:$PATH"

WORKDIR /app

COPY --chown=user backend/requirements.txt .

RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

COPY --chown=user backend/ .

# Note: Check if your FastAPI app is in 'main.py' or 'app/main.py'
# If it's in 'app/main.py', change this to "app.main:app"
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]