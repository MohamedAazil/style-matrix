# from fastapi import APIRouter, Depends
# from sqlalchemy.orm import Session
# from app.schemas import user_schema
# from app.database import get_db
# from app.crud import create_user
# from services import get_current_user
# router = APIRouter()

# @router.post("/", response_model=user_schema.UserResponse)
# def create_user(user: user_schema.UserCreate, user_id: str = Depends(get_current_user),db: Session = Depends(get_db)):
#     return create_user(db, user)


from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas import user_schema
from app.database import get_db
from app.services import get_current_user 

router = APIRouter()

# This matches the frontend call: fetch(`${BACKEND_URL}/api/user-profile`)
@router.post("/user-profile", response_model=user_schema.UserResponse)
def get_or_create_profile(
    user_id: str = Depends(get_current_user), 
    db: Session = Depends(get_db)
):
    # This function will verify the Supabase token and return user data
    # For now, it returns a success placeholder to stop the frontend from crashing
    return {"id": user_id, "email": "user@example.com"}