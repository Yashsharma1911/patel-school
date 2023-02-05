package router

import (
	"fmt"
	"net/http"

	controller "github.com/Yashsharma1911/patel-school/controller"
	firebaseConfig "github.com/Yashsharma1911/patel-school/firebase"
	"github.com/gorilla/mux"
	"github.com/razorpay/razorpay-go"
	"github.com/rs/cors"
)

func Router() http.Handler {
	router := mux.NewRouter()
	client, err := firebaseConfig.GetClient()
	if err != nil {
		panic(err)
	}

	corsOptions := cors.Options{
		AllowedOrigins: []string{"*"},
	}
	handler := cors.New(corsOptions).Handler(router)

	razorpayClient := razorpay.NewClient("rzp_test_fQ71PK9Tz2xY4n", "PGj0smtueBwiUz3eMTeylFoT")
	fmt.Printf("%T", razorpayClient)

	router.HandleFunc("/", controller.HomeServe(client)).Methods("GET")
	router.HandleFunc("/api/v1/student/{id}", controller.AddData(client)).Methods("POST")
	router.HandleFunc("/api/v1/student", controller.ShowToClient).Methods("POST")
	router.HandleFunc("/razorpay", controller.PaymentHandler(razorpayClient)).Methods("POST")
	router.HandleFunc("/verification", controller.VerificationHandler).Methods("POST", "OPTIONS", "GET")

	return handler
}
