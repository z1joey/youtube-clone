# YouTube Clone

A video processing service built with Node.js, Express, TypeScript, and Docker.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [ffmpeg](https://ffmpeg.org/) (for local development without Docker): `brew install ffmpeg`

## Docker Commands

### Build the image

```bash
docker build -t video-processing-service .
```

Creates a Docker image tagged as `video-processing-service`. The `-t` flag sets the tag/name. The `.` tells Docker to look for the Dockerfile in the current directory.

If you hit network issues (e.g., in China), add `--no-cache` to force a fresh build:

```bash
docker build --no-cache -t video-processing-service .
```

### Run the container

```bash
docker run -p 3000:3000 -d video-processing-service
```

- `-p 3000:3000` — maps port 3000 on your machine to port 3000 inside the container
- `-d` — runs in detached mode (background)

The service will be available at `http://localhost:3000`.

### List running containers

```bash
docker ps
```

Shows all currently running containers with their ID, name, status, and port mappings.

### List all images

```bash
docker images
```

Shows all locally stored Docker images, including their size and creation date.

### View container logs

```bash
docker logs <container_id_or_name>
```

Prints the stdout/stderr output from a container. Useful for debugging crashes.

Follow logs in real-time:

```bash
docker logs -f <container_id_or_name>
```

### Stop a container

```bash
docker stop <container_id_or_name>
```

Gracefully stops a running container.

### Remove a container

```bash
docker rm <container_id_or_name>
```

Removes a stopped container. Must stop it first.

### Remove an image

```bash
docker rmi video-processing-service
```

Deletes the image from your local storage.

## Cleanup

### Remove all stopped containers

```bash
docker container prune
```

### Remove all unused images

```bash
docker image prune
```

### Nuclear option — remove everything

```bash
docker system prune -a
```

Removes all stopped containers, unused images, and build cache. This is the quickest way to start fresh.

## Project Structure

```
video-processing-service/
├── src/
│   └── index.ts          # Express server entry point
├── Dockerfile             # Container build instructions
├── .dockerignore          # Files excluded from Docker build
├── package.json
└── tsconfig.json
```
