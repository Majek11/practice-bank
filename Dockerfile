FROM openjdk:17-slim
WORKDIR /app
RUN useradd -m -u 1000 sandboxuser
USER sandboxuser
