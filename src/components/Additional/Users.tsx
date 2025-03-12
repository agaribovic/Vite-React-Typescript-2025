import { useState } from "react";
import { cardStyle, headingStyle, textStyle, buttonStyle } from "./Styles";
import { deleteButtonStyle } from "../Delete/DeleteButton";

interface User {
    name: string;
    age: number;
    giveWarning: () => void;
}

export default function Users() {

    const [warningMessage, setWarningMessage] = useState<string>("");
    const [counter, setCounter] = useState<number>(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    const user: User = {
        name: "Alen",
        age: 29,
        giveWarning(): void {
            if (warningMessage) {
                setWarningMessage("");
            }
            else {
                setWarningMessage(`${user.name} (${user.age}), this is a warning!`);
            }
        },
    };

    const changeBackgroundColor = () => {
        if (counter % 2 == 0) {
            document.documentElement.style.backgroundColor = "beige";
        } else {
            document.documentElement.style.backgroundColor = "white";
        }
        setCounter(counter + 1);
    }

    return (
        <div id="Users" style={cardStyle}
            onClick={changeBackgroundColor}>
            <h1 style={headingStyle}>{user.name}</h1>
            <h2 style={textStyle}>{user.age}</h2>
            <button
                onClick={() => user.giveWarning()}
                style={{
                    ...(isHovered ? deleteButtonStyle : buttonStyle),
                    /* Reset float style on hover */
                    ...(isHovered ? { float: "none" } : {})
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                
            >
                Warn
            </button>
            <p style={{ color: "red" }}>{warningMessage}</p>
        </div>
    );

}