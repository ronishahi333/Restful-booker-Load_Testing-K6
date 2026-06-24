# Restful Booker Load Testing

This repository contains K6 scripts for load and performance testing for https://restful-booker.herokuapp.com/apidoc/index.html. The scripts can be used to evaluate application performance, measure response times. 

## Clone Repository

Clone the repository to your local machine and navigate to the project directory.

```bash
git clone <repository-url>
cd <repository-name>
```

## Install K6

Install K6 on your operating system before running any load tests.

### macOS

```bash
brew install k6
```

### Windows (Chocolatey)

```bash
choco install k6
```

### Linux

```bash
sudo apt-get update
sudo apt-get install k6
```

For detailed installation instructions, refer to the official K6 documentation.

## Run a Test

Execute a load test script using the K6 command-line interface.

```bash
k6 run <script-name>.js
```

Example:

```bash
k6 run load-test.js
```

## Test Results

After execution, K6 will display key performance metrics such as response times, request rates, error rates, and virtual user statistics directly in the terminal.
