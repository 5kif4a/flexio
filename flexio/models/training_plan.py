from pydantic import BaseModel, Field
from typing import List
from beanie import Document, Link
from datetime import datetime

from flexio.utils import utcnow


__all__ = ("Exercise", "WorkoutExercise", "WorkoutDay", "WorkoutPlan")


class Exercise(Document):
    name: str
    muscle_group: str | None = None
    description: str | None = None
    equipment: str | None = None
    video_url: str | None = None
    alternatives: List[Link["Exercise"]] = Field(default_factory=list)

    class Settings:
        collection = "exercises"


class WorkoutExercise(BaseModel):
    exercise: Exercise
    sets: int
    reps: int
    weight: float | None = None
    rest_time: int | None = None


class WorkoutDay(BaseModel):
    day_of_week: int
    exercises: List[WorkoutExercise] = Field(default_factory=list)


class WorkoutPlan(Document):
    name: str
    description: str | None = None
    user_id: int
    days_per_week: int
    workout_days: List[WorkoutDay] = Field(default_factory=list)
    created_at: datetime = Field(default_factory=utcnow)
    updated_at: datetime = Field(default_factory=utcnow)

    class Settings:
        collection = "workout_plans"
