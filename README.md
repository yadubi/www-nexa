# WWW-Nexa

A simple HTTP server that demonstrates a basic Go HTTP interface.

## Description

This is a minimal HTTP server written in Go that returns "hello im" when accessed.

## Requirements

- Go 1.20 or higher

## Usage

### Run the server

```bash
go run main.go
```

The server will start on port 8080.

### Test the endpoint

Open your browser and visit:
```
http://localhost:8080
```

Or use curl:
```bash
curl http://localhost:8080
```

Expected response:
```
hello im
```

### Build the application

To build an executable:
```bash
go build -o www-nexa
```

Then run:
```bash
./www-nexa
```

## Implementation Details

- Uses Go's standard `net/http` package
- No external dependencies required
- Single endpoint at the root path `/` that returns "hello im"
