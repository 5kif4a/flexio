from beanie import Document


class User(Document):
    display_name: str
    email: str

    class Settings:
        collection = "users"
