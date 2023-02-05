package controller

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"cloud.google.com/go/firestore"
	"github.com/Yashsharma1911/patel-school/model"
	"github.com/gorilla/mux"
)

func AddData(client *firestore.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// take json data from request body and add it to firestore
		w.Header().Set("Content-Type", "application/json")
		fmt.Println("AddDataCalled")
		ctx := context.Background()

		// take it from param
		params := mux.Vars(r)
		id := params["id"]

		// take it from body
		var data model.Student
		err := json.NewDecoder(r.Body).Decode(&data)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			// show error to client
			return
		}

		docRef, err := client.Collection("students").Doc(id).Set(ctx, data)
		if err != nil {
			// Handle any errors in an appropriate way, such as returning them.
			log.Printf("An error has occurred: %s", err)
		}
		log.Printf("Added document with ID: %s", docRef)
	}
}

func ShowToClient(w http.ResponseWriter, r *http.Request) {
	// show data to client
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode("Data added successfully")
}
