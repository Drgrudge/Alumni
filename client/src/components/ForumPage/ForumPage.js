import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, createPost } from "../../redux/store/forumSlice";
import CreatePost from "./CreatePost"; // Component for creating a new post
import PostList from "./PostList"; // Component for displaying the list of posts
import ActivityFeed from "./ActivityFeed";

const ForumPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.forum);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleCreatePost = (content) => {
    dispatch(createPost({ content }));
  };

  return (
    <>
      <div className="flex w-full">
        <div className="forum-page w-3/4 bg-gray-100 min-h-screen p-8">
        <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold">Forum</h1>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border p-2 rounded mr-4"
                        />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                            Search
                        </button>
                    </div>
                </div>
          <CreatePost onCreate={handleCreatePost} />
          {status === "loading" && <p>Loading posts...</p>}
          {error && <p>Error fetching posts: {error}</p>}
          <PostList posts={posts} />
        </div>

        
        <ActivityFeed/>
      </div>
    </>
  );
};

export default ForumPage;
