import React, { useState, useEffect } from "react";
import AdmissionForm from "../../components/admissionForm";
import AdmissionHeading from "../../components/admissionHeading";
import AdmissionUpload from "../../components/admissionUpload";
import { db, storage } from "../../lib/firebase.prod";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";

const INITIAL_VALUES = {
  name: "",
  father: "",
  mother: "",
  dob: "",
  childId: "",
  class: "",
  state: "",
  mobileNumber: "",
  district: "",
  parentMobileNumber: "",
  town: "",
  medium: "",
  nominationNumber: "",
  postOffice: "",
  fatherAnnualIncome: "",

  //set default value of medium
  admissionType: "Regular",
  permanentAddress: "",
  pinCode: "",
  group: "",
  languageOne: "",
  languageTwo: "",
  languageThree: "",
  diversifiedSubjectOne: "",
  diversifiedSubjectTwo: "",
  diversifiedSubjectThree: "",
  additionalSubject: "",
  category: "",
  referal: "",
  adharCardNumber: "",
  documentURL: {
    academicGradeReport: "",
    adharCard: "",
    bankAccount: "",
    transferCertificate: "",
    photo: "",
    incomeCertificate: "",
    optionalGradeMarkSheet: "",
    castCertificate: "",
  },
};

const files = {
  academicGradeReport: "",
  adharCard: "",
  bankAccount: "",
  transferCertificate: "",
  photo: "",
  incomeCertificate: "",
  optionalGradeMarkSheet: "",
  castCertificate: "",
};

const STATE = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry"
];

const CLASS = ["Nursery", "LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

export default function AdmissionContainer({ setIsThanks }) {
  const [toggleState, setToggleState] = useState(1);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [fileValues, setFileValues] = useState(files);
  const [checkClick, setCheckClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isValid, setIsValid] = useState(false);

  // use regex on input fields to validate
  const validate = (value, type) => {
    switch (type) {
      case "name":
        return /^[a-zA-Z ]+$/.test(value);
      case "father":
        return /^[a-zA-Z ]+$/.test(value);
      case "mother":
        return /^[a-zA-Z ]+$/.test(value);
      case "dob":
        return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value);
      case "childId":
        return /^[0-9]{9}$/.test(value);
      case "class":
        return /^([a-zA-Z]{0,7})?([0-9]{1,2})?$/.test(value);
      case "state":
        return /^[a-zA-Z ]+$/.test(value);
      case "mobileNumber":
        return /^[0-9]{10}$/.test(value);
      case "district":
        return /^[a-zA-Z ]+$/.test(value);
      case "parentMobileNumber":
        return /^[0-9]{10}$/.test(value);
      case "town":
        return /^[a-zA-Z ]+$/.test(value);
      case "medium":
        return /^[a-zA-Z ]+$/.test(value);
      case "nominationNumber":
        return /^[A-Z]([0-9]){2}\/[0-9]{6}\/[0-9]{3}$/.test(value);
      case "postOffice":
        return /^[a-zA-Z ]+$/.test(value);
      case "fatherAnnualIncome":
        return /^[0-9]{3,14}$/.test(value);
      case "admissionType":
        return /^[a-zA-Z ]+$/.test(value);
      case "permanentAddress":
        return /^[a-zA-Z0-9 ]+$/.test(value);
      case "pinCode":
        return /^[0-9]{6}$/.test(value);
      case "group":
        return /^[a-zA-Z ]+$/.test(value);
      case "languageOne":
        return /^[a-zA-Z ]+$/.test(value);
      case "languageTwo":
        return /^[a-zA-Z ]+$/.test(value);
      case "diversifiedSubjectOne":
        return /^[a-zA-Z ]+$/.test(value);
      case "diversifiedSubjectTwo":
        return /^[a-zA-Z ]+$/.test(value);
      case "diversifiedSubjectThree":
        return /^[a-zA-Z ]+$/.test(value);
      case "additionalSubject":
        return /^[a-zA-Z ]+$/.test(value);
      case "category":
        return /^[a-zA-Z ]+$/.test(value);
      case "referal":
        return /^[a-zA-Z ]+$/.test(value);
      case "adharCardNumber":
        // eslint-disable-next-line no-useless-escape
        return /^[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/.test(value);
      default:
        return;
    }
  };

  const checkInputValidation = (e) => {
    const { name, value, required } = e.target;
    const isValid = validate(value, name);
    if ((required && value === "") || isValid === false) {
      e.target.style.borderColor = "#D43260";
      setIsValid(false);
    } else {
      e.target.style.borderColor = "#83A22A";
      setIsValid(true);
    }
  }

  // managing input
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // add hyphen after every four digit in adharCardNumber
    if (name === "adharCardNumber") {
      const adharCardNumber = value.replace(/\D/g, "");
      const adharCardNumberArray = adharCardNumber.match(/.{1,4}/g);
      let adharCardNumberHyphen = "";
      if (adharCardNumberArray !== null) {
        adharCardNumberHyphen = adharCardNumberArray.join("-");
      }
      setValues({ ...values, [name]: adharCardNumberHyphen !== "" ? adharCardNumberHyphen : "" });
      checkInputValidation(e);
    }
    else {
      setValues({ ...values, [name]: value, fees: false });
      // check required fields are filled or not
    }
    checkInputValidation(e);
  };

  // upload data
  const handleAdd = async (PersonalDetails) => {
    await addDoc(collection(db, "students"), {
      ...PersonalDetails,
      timestamp: serverTimestamp(),
    });

    // to call new thanks component after adding data 
    setIsThanks(true);
  };

  // upload files values to firebase storage
  const handleFileUpload = async (e) => {
    e.preventDefault();
    //to disable submit button
    setCheckClick(true);

    let PersonalDetails = values;

    try {
      const uploadFile = await Promise.all(Object.keys(fileValues).map(async (key) => {
        if (fileValues[key] !== "") {
          const fileRef = ref(
            storage,
            `pdfFiles/${PersonalDetails.name} | ${PersonalDetails.father}/${key}/${fileValues[key].name + v4()
            }`
          );
          return uploadBytes(fileRef, fileValues[key]).then(async (snapshot) => {
            // get url of uploaded file
            const UrlData = await getDownloadURL(snapshot.ref)
            if (UrlData) {
              PersonalDetails = { ...PersonalDetails, documentURL: { ...PersonalDetails.documentURL, [key]: UrlData } };
            }
            return UrlData;
          })
        }
        else {
          return "no file";
        }
      }))

      if (uploadFile) {
        handleAdd(PersonalDetails)
      }

    }
    catch (error) {
      console.log(error)
    }
  };

  const handleFiles = (e) => {
    const name = e.target.name;
    const value = e.target.files[0];
    setFileValues({ ...fileValues, [name]: value });
  };


  const callFileInput = (e) => {
    e.preventDefault();
    e.target.parentElement.querySelector(".fileInput").click();
  };

  const callConFileInput = (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.querySelector(".fileInput").click();
  }

  // check language
  const handleLanguage = () => {
    if (values.medium === "English") {
      setValues({ ...values, languageOne: "English", languageTwo: "Hindi" });
    } else if (values.medium === "Hindi") {
      setValues({ ...values, languageOne: "Hindi", languageTwo: "English" });
    } else if (values.medium === "Urdu") {
      setValues({ ...values, languageOne: "Urdu", languageTwo: "English" });
    } else {
      setValues({ ...values, languageOne: "", languageTwo: "", languageThree: "" });
    }
  };

  const handleLanguageThree = () => {
    if (values.class <= 10) {
      setValues({ ...values, languageThree: "Sanskrit" });
    }
    else {
      setValues({ ...values, languageThree: "" });
    }
  }


  const handleDiversifiedSubject = () => {
    if (values.class <= 10 || values.class === "LKG" || values.class === "UKG" || values.class === "Nursery") {
      setValues({ ...values, diversifiedSubjectOne: "Mathematics", diversifiedSubjectTwo: "Science", diversifiedSubjectThree: "Social Science", languageThree: "Sanskrit", group: "NA" });
    } else {
      if (values.group === "Mathematics") {
        setValues({
          ...values,
          diversifiedSubjectOne: "Mathematics",
          diversifiedSubjectTwo: "Physics",
          diversifiedSubjectThree: "Chemistry",
        });
      } else if (values.group === "Biology") {
        setValues({
          ...values,
          diversifiedSubjectOne: "Biology",
          diversifiedSubjectTwo: "Physics",
          diversifiedSubjectThree: "Chemistry",
        });
      } else if (values.group === "Commerce") {
        setValues({
          ...values,
          diversifiedSubjectOne: "Economics",
          diversifiedSubjectTwo: "Business Studies",
          diversifiedSubjectThree: "Accountancy",
        });
      } else if (values.group === "Art") {
        setValues({
          ...values,
          diversifiedSubjectOne: "Geography",
          diversifiedSubjectTwo: "History",
          diversifiedSubjectThree: "Political Science",
        });
      } else if (values.group === "Agriculture") {
        setValues({
          ...values,
          diversifiedSubjectOne: "Elementry of Science",
          diversifiedSubjectTwo: "Crop Production",
          diversifiedSubjectThree: "Animal Husbandry",
        });
      } else {
        setValues({
          ...values,
          diversifiedSubjectOne: "",
          diversifiedSubjectTwo: "",
          diversifiedSubjectThree: "",
        });
      }
    }
  };

  useEffect(() => {
    handleLanguage();
    // eslint-disable-next-line
  }, [values.medium]);

  useEffect(() => {
    handleLanguageThree();
    // eslint-disable-next-line
  }, [values.class]);

  useEffect(() => {
    handleDiversifiedSubject();
    // eslint-disable-next-line
  }, [values.group, values.class]);

  return (
    <>
      <AdmissionHeading>
        <AdmissionHeading.Text>Admission Form</AdmissionHeading.Text>
        <AdmissionHeading.Div />
      </AdmissionHeading>

      {toggleState === 1 ? (
        <AdmissionForm data-cy="admission-form-student-details">
          <AdmissionForm.Section>
            <AdmissionForm.SectionDetails displayOnSmall>
              <AdmissionForm.Text color="#2458B8">
                1. Student Details
              </AdmissionForm.Text>
              <AdmissionForm.Border color="#2458B8" />
            </AdmissionForm.SectionDetails>
            <AdmissionForm.SectionUpload>
              <AdmissionForm.Text color="#C4C4C4">
                2. Upload Documents
              </AdmissionForm.Text>
              <AdmissionForm.Border color="#C4C4C4" />
            </AdmissionForm.SectionUpload>
          </AdmissionForm.Section>
          <AdmissionForm.FormContainer>
            <AdmissionForm.Div>
              <AdmissionForm.FormBase
                onSubmit={(event) => {
                  event.preventDefault();
                  setToggleState(2);
                }}
              >
                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="name">
                      Name
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Input
                      type="text"
                      value={values.name}
                      onChange={handleInputChange}
                      name="name"
                      placeholder="Full Name"
                      required="required"
                      id="name"
                      data-cy="name"
                      autoFocus="autofocus"
                    />
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="father">
                      Father Name
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Input
                      type="text"
                      value={values.father}
                      onChange={handleInputChange}
                      name="father"
                      id="father"
                      data-cy="father"
                      placeholder="Father Name"
                    />
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.Label htmlFor="motherName">
                      Mother's Name
                    </AdmissionForm.Label>
                    <AdmissionForm.Input
                      type="text"
                      value={values.mother}
                      onChange={handleInputChange}
                      name="mother"
                      placeholder="Full Name"
                      id="motherName"
                      data-cy="motherName"
                    />
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="dob">
                      DOB
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Input
                      type="date"
                      value={values.dob}
                      onChange={handleInputChange}
                      name="dob"
                      id="dob"
                      data-cy="dob"
                    />
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.Label htmlFor="childId">
                      Child Id
                    </AdmissionForm.Label>
                    <AdmissionForm.Input
                      type="text"
                      value={values.childId}
                      onChange={handleInputChange}
                      name="childId"
                      placeholder="00000000"
                      id="childId"
                      data-cy="childId"
                      maxLength="9"
                    />
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="class">
                      Class
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Select
                      type="text"
                      value={values.class}
                      onChange={handleInputChange}
                      name="class"
                      required="required"
                      id="class"
                      data-cy="class"
                    >
                      {CLASS.map((classes, index) => (
                        <AdmissionForm.Option value={classes} key={index}>{classes}</AdmissionForm.Option>
                      ))}
                    </AdmissionForm.Select>
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="state">
                      State
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Select
                      type="text"
                      value={values.state}
                      onChange={handleInputChange}
                      name="state"
                      required="required"
                      id="state"
                      data-cy="state"
                    >
                      <AdmissionForm.Option value="Select">
                        Select
                      </AdmissionForm.Option>
                      {STATE.map((state, index) => (
                        <AdmissionForm.Option key={index} value={state}>
                          {state}
                        </AdmissionForm.Option>
                      ))}
                    </AdmissionForm.Select>
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="district">
                      District
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Input
                      type="text"
                      value={values.district}
                      onChange={handleInputChange}
                      name="district"
                      id="district"
                      data-cy="district"
                      placeholder="Enter District"
                      required="required"
                    />
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="mobileNumber">
                      Mobile Number
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Input
                      type="text"
                      value={values.mobileNumber}
                      onChange={handleInputChange}
                      name="mobileNumber"
                      id="mobileNumber"
                      data-cy="mobileNumber"
                      required="required"
                      placeholder="9999999999"
                      maxLength="10"
                    />
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.Label htmlFor="town">
                      Town
                    </AdmissionForm.Label>
                    <AdmissionForm.Input
                      type="text"
                      value={values.town}
                      onChange={handleInputChange}
                      name="town"
                      id="town"
                      data-cy="town"
                      placeholder="Enter Town Name"
                    />
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.Label htmlFor="ParentMobileNumber">
                      Parent Mobile Number
                    </AdmissionForm.Label>
                    <AdmissionForm.Input
                      type="text"
                      value={values.parentMobileNumber}
                      onChange={handleInputChange}
                      name="parentMobileNumber"
                      id="parentMobileNumber"
                      data-cy="parentMobileNumber"
                      placeholder="9999999999"
                      maxLength="10"
                    />
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="medium">
                      Medium
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Select
                      type="text"
                      value={values.medium}
                      onChange={handleInputChange}
                      name="medium"
                      required="required"
                      id="medium"
                      data-cy="medium"
                    >
                      <AdmissionForm.Option value="Select">
                        Select
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="English">
                        English
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Hindi">
                        Hindi
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Urdu">
                        Urdu
                      </AdmissionForm.Option>
                    </AdmissionForm.Select>
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.Label htmlFor="nominationNumber">
                      Nomination Number
                    </AdmissionForm.Label>
                    <AdmissionForm.Input
                      type="text"
                      value={values.nominationNumber}
                      onChange={handleInputChange}
                      name="nominationNumber"
                      placeholder="A19/162034/000"
                      id="nominationNumber"
                      data-cy="nominationNumber"
                      maxLength="14"
                    />
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.Label htmlFor="postOffice">
                      Post Office
                    </AdmissionForm.Label>
                    <AdmissionForm.Input
                      type="text"
                      value={values.postOffice}
                      onChange={handleInputChange}
                      name="postOffice"
                      id="postOffice"
                      data-cy="postOffice"
                      placeholder="Enter Post Office"
                    />
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.Label htmlFor="fatherAnnualIncome">
                      Father's Annual Income
                    </AdmissionForm.Label>
                    <AdmissionForm.Input
                      type="text"
                      value={values.fatherAnnualIncome}
                      onChange={handleInputChange}
                      name="fatherAnnualIncome"
                      placeholder="₹100000"
                      id="fatherAnnualIncome"
                      data-cy="fatherAnnualIncome"
                    />
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="admissionType">
                      Admission Type
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Select
                      type="text"
                      value={values.admissionType}
                      onChange={handleInputChange}
                      name="admissionType"
                      required="required"
                      id="admissionType"
                      data-cy="admissionType"
                    >
                      <AdmissionForm.Option value="English">
                        Regular
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Hindi">
                        Private
                      </AdmissionForm.Option>
                    </AdmissionForm.Select>
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="permanentAddress">
                      Permanent Address
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Input
                      type="text"
                      value={values.permanentAddress}
                      onChange={handleInputChange}
                      name="permanentAddress"
                      id="permanentAddress"
                      data-cy="permanentAddress"
                      placeholder="address"
                    />
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="pinCode">
                      Pin Code
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Input
                      type="text"
                      value={values.pinCode}
                      onChange={handleInputChange}
                      name="pinCode"
                      id="pinCode"
                      data-cy="pinCode"
                      placeholder="000000"
                      maxLength="6"
                    />
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="adharCardNumber">
                      Adharcard Number
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Input
                      type="text"
                      value={values.adharCardNumber}
                      onChange={handleInputChange}
                      name="adharCardNumber"
                      placeholder="0000-0000-0000"
                      required="required"
                      id="adharCardNumber"
                      data-cy="adharCardNumber"
                      maxLength="14"
                    />
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="group">
                      Group
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Select
                      type="text"
                      value={values.group}
                      onChange={handleInputChange}
                      name="group"
                      required={values.class <= 10 ? "" : "required"}
                      id="group"
                      data-cy="group"
                      disabled={(values.class <= 10 || values.class === "LKG" || values.class === "UKG" || values.class === "Nursery") ? "disabled" : ""}
                    >
                      <AdmissionForm.Option value="Select">
                        Select
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Mathematics">
                        Mathematics
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Biology">
                        Biology
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Commerce">
                        Commerce
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Art">
                        Art / Humanities
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Agriculture">
                        Agriculture
                      </AdmissionForm.Option>
                      <AdmissionForm.Option
                        disabled="disabled"
                        value="Home Science"
                      >
                        Home Science
                      </AdmissionForm.Option>
                    </AdmissionForm.Select>
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="languageOne">
                      Language 1
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Input
                      type="text"
                      value={values.languageOne}
                      name="languageOne"
                      placeholder="Language 1"
                      required="required"
                      id="languageOne"
                      data-cy="languageOne"
                      readOnly="readonly"
                      disabled="disabled"
                    />
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="languageTwo">
                      Language 2
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Select
                      type="text"
                      value={values.languageTwo}
                      onChange={handleInputChange}
                      name="languageTwo"
                      id="languageTwo"
                      data-cy="languageTwo"
                      placeholder="Language 2"
                      readOnly={(values.medium === "Hindi" && values.class > 10) ? "" : "readOnly"}
                      disabled={(values.medium === "Hindi" && values.class > 10) ? "" : "disabled"}
                    >
                      <AdmissionForm.Option value="English">
                        English
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Sanskrit" >
                        Sanskrit
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Hindi" disabled="disabled">
                        Hindi
                      </AdmissionForm.Option>
                    </AdmissionForm.Select>
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div display={(values.class >= 11 || values.class <= 5 || values.class === "LKG" || values.class === "UKG" || values.class === "Nursery") ? "none" : ""}>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="languageOne">
                      Language 3
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Input
                      type="text"
                      value={values.languageThree}
                      name="languageThree"
                      placeholder="Language 3"
                      onChange={handleInputChange}
                      required="required"
                      id="languageThree"
                      data-cy="languageThree"
                      readOnly="readonly"
                      disabled="disabled"
                    />
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="diversifiedSubjectOne">
                      Diversified Subject 1
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Select
                      type="text"
                      value={values.diversifiedSubjectOne}
                      onChange={handleInputChange}
                      name="diversifiedSubjectOne"
                      placeholder="eg. Mathematics"
                      required="required"
                      id="diversifiedSubjectOne"
                      data-cy="diversifiedSubjectOne"
                      disabled={values.group === "Art" ? "" : "disabled"}
                    >
                      <AdmissionForm.Option value="Select">
                        Select
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Economics" disabled={
                        (values.diversifiedSubjectTwo === "Economics" || values.diversifiedSubjectThree === "Economics") ? "disabled" : ""
                      }>
                        Economics
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Geography" disabled={
                        (values.diversifiedSubjectTwo === "Geography" || values.diversifiedSubjectThree === "Geography") ? "disabled" : ""
                      }>
                        Geography
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Political Science" disabled={
                        (values.diversifiedSubjectTwo === "Political Science" || values.diversifiedSubjectThree === "Political Science") ? "disabled" : ""
                      }>
                        Political Science
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Socialogy" disabled={
                        (values.diversifiedSubjectTwo === "Socialogy" || values.diversifiedSubjectThree === "Socialogy") ? "disabled" : ""
                      }>
                        Socialogy
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="History" disabled={
                        (values.diversifiedSubjectTwo === "History" || values.diversifiedSubjectThree === "History") ? "disabled" : ""
                      }>
                        History
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Mathematics" disabled="disabled">
                        Mathematics
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Physics" disabled="disabled">
                        Physics
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Biology" disabled="disabled">
                        Biology
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Chemistry" disabled="disabled">
                        Chemistry
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Science" disabled="disabled">
                        Science
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Social Science" disabled="disabled">
                        Social Science
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Business Studies" disabled="disabled">
                        Business Studies
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Accountancy" disabled="disabled">
                        Accountancy
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Elementry of Science" disabled="disabled">
                        Elementry of Science
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Crop Production" disabled="disabled">
                        Crop Production
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Animal Husbandry" disabled="disabled">
                        Animal Husbandry
                      </AdmissionForm.Option>
                    </AdmissionForm.Select>
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="diversifiedSubjectTwo">
                      Diversified Subject 2
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Select
                      type="text"
                      value={values.diversifiedSubjectTwo}
                      onChange={handleInputChange}
                      name="diversifiedSubjectTwo"
                      id="diversifiedSubjectTwo"
                      data-cy="diversifiedSubjectTwo"
                      placeholder="eg. Physics"
                      disabled={values.group === "Art" ? "" : "disabled"}
                    >
                      <AdmissionForm.Option value="Select">
                        Select
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Economics" disabled={
                        (values.diversifiedSubjectOne === "Economics" || values.diversifiedSubjectThree === "Economics") ? "disabled" : ""
                      }>
                        Economics
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Geography" disabled={
                        (values.diversifiedSubjectOne === "Geography" || values.diversifiedSubjectThree === "Geography") ? "disabled" : ""
                      }>
                        Geography
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Political Science" disabled={
                        (values.diversifiedSubjectOne === "Political Science" || values.diversifiedSubjectThree === "Political Science") ? "disabled" : ""
                      }>
                        Political Science
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Socialogy" disabled={
                        (values.diversifiedSubjectOne === "Socialogy" || values.diversifiedSubjectThree === "Socialogy") ? "disabled" : ""
                      }>
                        Socialogy
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="History" disabled={
                        (values.diversifiedSubjectOne === "History" || values.diversifiedSubjectThree === "History") ? "disabled" : ""
                      }>
                        History
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Mathematics" disabled="disabled">
                        Mathematics
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Physics" disabled="disabled">
                        Physics
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Biology" disabled="disabled">
                        Biology
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Chemistry" disabled="disabled">
                        Chemistry
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Science" disabled="disabled">
                        Science
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Social Science" disabled="disabled">
                        Social Science
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Business Studies" disabled="disabled">
                        Business Studies
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Accountancy" disabled="disabled">
                        Accountancy
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Elementry of Science" disabled="disabled">
                        Elementry of Science
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Crop Production" disabled="disabled">
                        Crop Production
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Animal Husbandry" disabled="disabled">
                        Animal Husbandry
                      </AdmissionForm.Option>
                    </AdmissionForm.Select>
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="diversifiedSubjectThree">
                      Diversified Subject 3
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Select
                      type="text"
                      value={values.diversifiedSubjectThree}
                      onChange={handleInputChange}
                      name="diversifiedSubjectThree"
                      placeholder="eg. Chemistry"
                      required="required"
                      id="diversifiedSubjectThree"
                      data-cy="diversifiedSubjectThree"
                      disabled={values.group === "Art" ? "" : "disabled"}
                    >
                      <AdmissionForm.Option value="Select">
                        Select
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Economics" disabled={
                        (values.diversifiedSubjectOne === "Economics" || values.diversifiedSubjectTwo === "Economics") ? "disabled" : ""
                      }>
                        Economics
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Geography" disabled={
                        (values.diversifiedSubjectOne === "Geography" || values.diversifiedSubjectTwo === "Geography") ? "disabled" : ""
                      }>
                        Geography
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Political Science" disabled={
                        (values.diversifiedSubjectOne === "Political Science" || values.diversifiedSubjectTwo === "Political Science") ? "disabled" : ""
                      }>
                        Political Science
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Socialogy" disabled={
                        (values.diversifiedSubjectOne === "Socialogy" || values.diversifiedSubjectTwo === "Socialogy") ? "disabled" : ""
                      }>
                        Socialogy
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="History" disabled={
                        (values.diversifiedSubjectOne === "History" || values.diversifiedSubjectTwo === "History") ? "disabled" : ""
                      }>
                        History
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Mathematics" disabled="disabled">
                        Mathematics
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Physics" disabled="disabled">
                        Physics
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Biology" disabled="disabled">
                        Biology
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Chemistry" disabled="disabled">
                        Chemistry
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Science" disabled="disabled">
                        Science
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Social Science" disabled="disabled">
                        Social Science
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Business Studies" disabled="disabled">
                        Business Studies
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Accountancy" disabled="disabled">
                        Accountancy
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Elementry of Science" disabled="disabled">
                        Elementry of Science
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Crop Production" disabled="disabled">
                        Crop Production
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Animal Husbandry" disabled="disabled">
                        Animal Husbandry
                      </AdmissionForm.Option>
                    </AdmissionForm.Select>
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.LabelRequired htmlFor="additionalSubject">
                      Additional Subject
                    </AdmissionForm.LabelRequired>
                    <AdmissionForm.Select
                      type="text"
                      value={values.additionalSubject}
                      onChange={handleInputChange}
                      name="additionalSubject"
                      required="required"
                      id="additionalSubject"
                      data-cy="additionalSubject"
                      disabled={(values.class <= 8 || values.class === "LKG" || values.class === "UKG" || values.class === "Nursery") ? "disabled" : ""}
                    >
                      <AdmissionForm.Option value="Select">
                        Select
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Mathematics" disabled={
                        values.diversifiedSubjectOne === "Mathematics" ? "disabled" : ""
                      }>
                        Mathematics
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Biology" disabled={
                        values.diversifiedSubjectOne === "Biology" ? "disabled" : ""
                      }>
                        Biology
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value=" Information Technology">
                        Information Technology
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Drawing / Painting">
                        Drawing / Painting
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="Music">
                        Music
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="No Additional Subject">
                        No Additional Subject
                      </AdmissionForm.Option>
                    </AdmissionForm.Select>
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>

                <AdmissionForm.Div>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.Label htmlFor="category">
                      Category
                    </AdmissionForm.Label>
                    <AdmissionForm.Select
                      type="text"
                      value={values.category}
                      onChange={handleInputChange}
                      name="category"
                      id="category"
                      data-cy="category"
                    >
                      <AdmissionForm.Option value="Select">
                        Select
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="General" >
                        General
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="OBC">
                        OBC
                      </AdmissionForm.Option>
                      <AdmissionForm.Option value="SC">SC</AdmissionForm.Option>
                      <AdmissionForm.Option value="ST">ST</AdmissionForm.Option>
                    </AdmissionForm.Select>
                  </AdmissionForm.InputWrap>
                  <AdmissionForm.InputWrap>
                    <AdmissionForm.Label htmlFor="father">
                      Referal
                    </AdmissionForm.Label>
                    <AdmissionForm.Input
                      type="text"
                      value={values.referal}
                      onChange={handleInputChange}
                      name="referal"
                      id="referal"
                      data-cy="referal"
                      placeholder="Referal"
                    />
                  </AdmissionForm.InputWrap>
                </AdmissionForm.Div>
                <AdmissionForm.Button data-cy="submit">Submit</AdmissionForm.Button>
              </AdmissionForm.FormBase>
            </AdmissionForm.Div>
          </AdmissionForm.FormContainer>
        </AdmissionForm>
      ) : (
        <AdmissionUpload data-cy="upload-section">
          <AdmissionForm.Section>
            <AdmissionForm.SectionDetails>
              <AdmissionForm.Text color="#90B12B">
                1. Student Details
              </AdmissionForm.Text>
              <AdmissionForm.Border color="#90B12B" />
            </AdmissionForm.SectionDetails>
            <AdmissionForm.SectionUpload displayOnSmall>
              <AdmissionForm.Text color="#2458B8">
                2. Upload Documents
              </AdmissionForm.Text>
              <AdmissionForm.Border color="#2458B8" />
            </AdmissionForm.SectionUpload>
          </AdmissionForm.Section>
          <AdmissionUpload.UploadContainer>
            <AdmissionUpload.Div flexDirection="column" justifyContent="center">
              <AdmissionUpload.Text>Uplaod these documents in ( .pdf/.doc ) format</AdmissionUpload.Text>
              <AdmissionUpload.Form>

                {/* first row */}
                <AdmissionUpload.Div flexDirection="row" justifyContent="space-between" Wrap="wrap" justifyContentOnSmall="center">
                  <AdmissionUpload.Div maxWidth="485.71" alignItems="flex-end" marginTop="35px">
                    <AdmissionUpload.Div flexDirection="column">
                      <AdmissionUpload.FileText>
                        Academic grade report of last year
                      </AdmissionUpload.FileText>
                      <AdmissionUpload.LabelContainer onClick={callConFileInput}>
                        <AdmissionUpload.FileIcon src="images/icons/file-icon-blue.svg" />
                        <AdmissionUpload.FileText>{fileValues.academicGradeReport !== "" ? fileValues.academicGradeReport.name : "No file selected"}</AdmissionUpload.FileText>
                      </AdmissionUpload.LabelContainer>
                    </AdmissionUpload.Div>
                    <AdmissionUpload.Button onClick={callFileInput}>
                      select
                    </AdmissionUpload.Button>
                    <AdmissionUpload.FileInput
                      className="fileInput"
                      type="file"
                      accept=".pdf,.doc"
                      onChange={handleFiles}
                      name="academicGradeReport"
                    />
                  </AdmissionUpload.Div>
                  <AdmissionUpload.Div maxWidth="485.71" alignItems="flex-end" marginTop="35px">
                    <AdmissionUpload.Div flexDirection="column">
                      <AdmissionUpload.FileText>
                        Adhar Card
                      </AdmissionUpload.FileText>
                      <AdmissionUpload.LabelContainer onClick={callConFileInput}>
                        <AdmissionUpload.FileIcon src="images/icons/file-icon-blue.svg" />
                        <AdmissionUpload.FileText>{fileValues.adharCard !== "" ? fileValues.adharCard.name : "No file selected"}</AdmissionUpload.FileText>
                      </AdmissionUpload.LabelContainer>
                    </AdmissionUpload.Div>
                    <AdmissionUpload.Button onClick={callFileInput}>
                      select
                    </AdmissionUpload.Button>
                    <AdmissionUpload.FileInput
                      className="fileInput"
                      type="file"
                      accept=".pdf,.doc"
                      onChange={handleFiles}
                      name="adharCard"
                    />
                  </AdmissionUpload.Div>
                </AdmissionUpload.Div>

                {/* second row */}
                <AdmissionUpload.Div flexDirection="row" justifyContent="space-between" Wrap="wrap" justifyContentOnSmall="center">
                  <AdmissionUpload.Div maxWidth="485.71" alignItems="flex-end" marginTop="35px">
                    <AdmissionUpload.Div flexDirection="column">
                      <AdmissionUpload.FileText>
                        Bank Account
                      </AdmissionUpload.FileText>
                      <AdmissionUpload.LabelContainer onClick={callConFileInput}>
                        <AdmissionUpload.FileIcon src="images/icons/file-icon-blue.svg" />
                        <AdmissionUpload.FileText>{fileValues.bankAccount !== "" ? fileValues.bankAccount.name : "No file selected"}</AdmissionUpload.FileText>
                      </AdmissionUpload.LabelContainer>
                    </AdmissionUpload.Div>
                    <AdmissionUpload.Button onClick={callFileInput}>
                      select
                    </AdmissionUpload.Button>
                    <AdmissionUpload.FileInput
                      className="fileInput"
                      type="file"
                      accept=".pdf,.doc"
                      onChange={handleFiles}
                      name="bankAccount"
                    />
                  </AdmissionUpload.Div>
                  <AdmissionUpload.Div maxWidth="485.71" alignItems="flex-end" marginTop="35px">
                    <AdmissionUpload.Div flexDirection="column">
                      <AdmissionUpload.FileText>
                        Transfer Certificate
                      </AdmissionUpload.FileText>
                      <AdmissionUpload.LabelContainer onClick={callConFileInput}>
                        <AdmissionUpload.FileIcon src="images/icons/file-icon-blue.svg" />
                        <AdmissionUpload.FileText>{fileValues.transferCertificate !== "" ? fileValues.transferCertificate.name : "No file selected"}</AdmissionUpload.FileText>
                      </AdmissionUpload.LabelContainer>
                    </AdmissionUpload.Div>
                    <AdmissionUpload.Button onClick={callFileInput}>
                      select
                    </AdmissionUpload.Button>
                    <AdmissionUpload.FileInput
                      className="fileInput"
                      type="file"
                      accept=".pdf,.doc"
                      onChange={handleFiles}
                      name="transferCertificate"
                    />
                  </AdmissionUpload.Div>
                </AdmissionUpload.Div>

                {/* third row */}
                <AdmissionUpload.Div flexDirection="row" justifyContent="space-between" Wrap="wrap" justifyContentOnSmall="center">

                  <AdmissionUpload.Div maxWidth="485.71" alignItems="flex-end" marginTop="35px">
                    <AdmissionUpload.Div flexDirection="column">
                      <AdmissionUpload.FileText>
                        Student Photo (.jpeg ,png ,jpg)
                      </AdmissionUpload.FileText>
                      <AdmissionUpload.LabelContainer onClick={callConFileInput}>
                        <AdmissionUpload.FileIcon src="images/icons/file-icon-blue.svg" />
                        <AdmissionUpload.FileText>{fileValues.photo !== "" ? fileValues.photo.name : "No file selected"}</AdmissionUpload.FileText>
                      </AdmissionUpload.LabelContainer>
                    </AdmissionUpload.Div>
                    <AdmissionUpload.Button onClick={callFileInput}>
                      select
                    </AdmissionUpload.Button>
                    <AdmissionUpload.FileInput
                      className="fileInput"
                      type="file"
                      accept=".pdf,.doc, image/*"
                      onChange={handleFiles}
                      name="photo"
                    />
                  </AdmissionUpload.Div>

                  <AdmissionUpload.Div maxWidth="485.71" alignItems="flex-end" marginTop="35px">
                    <AdmissionUpload.Div flexDirection="column">
                      <AdmissionUpload.FileText>
                        Income Certificate
                      </AdmissionUpload.FileText>
                      <AdmissionUpload.LabelContainer onClick={callConFileInput}>
                        <AdmissionUpload.FileIcon src="images/icons/file-icon-blue.svg" />
                        <AdmissionUpload.FileText>{fileValues.incomeCertificate !== "" ? fileValues.incomeCertificate.name : "No file selected"}</AdmissionUpload.FileText>
                      </AdmissionUpload.LabelContainer>
                    </AdmissionUpload.Div>
                    <AdmissionUpload.Button onClick={callFileInput}>
                      select
                    </AdmissionUpload.Button>
                    <AdmissionUpload.FileInput
                      className="fileInput"
                      type="file"
                      accept=".pdf,.doc"
                      onChange={handleFiles}
                      name="incomeCertificate"
                    />
                  </AdmissionUpload.Div>

                </AdmissionUpload.Div>

                {/* fourth row */}
                <AdmissionUpload.Div flexDirection="row" justifyContent="space-between" Wrap="wrap" alignItemsCenter="center" justifyContentOnSmall="center">

                  <AdmissionUpload.Div maxWidth="485.71" alignItems="flex-end" marginTop="35px">
                    <AdmissionUpload.Div flexDirection="column">
                      <AdmissionUpload.FileText>
                        {values.class === "10" ? "Eight" : (values.class === "12" ? "Tenth" : "Eight")} grade marksheet
                      </AdmissionUpload.FileText>
                      <AdmissionUpload.LabelContainer onClick={callConFileInput}>
                        <AdmissionUpload.FileIcon src="images/icons/file-icon-blue.svg" />
                        <AdmissionUpload.FileText>{fileValues.optionalGradeMarkSheet !== "" ? fileValues.optionalGradeMarkSheet.name : "No file selected"}</AdmissionUpload.FileText>
                      </AdmissionUpload.LabelContainer>
                    </AdmissionUpload.Div>
                    <AdmissionUpload.Button onClick={callFileInput}>
                      select
                    </AdmissionUpload.Button>
                    <AdmissionUpload.FileInput
                      className="fileInput"
                      type="file"
                      accept=".pdf,.doc"
                      onChange={handleFiles}
                      name="optionalGradeMarkSheet"
                    />
                  </AdmissionUpload.Div>

                  <AdmissionUpload.Div maxWidth="485.71" alignItems="flex-end" marginTop="35px">
                    <AdmissionUpload.Div flexDirection="column">
                      <AdmissionUpload.FileText>
                        Cast Certificate
                      </AdmissionUpload.FileText>
                      <AdmissionUpload.LabelContainer onClick={callConFileInput}>
                        <AdmissionUpload.FileIcon src="images/icons/file-icon-blue.svg" />
                        <AdmissionUpload.FileText>{fileValues.castCertificate !== "" ? fileValues.castCertificate.name : "No file selected"}</AdmissionUpload.FileText>
                      </AdmissionUpload.LabelContainer>
                    </AdmissionUpload.Div>
                    <AdmissionUpload.Button onClick={callFileInput}>
                      select
                    </AdmissionUpload.Button>
                    <AdmissionUpload.FileInput
                      className="fileInput"
                      type="file"
                      accept=".pdf,.doc"
                      onChange={handleFiles}
                      name="castCertificate"
                    />
                  </AdmissionUpload.Div>

                </AdmissionUpload.Div>

                <AdmissionForm.Button data-cy="final-submit" onClick={handleFileUpload} disabled={checkClick}>{
                  checkClick === true ? "Loading..." : "Submit"
                }
                </AdmissionForm.Button>
              </AdmissionUpload.Form>
            </AdmissionUpload.Div>
          </AdmissionUpload.UploadContainer>
        </AdmissionUpload>
      )}
    </>
  );
}
