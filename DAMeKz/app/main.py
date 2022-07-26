import pathlib
from typing import Optional
from fastapi import FastAPI

app = FastAPI()

BASE_DIR = pathlib.Path(__file__).resolve().parent
MODEL_DIR = BASE_DIR / "models"
ARTICLE_DIR = BASE_DIR / "articles"

MODEL_PATH = MODEL_DIR / "models.h5"
TOKENIZER_PATH = MODEL_DIR / "hi.json"

AI_MODEL = None
# Load the model
@app.on_event("startup")
def startup():
    # if MODEL_PATH.exists():
    pass

@app.get("/")
def read_index(q:Optional[str]=None): 
    return {"hello":"world", "BASE_DIR":str(BASE_DIR), "MODEL_DIR":str(MODEL_DIR)}