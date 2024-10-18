import ssl

import aiohttp
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from flexio.config import LLAMA_API_URL

router = APIRouter(prefix='/ai', tags=['ai'])


class PromptBody(BaseModel):
    prompt: str


@router.post("/generate")
async def generate(body: PromptBody):
    payload = {"prompt": body.prompt, "model": "llama3.1:8b", "stream": False}

    ssl_context = ssl.create_default_context()
    ssl_context.check_hostname = False
    ssl_context.verify_mode = ssl.CERT_NONE

    async with aiohttp.ClientSession(
        connector=aiohttp.TCPConnector(ssl=ssl_context)
    ) as session:
        try:
            async with session.post(
                LLAMA_API_URL + "generate",
                json=payload,
            ) as response:
                if response.status != 200:
                    raise HTTPException(
                        status_code=response.status, detail="Error from LLAMA API"
                    )
                llama_response = await response.json()
                return llama_response
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
