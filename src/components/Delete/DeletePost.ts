import { useState } from "react";

const useDeletePost = () => {
    const [opacity, setOpacity] = useState<{ [key: number]: number }>({});

    const deletePost = (postId: number) => {
        setOpacity((prev) => ({ ...prev, [postId]: 1 }));

        const interval = setInterval(() => {
            setOpacity((prev) => {
                const currentOpacity = prev[postId] || 1;
                const newOpacity = currentOpacity - 0.1;

                if (newOpacity <= 0) {
                    clearInterval(interval);
                    return { ...prev, [postId]: 0 };
                }

                return { ...prev, [postId]: newOpacity };
            });
        }, 100);
    };

    return { opacity, deletePost };
};

export default useDeletePost;