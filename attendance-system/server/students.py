from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

students = {
    "harry": {
        "username": "harry",
        "hashed_password": pwd_context.hash("harry123")
    },
    "john": {
        "username": "john",
        "hashed_password": pwd_context.hash("john123")
    },
    "maria": {
        "username": "maria",
        "hashed_password": pwd_context.hash("maria123")
    }
}

def verify_password(password, hashed_password):
    return pwd_context.verify(password, hashed_password)

def get_student(username: str):
    student = students.get(username)
    return student