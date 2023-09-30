from typing import Union, List

import uvicorn as uvicorn
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()


origins = [
    "http://localhost:3000",
    # Добавьте сюда другие разрешенные источники
]

# Добавление middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Product(BaseModel):
    id: int
    name: str
    description: str
    price: str
    image: str

# Здесь вы можете создать базу данных или использовать фиктивные данные
products_data = [
    Product(id=1, name='Товар 1', description='Описание товара 111', price='$10.99', image='url1.jpg'),
    Product(id=2, name='Товар 2', description='Описание товара 222', price='$19.99', image='url2.jpg'),
    Product(id=3, name='Товар 3', description='Описание товара 333', price='$8.99', image='url3.jpg'),
    # Добавьте другие товары по аналогии
]


@app.get("/products", response_model=List[Product])
async def get_products():
    return products_data


@app.get("/")
def read_root():
    data = [
        {"url": "https://example.com/1", "text": "Tsdfext 1"},
        {"url": "https://example.com/2", "text": "Texsdfdst 2"},
        {"url": "https://example.com/3", "text": "Texsdfdsfdst 3"}
    ]
    return JSONResponse(content=data)


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)