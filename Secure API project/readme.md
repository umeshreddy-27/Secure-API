# Secure API Project

This project is a secure API built with Node.js and Express. It uses JWT (JSON Web Token) for authentication and authorization. The API fetches data from an external source and provides endpoints for data retrieval and posting.

## Features

- JWT-based authentication and authorization
- Fetch data from an external API
- Paginate fetched data
- Post data to an external API

## Endpoints

- `GET /data`: Fetch all data (requires JWT token)
- `GET /data/:page`: Fetch paginated data (requires JWT token)
- `POST /post-data`: Post data to an external API (requires JWT token)

## Environment Variables

- `JWT_SECRET`: Secret key for signing JWT tokens
- `PORT`: Port number for the server

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the required environment variables
4. Start the server: `npm start`

## Usage

1. Generate a JWT token using `generateToken.js` for testing.
2. Use the token in the `Authorization` header for API requests

## Mermaid Diagram

```mermaid
graph TD
    A[Client] -->|Request with JWT| B[Express Server]
    B -->|Validate Token| C[authMiddleware.js]
    C -->|Valid Token| D[Route Handler]
    D -->|Fetch Data| E[External API]
    E -->|Return Data| D
    D -->|Send Response| A
    C -->|Invalid Token| F[Error Response]
    F -->|Send Error| A