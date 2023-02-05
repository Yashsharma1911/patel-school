package controller

import (
	// "encoding/json"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/Yashsharma1911/patel-school/model"
	razorpay "github.com/razorpay/razorpay-go"
	"github.com/sony/sonyflake"
)

const paymentCapture = 1
const amount = 499
const currency = "INR"

func PaymentHandler(razorpayClient *razorpay.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		data := map[string]interface{}{
			"amount":          amount,
			"currency":        currency,
			"receipt":         generateReceipt(),
			"partial_payment": false,
			"payment_capture": paymentCapture,
		}

		response, err := razorpayClient.Order.Create(data, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		responseBytes, err := json.Marshal(response)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		var responseStructData model.Order
		err = json.Unmarshal(responseBytes, &responseStructData)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		responseData := map[string]interface{}{
			"id":       responseStructData.ID,
			"currency": responseStructData.Currency,
			"amount":   responseStructData.Amount,
		}
		err = json.NewEncoder(w).Encode(responseData)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
}

func VerificationHandler(w http.ResponseWriter, r *http.Request) {
	secret := "12345678"
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	hash := hmac.New(sha256.New, []byte(secret))
	hash.Write(body)
	signature := hex.EncodeToString(hash.Sum(nil))

	signatureHeader := r.Header.Get("x-razorpay-signature")
	if signature != signatureHeader {
		http.Error(w, "Invalid signature", http.StatusBadRequest)
		return
	}

	var requestData map[string]interface{}
	err = json.Unmarshal(body, &requestData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Println(requestData)
	err = ioutil.WriteFile("payment1.json", body, 0644)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	responseData := map[string]interface{}{
		"status": "ok",
	}

	err = json.NewEncoder(w).Encode(responseData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

}

func generateReceipt() string {
	flake := sonyflake.NewSonyflake(sonyflake.Settings{})
	id, err := flake.NextID()
	if err != nil {
		fmt.Println(err)
		return ""
	}
	return fmt.Sprintf("%x", id)
}
