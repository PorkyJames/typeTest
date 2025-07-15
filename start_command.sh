echo "Starting Postgres Database..."
sudo service postgresql start

sleep 2

echo "Starting Backend..."
cd my-backend
go run main.go &

cd ..

echo "Starting Frontend in Dev Server..."
npm run dev
