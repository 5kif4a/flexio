__all__ = ('router',)

from fastapi import APIRouter
from pydantic import BaseModel

import flexio.models as m

router = APIRouter(prefix='/user', tags=['user'])


class UserCreate(BaseModel):
    name: str
    email: str


@router.post('/')
async def create_user(
    body: UserCreate,
):
    user = m.User(display_name=body.name, email=body.email)
    await user.insert()
    return user.model_dump_json()
