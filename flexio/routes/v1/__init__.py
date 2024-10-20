from .ai import router as ai_router
from .user import router as user_router

__all__ = ('router',)

from fastapi import APIRouter

router = APIRouter(prefix='/v1', tags=['v1'])
router.include_router(user_router)
router.include_router(ai_router)
