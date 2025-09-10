@echo off
echo Starting Todo List Application...
echo ==================================

REM Check if Go is installed
where go >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Go is not installed
    echo Please install Go from https://golang.org/dl/
    pause
    exit /b 1
)

REM Navigate to backend directory
cd backend

REM Install dependencies
echo Installing backend dependencies...
go mod download

REM Build the backend
echo Building backend...
go build -o todo-app.exe

REM Start the backend server
echo Starting backend server on http://localhost:8090
start /b todo-app.exe

REM Wait a moment for server to start
timeout /t 2 /nobreak >nul

REM Open frontend in browser
echo Opening frontend in browser...
start http://localhost:8090

echo ==================================
echo Application is running!
echo Application URL: http://localhost:8090
echo.
echo Press Ctrl+C to stop the server
echo ==================================

REM Keep the window open
pause >nul