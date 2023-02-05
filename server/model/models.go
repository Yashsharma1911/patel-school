package model

type Student struct {
	AdharCardNumber    string       `json:"adharCardNumber"`
	AdmissionType      string       `json:"admissionType"`
	Address            *Address     `json:"address"`
	Category           string       `json:"category"`
	ChildId            string       `json:"childId"`
	Class              string       `json:"class"`
	Dob                string       `json:"dob"`
	DocumentURL        *DocumentURL `json:"documentURL"`
	Father             string       `json:"father"`
	FatherAnnualIncome string       `json:"fatherAnnualIncome"`
	Fees               []string     `json:"fees"`
	Subjects           *Subject     `json:"subjects"`
	Medium             string       `json:"medium"`
	MobileNumber       string       `json:"mobileNumber"`
	Mother             string       `json:"mother"`
	Name               string       `json:"name"`
	NominationNumber   string       `json:"nominationNumber"`
	ParentMobileNumber string       `json:"parentMobileNumber"`
	Referal            string       `json:"referal"`
	Timestamp          string       `json:"timestamp"`
}

type Subject struct {
	AdditionalSubject       string `json:"additionalSubject"`
	LanguageOne             string `json:"languageOne"`
	LanguageThree           string `json:"languageThree"`
	LanguageTwo             string `json:"languageTwo"`
	DiversifiedSubjectOne   string `json:"diversifiedSubjectOne"`
	DiversifiedSubjectThree string `json:"diversifiedSubjectThree"`
	DiversifiedSubjectTwo   string `json:"diversifiedSubjectTwo"`
	Group                   string `json:"group"`
}

type DocumentURL struct {
	AcademicGradeReport    string `json:"academicGradeReport"`
	AdharCard              string `json:"adharCard"`
	BankAccount            string `json:"bankAccount"`
	CastCertificate        string `json:"castCertificate"`
	IncomeCertificate      string `json:"incomeCertificate"`
	OptionalGradeMarkSheet string `json:"optionalGradeMarkSheet"`
	Photo                  string `json:"photo"`
	TransferCertificate    string `json:"transferCertificate"`
}

type Address struct {
	District         string `json:"district"`
	PermanentAddress string `json:"permanentAddress"`
	PinCode          string `json:"pinCode"`
	PostOffice       string `json:"postOffice"`
	State            string `json:"state"`
	Town             string `json:"town"`
}

type Order struct {
	ID         string `json:"id"`
	Entity     string `json:"entity"`
	Amount     int    `json:"amount"`
	AmountPaid int    `json:"amount_paid"`
	AmountDue  int    `json:"amount_due"`
	Currency   string `json:"currency"`
	Receipt    string `json:"receipt"`
	OfferID    string `json:"offer_id"`
	Status     string `json:"status"`
	Attempts   int    `json:"attempts"`
	CreatedAt  int    `json:"created_at"`
}
