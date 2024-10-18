FROM python:3.12-slim

WORKDIR /app

COPY Pipfile Pipfile.lock /app/

RUN python3 -m pip install --upgrade pip && \
    pip install pipenv

RUN pipenv install --deploy --ignore-pipfile

COPY . /app

EXPOSE 8000

CMD ["pipenv", "run", "uvicorn", "flexio.app:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
