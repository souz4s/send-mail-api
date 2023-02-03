# quicksnd-api

This is an email project with Deno using the Clean Architecture pattern. The goal is to provide a simple and flexible way to send emails through an API.

## Technologies used

- Deno
- TypeScript

## How to use

Before starting, you need to have Deno installed on your machine.

Clone the repository and run the following commands in the terminal:

```powershell
cd quicksnd-api
```

After cloning the file, it will be necessary to create an .env file following the .env.example file as an example.
To run the code, type the following command in the terminal:

```powershell
deno run --allow-run --allow-read --allow-net --allow-env src/main/server.ts
```

The API will be available at URL **`http://localhost:8080`**.

## Project structure

The project structure follows the Clean Architecture pattern and is divided into layers:

- **`presentation`**: contains the presentation layer, responsible for managing HTTP requests and returning responses.
- **`domain`**: contains the business layer, where the application's use cases and business rules are located.
- **`infra`**: contains the infrastructure layer, where the repositories and implementations of external services are located.

## **Tests**

To run the tests, just run the following command in the terminal:

```powershell
deno test
```

## Contributions

This project is open to contributions. Any improvements or corrections are welcome.

## License

This project is licensed under the MIT. More details can be found in the [LICENSE](https://github.com/souz4s/quicksnd-api/blob/main/LICENSE) file.