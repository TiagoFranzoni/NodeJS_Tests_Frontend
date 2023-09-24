# NodeJS_Frontend

--> Para rodar o projeto:
1- Rode o projeto NodeJS_Tests_API_Backend;
2- NodeJS_Tests_API_Backend>> npm start

3- nesse projeto (NodeJS_Frontend) rode:
```
>> cd test-admin
>> npm run dev
```
4- para rodar os teste, rode:
```
>> npm run cypress:open
```

--> Teste na pasta: 
```
/cypress/e2e
```



# #########################################################
# test-admin

## Installation

Install the application dependencies by running:

```sh
npm install
```

## Development

Start the application in development mode by running:

```sh
npm run dev
```

## Production

Build the application in production mode by running:

```sh
npm run build
```

## DataProvider

The included data provider use [ra-data-simple-rest](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-simple-rest). It fits REST APIs using simple GET parameters for filters and sorting. This is the dialect used for instance in [FakeRest](https://github.com/marmelab/FakeRest).

You'll find an `.env` file at the project root that includes a `VITE_JSON_SERVER_URL` variable. Set it to the URL of your backend.

