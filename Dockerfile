### STAGE 1: Build Backend ###
FROM nikolaik/python-nodejs:latest

# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# copy requirements file
COPY ./backend/requirements.txt ./

RUN pip install -r requirements.txt \
    && rm -rf /root/.cache/pip


### STAGE 2: Clone project folder ###
COPY . .

### STAGE 3: Build Frontend ###
WORKDIR /app/frontend
RUN npm install
RUN npm run build


WORKDIR /app