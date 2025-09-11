FROM golang:1.25-alpine

# Cài các tool cần thiết
RUN apk add --no-cache git curl

# Cài đúng air (theo module name mới)
RUN go install github.com/air-verse/air@latest

WORKDIR /app

# Copy toàn bộ source code
COPY . .

# Expose cổng chạy app
EXPOSE 8080

# Chạy air để hot reload
CMD ["air"]
