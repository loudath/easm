from fastapi import FastAPI
from api import assets

app = FastAPI(title="PTaaS Backend")

app.include_router(assets.router, prefix="/api/assets")

@app.get("/health")
async def health():
    return {"status": "ok"}

