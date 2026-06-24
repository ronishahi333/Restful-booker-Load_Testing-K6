# K6 Load Testing Scripts

This repository contains K6 scripts for load and performance testing.

## Clone Repository

```bash
git clone <repository-url>
cd <repository-name>
```

## Install K6

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
sudo gpg -k
sudo apt-get update
sudo apt-get install k6
```

For detailed installation instructions, refer to the official K6 documentation.

## Run a Test

```bash
k6 run <script-name>.js
```

Example:

```bash
k6 run load-test.js
```
