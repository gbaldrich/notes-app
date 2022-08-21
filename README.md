
- execute a dockerized version of mongodb by runing `docker compose up`. this will execute the file `docker-compose.yml`

```dockerfile
version: '3.9'

services:
  mongo:
  image: mongo
  ports:
    - "27017:27017"
  environment:
    - MONGO_INITDB_ROOT_USERNAME=user
    - MONGO_INITDB_ROOT_PASSWORD=password
```