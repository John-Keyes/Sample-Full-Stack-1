echo "Running Web App."
cd backend
nodemon server.js
cd frontend
npm run dev
cd ..

case "$OSTYPE" in
    "linux-gnu")
    ;;
    "darwin")
    ;;
    "cygwin")
    ;;
    "msys")
    ;;
    "win32")
    ;;
    "win64")
    ;;
    "openbsd")
    ;;
    "freebsd")
    ;;