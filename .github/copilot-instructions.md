# Copilot Instructions for www-nexa

## Project Overview
This is a minimal HTTP server written in Go that demonstrates a basic Go HTTP interface. The server returns "hello im" when accessed at the root endpoint.

## Technology Stack
- **Language**: Go 1.24.11 or higher
- **Framework**: Standard library (`net/http`)
- **Dependencies**: None (uses only Go standard library)

## Code Style and Conventions

### Go Standards
- Follow standard Go conventions and idioms
- Use `gofmt` for code formatting
- Follow effective Go guidelines
- Keep code simple and idiomatic

### Project-Specific Conventions
- Use descriptive handler function names ending with `Handler` (e.g., `helloHandler`)
- Use structured logging with the `log` package
- Handle errors appropriately with `log.Fatal` for critical errors

## Build and Test Commands

### Building
```bash
go build -o www-nexa
```

### Running
```bash
go run main.go
```

### Testing
```bash
go test ./...
```

### Formatting
```bash
go fmt ./...
```

## Project Structure
```
.
├── main.go          # Main HTTP server implementation
├── go.mod           # Go module definition
├── README.md        # Project documentation
└── .github/         # GitHub configuration
```

## Development Guidelines

1. **Simplicity First**: This is a minimal example project. Keep changes simple and focused.

2. **Standard Library**: Prefer using Go's standard library over external dependencies when possible.

3. **Error Handling**: Always handle errors appropriately. Use `log.Fatal` for startup errors and proper error responses for HTTP handlers.

4. **HTTP Handlers**: 
   - Create handler functions with signature `func(w http.ResponseWriter, r *http.Request)`
   - Use `http.HandleFunc` to register handlers
   - Return appropriate HTTP status codes

5. **Port Configuration**: Default port is 8080. Log the port when starting the server.

6. **Documentation**: Update README.md if adding new features or changing behavior.

## Testing Guidelines

- Write table-driven tests for handlers
- Use `httptest` package for testing HTTP handlers
- Test both success and error cases
- Keep tests simple and focused

## Common Tasks

### Adding a New Endpoint
1. Create a handler function following the naming convention
2. Register it with `http.HandleFunc` in `main()`
3. Update README.md with endpoint documentation
4. Add tests if test infrastructure exists

### Modifying Response
- Update the handler function
- Ensure response is properly written to `http.ResponseWriter`
- Test manually with curl or browser

## Important Notes

- This is a learning/example project - maintain its simplicity
- No external dependencies should be added without good reason
- Always test changes by running the server and accessing the endpoint
- Keep the codebase minimal and easy to understand
