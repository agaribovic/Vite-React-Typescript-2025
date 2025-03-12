import { useState } from "react";

import GetPosts from "./GetPosts";
import useDeletePost from "../Delete/DeletePost";
import DeleteButton from "../Delete/DeleteButton";
import EditButton from "../Update/EditButton";
import useEditPost from "../Update/EditPost";
import { PostsContainer, Strikethrough } from "./Styles";

import { v4 as uuidv4 } from "uuid";

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  postColor: string;
  query: string;
  newPosts: Post[];
}

const Posts: React.FC<PostsProps> = ({ postColor, query, newPosts }) => {

  const { posts, loading } = GetPosts();
  const { opacity, deletePost } = useDeletePost();
  const { editPost, postTitles } = useEditPost();
  
  const [strikethroughPosts, setStrikethroughPosts] = useState<{ [key: number]: boolean }>({});
  const toggleStrikethrough = (postId: number) => {
    setStrikethroughPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId], 
    }));
  };

  const filteredPosts = [...newPosts, ...posts].filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  const postsPerPage = 5; 
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
  
  return (
    <>
      {loading ? (<p>Loading...</p>) :
        (
          <div id="Posts" style={{ width: "1000px", position: "absolute", left: "0%" }}>
            <h2>Posts</h2>
            {currentPosts.length === 0 ? (<p style={{ color: "red" }}>No posts found.</p>) :
              currentPosts.map((post) => (
                <div key={post.id}
                  id={uuidv4()}
                  style={{
                    ...PostsContainer,
                    backgroundColor: postColor,
                    opacity: opacity[post.id] ?? 1
                  }}
                >
                  <h4>{postTitles[post.id] ?? post.title}</h4>
                  <p
                    style={strikethroughPosts[post.id] ? Strikethrough : { cursor: "pointer" }}
                    onClick={() => toggleStrikethrough(post.id)}
                  >
                    {post.body}
                  </p>            
                    <EditButton
                      postId={post.id}
                      currentTitle={postTitles[post.id] || post.title} 
                      editPost={editPost}
                  />
                  <DeleteButton onClick={() => deletePost(post.id)} />
                </div>
              ))}
            <div className="pagination" style={{ textAlign: "center" }}>
              <button 
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
                disabled={currentPage === 1}>Previous
              </button>
              <span> Page {currentPage} of {totalPages} </span>
              <button 
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} 
                disabled={currentPage === totalPages}
              >
                Next
            </button>
          </div>
        </div>
          
        )}
    </>
  )
}

export default Posts;