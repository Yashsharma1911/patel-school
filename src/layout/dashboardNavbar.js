import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { FirebaseUserContext } from "../context/firebase";

import {
    AppNavBar,
    setItemActive
} from "baseui/app-nav-bar";
import {
    ChevronDown,
    Delete,
    Overflow,
    Upload
} from "baseui/icon";

export default function DashboardNavbar() {
    // const { user } = UseAuthListener();
    const { user } = useContext(FirebaseUserContext);
    let navigate = useNavigate(); 

    // firebase function for logout user
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("logout successful");
        }).catch((error) => {
            // An error happened.
            console.log("logout error: ",error);
        });
    }

    const [mainItems, setMainItems] = React.useState([
        {
            id: "admissionformdashboard",
            icon: Upload,
            label: "Admission Form"
        },
        // TODO: Add the rest of the items IDs here when they have path
        {   
            id: "",
            icon: Upload, 
            label: "Fees" 
        },
        { 
            id: "",
            icon: Upload,
            label: "Result" 
        },
        { 
            id: "",
            icon: Upload, 
            label: "Hostel" 
        },
        {
            id: "main-d",
            active: true,
            icon: ChevronDown,
            label: "Main D",
            navExitIcon: Delete,
            children: [
                { icon: Upload, label: "Secondary A" },
                { icon: Upload, label: "Secondary A" },
                { icon: Upload, label: "Secondary A" },
                { icon: Upload, label: "Secondary B" }
            ]
        }
    ]);
    return (
        <AppNavBar
            title="Patel School Karera"
            mainItems={mainItems}
            onMainItemSelect={item => {
                setMainItems(prev => setItemActive(prev, item));
                if (item.id !== ""){
                 navigate(item.id);
                }
            }}
            username={user.providerData[0].displayName ? user.providerData[0].displayName : "User"}
            usernameSubtitle="Class 11"
            userItems={[
                { icon: Overflow, label: "User A" },
                { icon: Overflow, label: "Logout" }
            ]}
            onUserItemSelect={item => {
                if (item.label === "Logout") {
                    logout();
                    navigate("/signin");
                }
            }}
        />
    );
}