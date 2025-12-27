# Node.js App for CI/CD to Kubernetes

This is a simple Node.js application built with Express.js, designed for testing CI/CD pipelines and deployment to Kubernetes.

## Description

The application provides a basic web server with the following endpoints:
- `/` - Returns "Hello World!"
- `/will` - Returns "Hello Will!"
- `/ready` - Returns "I am ready!" (useful for health checks)

## Prerequisites

- Node.js (version 14 or higher)
- Docker (for containerization)
- Kubernetes cluster (for deployment)
- Jenkins (for CI/CD pipeline)

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```
4. The app will be available at http://localhost:3000

## Testing

Run the tests using:
```bash
npm test
```

## Docker

Build the Docker image:
```bash
docker build -t nodeapp .
```

Run the container:
```bash
docker run -p 3000:3000 nodeapp
```

## Kubernetes Deployment

Apply the Kubernetes manifests:
```bash
kubectl apply -f deploy.yaml
kubectl apply -f service.yaml
```

The service will be exposed on port 5000.

## CI/CD

This project is set up for CI/CD pipelines using Jenkins. The Docker image is built and pushed to a registry, then deployed to Kubernetes.

### Jenkins Server

To run Jenkins as a Docker container:

```bash
docker run -u 0 --privileged --name jenkins -it -d -p 8080:8080 -p 5000:5000 -v /var/run/docker.sock:/var/run/docker.sock -v $(which docker):/usr/bin/docker -v $(which docker):/usr/bin/docker jenkins/jenkins:latest
```

## Project Structure

- `app.js` - Main application file
- `test/test.js` - Test file
- `dockerfile` - Docker configuration
- `deploy.yaml` - Kubernetes deployment manifest
- `service.yaml` - Kubernetes service manifest
- `package.json` - Node.js dependencies and scripts