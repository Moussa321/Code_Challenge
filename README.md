# Areeba_Code_Challenge

Steps to run project :

1. terminal 1 : cd backend && npm i && npm run dev
2. terminal 2 : cd frontend && npm i && npm start

run backend with Docker:

1. docker build -t backend .
2. docker run -it -p 4000:4000 -v $(pwd):/server backend
