import React, { useState } from "react";
import { searchBarStyle, searchBarContainer } from '../Search/Styles';
import generateRandomParagraph from "./Paragraph";
import { Post } from "../Read/Posts";
import { v4 as uuidv4 } from "uuid";

interface AddBarProps {
    newPosts: Post[];
    addNewPost: React.Dispatch<React.SetStateAction<Post[]>>;
}

const AddBar: React.FC<AddBarProps> = ({ addNewPost }) => {

    const [title, setTitle] = useState<string>("");
      
    const handleAddPost = () => {
        const newPost = {
          id: uuidv4(), 
          title: title,
          body: generateRandomParagraph(50), 
        };
        
        // @ts-ignore
        addNewPost((prevPosts: Post[]) => [newPost, ...prevPosts]);
        setTitle(""); 
      };
    
      const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
      ) => {

        if (event.key === "Enter" && title.trim().length > 2) {
          handleAddPost(); 
        }
      };

    return (
         <div style={searchBarContainer}>
                <input type="text" 
                style={searchBarStyle} 
                placeholder="Add a post"
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default AddBar;