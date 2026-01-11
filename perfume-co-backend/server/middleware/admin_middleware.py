from fastapi import Depends, HTTPException
from middleware.auth_middleware import get_current_user

def admin_only(user=Depends(get_current_user)):
    if not user.get("is_admin"):
        raise HTTPException(status_code=403, detail="Admin only")
    return user
