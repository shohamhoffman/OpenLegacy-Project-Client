# OpenLegacy Project - Client

## Install Dependencies

Run `npm install`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Http Requests

All Http requests are directed to `http://localhost:8080/`. If the server is not running on that address, no items will be presented.

## Running with Docker

CLIENT-
`docker pull shohamhoffmanhaik/openlegacy-project:openlegacy-client-docker` then run-
`docker run --rm -d -p 8080:8080 shohamhoffmanhaik/openlegacy-project:openlegacy-client-docker`

SERVER-
`docker pull shohamhoffmanhaik/openlegacy-project:openlegacy-server-docker`
`docker run --rm -d -p 8080:8080 shohamhoffmanhaik/openlegacy-project:openlegacy-server-docker`
