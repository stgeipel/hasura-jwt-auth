## How to use

### 1. clone & install dependencies

Clone this repository:

```
git clone https://github.com/stgeipel/hasura-jwt-auth.git
```

Install npm dependencies:

```
npm install
or
yarn install
```


### 2. Start the REST API server

Execute this command to start the server:

```
npm run dev
or
yarn dev
```

The server is now running on `http://localhost:3000`. You can send the API requests implemented in `server.ts`.

## Using the REST API

You can access the REST API of the server using the following endpoints:

### `POST`

- `/login`: Login as User
  - Body:
    - `email: String` (required): The title of the post
    - `password: String` (optional): The content of the post


