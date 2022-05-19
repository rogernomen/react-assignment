# Some context before the review
- This project pretends to expose some concepts I've learned through my career like BFF, DDD 
and SOLID principles.
- Just the mobile layout has been implemented
- State management is handled by a mix between React's Context API and React Query
- Tests are done with react-testing-library and Jest
- The functionality it's not fully implemented for a lack of time but most of the topics related to a bigger
development has been covered.
- With extra time potential next steps would be:
  - Use of NextJs for SSR
  - Follow more accurately the design found in flipdish's website.
  - Microfrontends with Module Federation

#
#Time invested in the solution
5-6 hours

## Run the project
This project has been built with Docker and Docker compose to run it.
If you have docker compose installed run in the root of the project:
### `docker-compose up`


## Run the project without Docker
In case you have not installed Docker in your machine, the project can still be executed following these next steps:

### `npm install`
### `npm run start`

#
**For the server initialisation:**
`open a new terminal in the same folder`
### `cd bff`
### `npm install`
### `cd ..`
### `npm run start-server`


