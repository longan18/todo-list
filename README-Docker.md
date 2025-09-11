# Docker Setup for Todo List Application

## Tổng quan
Dự án Todo List này sử dụng Docker Compose để chạy ở môi trường local với:
- **Backend**: Go (Gin framework) chạy trên port 8080
- **Frontend**: Static HTML/CSS/JS được serve bởi Nginx trên port 3000

## Yêu cầu hệ thống
- Docker
- Docker Compose

## Cách chạy dự án

### 1. Clone và di chuyển vào thư mục dự án
```bash
cd /home/wsl-admin/projects/todo-list
```

### 2. Chạy ứng dụng với Docker Compose
```bash
# Build và chạy tất cả services
docker-compose up --build

# Hoặc chạy ở background
docker-compose up --build -d
```

### 3. Truy cập ứng dụng
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080

### 4. Dừng ứng dụng
```bash
# Dừng và xóa containers
docker-compose down

# Dừng, xóa containers và volumes
docker-compose down -v
```

## Cấu trúc Docker

### Backend (Go)
- **Dockerfile**: Multi-stage build để tối ưu kích thước image
- **Port**: 8080
- **Volume**: `./backend/files` để lưu trữ file uploads

### Frontend (Nginx)
- **Dockerfile**: Sử dụng Nginx Alpine để serve static files
- **Port**: 3000 (mapped từ 80 trong container)
- **Nginx config**: Proxy các API requests đến backend

### Network
- Tất cả services chạy trong cùng một Docker network `todo-network`
- Frontend có thể gọi backend thông qua hostname `backend:8080`

## Các lệnh hữu ích

```bash
# Xem logs
docker-compose logs

# Xem logs của một service cụ thể
docker-compose logs backend
docker-compose logs frontend

# Restart một service
docker-compose restart backend

# Rebuild một service cụ thể
docker-compose up --build backend

# Vào shell của container
docker-compose exec backend sh
docker-compose exec frontend sh
```

## Troubleshooting

### Port đã được sử dụng
Nếu port 3000 hoặc 8080 đã được sử dụng, bạn có thể thay đổi trong file `docker-compose.yml`:
```yaml
ports:
  - "3001:80"  # Thay đổi port frontend
  - "8081:8080" # Thay đổi port backend
```

### File uploads không hoạt động
Đảm bảo thư mục `./backend/files` có quyền ghi:
```bash
mkdir -p ./backend/files
chmod 755 ./backend/files
```

### Rebuild sau khi thay đổi cấu hình
```bash
# Dừng và xóa containers hiện tại
docker-compose down

# Rebuild và chạy lại
docker-compose up --build
```

### Rebuild từ đầu (xóa tất cả)
```bash
# Xóa tất cả containers, networks, và images
docker-compose down --rmi all --volumes --remove-orphans
docker-compose up --build
```
