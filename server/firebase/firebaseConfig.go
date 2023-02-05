package firebaseConfig

import (
	"context"
	"log"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
)

var App *firebase.App

func InitFirebase() error {
	ctx := context.Background()
	opt := option.WithCredentialsFile("./firebase/patel-school-sa.json")
	config := &firebase.Config{ProjectID: "patel-school-karera"}
	app, err := firebase.NewApp(ctx, config, opt)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}

	App = app
	return nil
}

func GetClient() (*firestore.Client, error) {
	ctx := context.Background()
	client, err := App.Firestore(ctx)
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
		return nil, err
	}
	return client, nil
}
