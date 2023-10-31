# Book_Management


# CRUD Operations API (Node.js)

This is a simple Node.js-based API for performing CRUD (Create, Read, Update, Delete) operations on a collection of books. This README provides an overview of the API, its endpoints, and how to use it with example cURL commands.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
  - [Create](#create)
  - [Read](#read)
  - [Update](#update)
  - [Delete](#delete)
- [Endpoints](#endpoints)
- [Example cURL Commands](#example-curl-commands)
- [Deployment on EC2](#deployment-on-ec2)

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone the repository:

```bash
git clone https://github.com/munnukumar/Book_Management
cd Book_Management
```

2. Install dependencies:

```bash
npm install
```

3. Run the API:

```bash
npm start
```

The API will start and listen on `http://localhost:8000`.

## Usage

The API provides the following CRUD operations for managing a collection of books.

### Create

- **Endpoint:** `/api/v1/add/new/books`
- **Method:** POST
- **Request Payload:** JSON object with book details (title, author, summary)
- **Response:** JSON object with the newly created book's details, including a unique ID.

### Read

- **Endpoint:** `/api/v1/get/all/books`
- **Method:** GET
- **Request Query Parameter:** `page` (optional)
- **Response:** JSON array containing a list of books. You can specify the `page` parameter to paginate the results.

### Read Single Book

- **Endpoint:** `/api/v1/get/single/books/<book_id>`
- **Method:** GET
- **Response:** JSON object with the details of the specified book.

### Update

- **Endpoint:** `/api/v1/update/books/<book_id>`
- **Method:** PUT
- **Request Payload:** JSON object with the fields you want to update.
- **Response:** JSON object with the updated book details.

### Delete

- **Endpoint:** `/api/v1/delete/books/<book_id>`
- **Method:** DELETE
- **Response:** JSON object confirming the deletion of the specified book.

## Endpoints

- Create a new book: `POST /api/v1/add/new/books`
- Get all books: `GET /api/v1/get/all/books`
- Get a single book: `GET /api/v1/get/single/books/<book_id>`
- Update a book: `PUT /api/v1/update/books/<book_id>`
- Delete a book: `DELETE /api/v1/delete/books/<book_id>`

## Example cURL Commands

Here are some example cURL commands to interact with the API:

#### Create a new book:

```bash
curl --location 'http://localhost:8000/api/v1/add/new/books' \
--header 'Content-Type: application/json' \
--data '{
    "title": "CHEM7",
    "author": "RD VERMAN",
    "summary": "best book for CHEM7"
}'
```

#### Get all books (with optional pagination):

```bash
curl --location 'http://localhost:8000/api/v1/get/all/books?page=4'
```

#### Get a single book:

```bash
curl --location 'http://localhost:8000/api/v1/get/single/books/65400f9b2ba7b80488bbecae'
```

#### Update a book:

```bash
curl --location --request PUT 'http://localhost:8000/api/v1/update/books/65400f402ba7b80488bbeca4' \
--header 'Content-Type: application/json' \
--data '{
    "summary": "Updated summary for CHEM7"
}'
```

#### Delete a book:

```bash
curl --location --request DELETE 'http://localhost:8000/api/v1/delete/books/65400f9b2ba7b80488bbecae'
```

### Deployment on EC2

Currently the public IP address to test out the code is: **51.20.182.42**
1. **Create an EC2 instance in eu-north-1 region:**

   - Go to the AWS Management Console.
   - Select the "EU (Stockholm)" region (eu-north-1).
   - Launch an EC2 instance using your preferred Amazon Machine Image (AMI) with Node.js.
   - Configure security groups to allow inbound traffic on port 80 (HTTP).

2. **Install Node.js and MongoDB:**

   - SSH into your EC2 instance.
   - Install Node.js and MongoDB as required.

3. **Start the MongoDB service:**

   - Start the MongoDB service on your EC2 instance.

4. **Clone the repository:**

   - SSH into your EC2 instance.
   - Clone the project repository using Git.

5. **Install Nginx:**

   - Install Nginx on your EC2 instance.

6. **Configure Nginx:**

   - Configure Nginx to redirect requests from port 8000 to port 80. You can update the Nginx configuration file to achieve this.

7. **Run the API:**

   - Start your Node.js API on your EC2 instance.

The API will be accessible via the public IP on port 80.
