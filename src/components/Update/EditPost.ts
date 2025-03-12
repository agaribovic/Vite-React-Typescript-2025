import { useState, useCallback } from "react";

const useEditPost = () => {
  // Use an object to store titles for specific posts
  const [postTitles, setPostTitles] = useState<{ [key: number]: string }>({});

  // The editPost function now updates the postTitle for a specific postId
  const editPost = useCallback((postId: number, newTitle: string) => {
    setPostTitles((prevState) => ({
      ...prevState,
      [postId]: newTitle,  // Update only the title for the specific postId
    }));

  }, []);



  return { editPost, postTitles };
};

export default useEditPost;
