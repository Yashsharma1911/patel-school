import React, { useState, useEffect } from "react";
import Contact from "../components/contact";
import { db } from "../lib/firebase.prod";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";

const INITIAL_VALUE = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
};

export default function ContactContainer({ setIsThanks }) {
    const [values, setValues] = useState(INITIAL_VALUE);
    const [checkClick, setCheckClick] = useState(false);

    // controling inputs
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    // adding data to firebase
    const handleAdd = async (event) => {
        setCheckClick(true);
        event.preventDefault();
        await addDoc(collection(db, "customersQuestions"), {
            ...values,
            timestamp: serverTimestamp(),
        }).then(() => {
            setCheckClick(false);
            setIsThanks(true);
        }).catch((error) => {
            console.error("Can't add data to firestore", error);
        })
    };

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Contact>
                <Contact.Div wrapOnSmall style={{ alignItems: "center" }}>
                    <Contact.Left>
                        <Contact.Div direction="column">
                            <Contact.HeadlineText>Contact Us</Contact.HeadlineText>
                            <Contact.Text style={{ marginTop: "17px" }}>
                                Our friendly team would love to hear from you!
                            </Contact.Text>
                        </Contact.Div>
                        <Contact.Form style={{ marginTop: "25px" }} onSubmit={handleAdd}>
                            <Contact.Div
                                columns="row"
                                style={{ justifyContent: "space-between" }}
                                wrapOnTooSmall
                            >
                                <Contact.Div direction="column" width="260px">
                                    <Contact.Label>First Name</Contact.Label>
                                    <Contact.Input
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                    />
                                </Contact.Div>
                                <Contact.Div
                                    direction="column"
                                    width="260px"
                                    marginTopOnTooSmall="20px"
                                >
                                    <Contact.Label>Last Name</Contact.Label>
                                    <Contact.Input
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={handleChange}
                                    />
                                </Contact.Div>
                            </Contact.Div>
                            <Contact.Div direction="column">
                                <Contact.Label>Email</Contact.Label>
                                <Contact.Input
                                    type="email"
                                    placeholder="you@example.com"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                            </Contact.Div>
                            <Contact.Div direction="column">
                                <Contact.Label>Message</Contact.Label>
                                <Contact.Textarea
                                    placeholder="Type here..."
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                />
                            </Contact.Div>
                            <Contact.Button type="submit" disabled={checkClick}>{
                                checkClick ? "Sending..." : "Send Message"
                            }</Contact.Button>
                        </Contact.Form>
                    </Contact.Left>

                    {/* added goole form */}
                    <Contact.Right>
                        <Contact.MapFrame title="map" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=patel%20higher%20secondary%20school%20%20karera%20Karera+(Patel%20Higher%20Secondary%20School)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></Contact.MapFrame>
                    </Contact.Right>
                </Contact.Div>
            </Contact>
        </>
    );
}
