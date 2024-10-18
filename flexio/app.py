from contextlib import asynccontextmanager

from beanie import init_beanie
from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient

from flexio.config import DB_URI
from flexio.routes import router


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Starting app")
    from flexio.models import __models__

    client = AsyncIOMotorClient(DB_URI)
    db = client.get_default_database()

    await init_beanie(db, document_models=__models__)

    yield

    print("Stopping app")
    client.close()


app = FastAPI(title="Flexio", lifespan=lifespan)

app.include_router(router)
