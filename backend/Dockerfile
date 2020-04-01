FROM python:3.8-slim

# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# copy requirements file
COPY ./requirements.txt /app/requirements.txt

# install dependencies
RUN apt-get update \
    && apt-get install gcc -y \
    && apt-get clean

RUN pip install -r /app/requirements.txt \
    && rm -rf /root/.cache/pip

# copy project
COPY . /app/