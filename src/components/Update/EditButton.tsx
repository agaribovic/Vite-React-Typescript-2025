import React, { useState } from "react";
import { searchBarStyle } from '../Search/Styles';

export const editButtonStyle: React.CSSProperties = {
    backgroundColor: "#FFAC1C",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
    width: "100px",
};

export const hideButton: React.CSSProperties = {
    display: "none"
}

export const editButtonHoverStyle: React.CSSProperties = {
    backgroundColor: "#FFBF00",
    transform: "scale(1.05)",
};

interface EditButtonProps {
    editPost: (postId: number, newTitle: string) => void;
    postId: number;
    currentTitle: string;
}

const EditButton: React.FC<EditButtonProps> = ({ postId, currentTitle, editPost }) => {

    // Hover effect
    const [isHovered, setIsHovered] = React.useState(false);
    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    // Post title
    const [postTitle, setPostTitle] = useState(currentTitle);
    const [showInput, setShowInput] = React.useState("hidden");
    
    const toggleInput = () => {
        setShowInput((prevState) => (prevState === "hidden" ? "text" : "hidden"));
    };

    // Updating post title by calling the function passed as a prop
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && postTitle.trim().length > 2) {
          editPost(postId, postTitle.trim());
        }
    };

    return (
        <>
            <button
                style={{
                    ...editButtonStyle,
                    ...(isHovered ? editButtonHoverStyle : {})
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={toggleInput}
            >
                Edit
            </button>
            <input
                type={showInput}
                placeholder="Edit title"
                style={{
                    ...searchBarStyle,
                    width: "200px",
                    marginLeft: "10px"
                }}
                onChange={(e) => setPostTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
            />
        </>
    );
};

export default EditButton;
