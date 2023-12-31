# Chat App

This is a small and basic chat app utilizing server-side events. Backend is written in Go, frontend in React with TypeScript.

Because of the use of Redis, the application can be scaled horizontally due to the fact that each server instance would not store important state in memory.

A basic session ID system is in place using JWT to ensure that users can only send messages in a room that they are currently in.

## Run it

Currently, there is only a configuration to run the little app in development mode.

The secret key for JWT should be stored in a `.env` file within the `server` folder under the name `JWT_SECRET_KEY`. If the key is not provided, then `env-var-not-found` will be used as a fallback key. The environment variable can also be provide by modifying the `docker-compose.yml` file.

Start your Docker daemon and run the following command while navigated to the project's directory:

```shell
docker compose up --build -d
```

Done. UI can be accessed on `http://localhost:3000` while the server runs on `http://localhost:3001`.
