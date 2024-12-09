install: 
	cd docker; docker compose build;
start: 
	cd docker; docker compose up -d
stop: 
	cd docker; docker compose stop
terminal: 
	cd docker; docker compose exec node bash
down: 
	cd docker; docker compose down
logs:
	cd docker; docker compose logs