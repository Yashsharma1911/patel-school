package main

import (
	"fmt"
	"log"
	"net/http"

	firebaseConfig "github.com/Yashsharma1911/patel-school/firebase"
	router "github.com/Yashsharma1911/patel-school/route"
)

func main() {

	// Initialize the Firebase app
	err := firebaseConfig.InitFirebase()
	if err != nil {
		log.Fatalf("Error initializing Firebase: %v", err)
	}
	r := router.Router()

	fmt.Println("Server is running on port 1337")
	log.Fatal(http.ListenAndServe(":1337", r))
}
