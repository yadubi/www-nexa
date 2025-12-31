package main

import (
	"fmt"
	"log"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "hello im")
}

func main() {
	http.HandleFunc("/", helloHandler)
	
	port := ":8080"
	log.Printf("Server is starting on port %s...\n", port)
	
	if err := http.ListenAndServe(port, nil); err != nil {
		log.Fatal(err)
	}
}
