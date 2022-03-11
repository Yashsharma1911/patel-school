import React, { useState } from 'react'
import AdmissionForm from '../components/admissionForm'
import AdmissionHeading from '../components/admissionHeading'
import AdmissionUpload from '../components/admissionUpload'

const initialValues = {
    name: '',
    father: '',
    mother: '',
    dob: '',
    childId: '',
    class: '',
    state: '',
    mobileNumber: '',
    district: '',
    parentMobileNumber: '',
    town: '',
    medium: '',
    nominationNumber: '',
    postOffice: '',
    fatherAnnualIncome: '',
    admissionType: '',
    permanentAddress: '',
    pincode: '',
    group: '',
    languageOne: '',
    languageTwo: '',
    diversifiedSubjectOne: '',
    diversifiedSubjectTwo: '',
    diversifiedSubjectThree: '',
    additionalSubject: '',
    category: '',
    referal: '',
    adharcard: ''
}

export default function AdmissionContainer() {
    const [toggleState, setToggleState] = useState(1);
    const [values, setValues] = useState(initialValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }
    console.log(values);
    return (
        <>
            <AdmissionHeading>
                <AdmissionHeading.Text>Admission Form</AdmissionHeading.Text>
                <AdmissionHeading.Div />
            </AdmissionHeading>

            {toggleState === 1 ? <AdmissionForm>
                <AdmissionForm.Section>
                    <AdmissionForm.SectionDetails>
                        <AdmissionForm.Text color="#2458B8">1. Student Details</AdmissionForm.Text>
                        <AdmissionForm.Border color="#2458B8" />
                    </AdmissionForm.SectionDetails>
                    <AdmissionForm.SectionUpload>
                        <AdmissionForm.Text color="#C4C4C4">2. Upload Documents</AdmissionForm.Text>
                        <AdmissionForm.Border color="#C4C4C4" />
                    </AdmissionForm.SectionUpload>
                </AdmissionForm.Section>
                <AdmissionForm.FormContainer>

                    <AdmissionForm.Div>
                        <AdmissionForm.FormBase>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="name">Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        placeholder="Full Name"
                                        required="required"
                                        id="name"
                                        autoFocus="autofocus"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="father">Father Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.father}
                                        onChange={handleInputChange}
                                        name="father"
                                        id="father"
                                        placeholder="Father Name"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="motherName">Mother's Name</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.mother}
                                        onChange={handleInputChange}
                                        name="mother"
                                        placeholder="Full Name"
                                        required="required"
                                        id="motherName"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="dob">DOB *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="date"
                                        value={values.dob}
                                        onChange={handleInputChange}
                                        name="dob"
                                        id="dob"
                                        placeholder="dd/mm/yyyy"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="childId">Child Id</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.childId}
                                        onChange={handleInputChange}
                                        name="childId"
                                        placeholder="00000000"
                                        required="required"
                                        id="childId"
                                        maxLength="9"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="class">Class *</AdmissionForm.Label>
                                    <AdmissionForm.Select
                                        type="text"
                                        value={values.class}
                                        onChange={handleInputChange}
                                        name="class"
                                        required="required"
                                        id="class"
                                    >
                                        <AdmissionForm.Option value="1">1</AdmissionForm.Option>
                                        <AdmissionForm.Option value="2">2</AdmissionForm.Option>
                                        <AdmissionForm.Option value="3">3</AdmissionForm.Option>
                                        <AdmissionForm.Option value="4">4</AdmissionForm.Option>
                                        <AdmissionForm.Option value="5">5</AdmissionForm.Option>
                                        <AdmissionForm.Option value="6">6</AdmissionForm.Option>
                                        <AdmissionForm.Option value="7">7</AdmissionForm.Option>
                                        <AdmissionForm.Option value="8">8</AdmissionForm.Option>
                                        <AdmissionForm.Option value="9">9</AdmissionForm.Option>
                                        <AdmissionForm.Option value="10">10</AdmissionForm.Option>
                                        <AdmissionForm.Option value="11">11</AdmissionForm.Option>
                                        <AdmissionForm.Option value="12">12</AdmissionForm.Option>
                                    </AdmissionForm.Select>
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="state">State *</AdmissionForm.Label>
                                    <AdmissionForm.Select
                                        type="text"
                                        value={values.state}
                                        onChange={handleInputChange}
                                        name="state"
                                        required="required"
                                        id="state"
                                    >
                                        <AdmissionForm.Option value="Select">Select</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Andhra Pradesh">Andhra Pradesh</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Arunachal Pradesh">Arunachal Pradesh</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Assam">Assam</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Bihar">Bihar</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Chhattisgarh">Chhattisgarh</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Goa">Goa</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Gujarat">Gujarat</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Haryana">Haryana</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Himachal Pradesh">Himachal Pradesh</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Jharkhand">Jharkhand</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Karnataka">Karnataka</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Kerala">Kerala</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Madhya Pradesh">Madhya Pradesh</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Maharashtra">Maharashtra</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Manipur">Manipur</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Meghalaya">Meghalaya</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Mizoram">Mizoram</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Nagaland">Nagaland</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Odisha">Odisha</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Punjab">Punjab</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Rajasthan">Rajasthan</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Sikkim">Sikkim</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Tamil Nadu">Tamil Nadu</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Telangana">Telangana</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Tripura">Tripura</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Uttar Pradesh">Uttar Pradesh</AdmissionForm.Option>
                                        <AdmissionForm.Option value="Uttarakhand">Uttarakhand</AdmissionForm.Option>
                                        <AdmissionForm.Option value="West Bengal">West Bengal</AdmissionForm.Option>
                                    </AdmissionForm.Select>
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="father">Father Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.father}
                                        onChange={handleInputChange}
                                        name="father"
                                        id="father"
                                        placeholder="Father Name"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="name">Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        placeholder="Full Name"
                                        required="required"
                                        id="name"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="father">Father Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.father}
                                        onChange={handleInputChange}
                                        name="father"
                                        id="father"
                                        placeholder="Father Name"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="name">Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        placeholder="Full Name"
                                        required="required"
                                        id="name"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="father">Father Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.father}
                                        onChange={handleInputChange}
                                        name="father"
                                        id="father"
                                        placeholder="Father Name"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="name">Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        placeholder="Full Name"
                                        required="required"
                                        id="name"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="father">Father Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.father}
                                        onChange={handleInputChange}
                                        name="father"
                                        id="father"
                                        placeholder="Father Name"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="name">Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        placeholder="Full Name"
                                        required="required"
                                        id="name"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="father">Father Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.father}
                                        onChange={handleInputChange}
                                        name="father"
                                        id="father"
                                        placeholder="Father Name"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="name">Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        placeholder="Full Name"
                                        required="required"
                                        id="name"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="father">Father Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.father}
                                        onChange={handleInputChange}
                                        name="father"
                                        id="father"
                                        placeholder="Father Name"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="name">Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        placeholder="Full Name"
                                        required="required"
                                        id="name"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="father">Father Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.father}
                                        onChange={handleInputChange}
                                        name="father"
                                        id="father"
                                        placeholder="Father Name"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="name">Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        placeholder="Full Name"
                                        required="required"
                                        id="name"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="father">Father Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.father}
                                        onChange={handleInputChange}
                                        name="father"
                                        id="father"
                                        placeholder="Father Name"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="name">Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        placeholder="Full Name"
                                        required="required"
                                        id="name"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="father">Father Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.father}
                                        onChange={handleInputChange}
                                        name="father"
                                        id="father"
                                        placeholder="Father Name"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="name">Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        placeholder="Full Name"
                                        required="required"
                                        id="name"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="father">Father Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.father}
                                        onChange={handleInputChange}
                                        name="father"
                                        id="father"
                                        placeholder="Father Name"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                            <AdmissionForm.Div>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="name">Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        placeholder="Full Name"
                                        required="required"
                                        id="name"
                                    />
                                </AdmissionForm.InputWrap>
                                <AdmissionForm.InputWrap>
                                    <AdmissionForm.Label htmlFor="father">Father Name *</AdmissionForm.Label>
                                    <AdmissionForm.Input
                                        type="text"
                                        value={values.father}
                                        onChange={handleInputChange}
                                        name="father"
                                        id="father"
                                        placeholder="Father Name"
                                    />
                                </AdmissionForm.InputWrap>
                            </AdmissionForm.Div>

                        </AdmissionForm.FormBase>
                    </AdmissionForm.Div>

                    <AdmissionForm.Button onClick={() => setToggleState(2)}>Submit</AdmissionForm.Button>
                </AdmissionForm.FormContainer>
            </AdmissionForm>

                :

                <AdmissionUpload>
                    <AdmissionForm.Section>
                        <AdmissionForm.SectionDetails>
                            <AdmissionForm.Text color="#90B12B">1. Student Details</AdmissionForm.Text>
                            <AdmissionForm.Border color="#90B12B" />
                        </AdmissionForm.SectionDetails>
                        <AdmissionForm.SectionUpload>
                            <AdmissionForm.Text color="#2458B8">2. Upload Documents</AdmissionForm.Text>
                            <AdmissionForm.Border color="#2458B8" />
                        </AdmissionForm.SectionUpload>
                    </AdmissionForm.Section>
                    <AdmissionUpload.UploadContainer>

                    </AdmissionUpload.UploadContainer>
                </AdmissionUpload>
            }

        </>
    )
}
