package controller

import (
	"context"
	"encoding/json"
	"net/http"

	"cloud.google.com/go/firestore"
	"google.golang.org/api/iterator"
)

func HomeServe(client *firestore.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		iter := client.Collection("students").Documents(context.Background())

		var students []map[string]interface{}

		for {
			doc, err := iter.Next()
			if err == iterator.Done {
				break
			} else if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			students = append(students, doc.Data())
		}

		if err := json.NewEncoder(w).Encode(students); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
}
