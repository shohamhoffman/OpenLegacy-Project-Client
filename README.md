# OpenLegacy Project - Client

## Install Dependencies

Run `npm install`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Http Requests

All Http requests are directed to `http://localhost:8080/`. If the server is not running on that address, no items will be presented.

## Running with Docker

CLIENT-</br>
`docker pull shohamhoffmanhaik/openlegacy-project:openlegacy-client-docker`</br>
`docker run --rm -d -p 4200:4200 shohamhoffmanhaik/openlegacy-project:openlegacy-client-docker`</br>
Navigate to- `http://localhost:4200/`.

SERVER-</br>
`docker pull shohamhoffmanhaik/openlegacy-project:openlegacy-server-docker`</br>
`docker run --rm -d -p 8080:8080 shohamhoffmanhaik/openlegacy-project:openlegacy-server-docker`</br>

Navigate to- `http://localhost:8080/`.

## IMPORTANT

If you are using Docker Toolbox, please follow the instruction on:</br>
`https://www.jhipster.tech/tips/020_tip_using_docker_containers_as_localhost_on_mac_and_windows.html`</br></br>
Or you can just download the code and run it locally.
