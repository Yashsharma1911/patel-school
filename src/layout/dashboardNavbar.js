import * as React from "react";
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
    const [mainItems, setMainItems] = React.useState([
        { icon: Upload, label: "Main A" },
        {
            active: true,
            icon: ChevronDown,
            label: "Main B",
            navExitIcon: Delete,
            children: [
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
            }}
            username="Yash Sharma"
            usernameSubtitle="Class 11"
            userItems={[
                { icon: Overflow, label: "User A" },
                { icon: Overflow, label: "Logout" }
            ]}
            onUserItemSelect={item => console.log(item)}
        />
    );
}