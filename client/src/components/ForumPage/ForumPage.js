import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, createPost, createComment } from '../../redux/store/forumSlice';
import { FaThumbsUp, FaComment } from 'react-icons/fa'; // Import icons as an example

const ForumPage = () => {
    const dispatch = useDispatch();
    const { posts, status, error, createStatus, createError } = useSelector((state) => state.forum);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [newPostContent, setNewPostContent] = useState('');
    const [newCommentContent, setNewCommentContent] = useState('');
    const [showPostForm, setShowPostForm] = useState(false); // State to control visibility of the post form overlay
    const [showComments, setShowComments] = useState({}); // State to control visibility of comments for each post
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handlePostClick = (postId) => {
        setSelectedPostId(postId);
    };

    const handleCommentIconClick = (postId) => {
        setShowComments({ ...showComments, [postId]: !showComments[postId] });
    };

    const handleNewPostSubmit = async (e) => {
        e.preventDefault();
        if (!newPostContent.trim()) return;
        await dispatch(createPost(newPostContent));
        setNewPostContent('');
        setShowPostForm(false); // Close the post form overlay after submission
    };

    const handleNewCommentSubmit = async (e, postId) => {
        e.preventDefault();
        if (!newCommentContent.trim() || !postId) return;
        await dispatch(createComment({ postId: postId, commentContent: newCommentContent }));
        setNewCommentContent('');
    };

    const handleCloseForm = () => {
        setShowPostForm(false);
    };

    const postFormRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (postFormRef.current && !postFormRef.current.contains(event.target)) {
                setShowPostForm(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                {showPostForm && (
                    <div className="post-form-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
                        <div ref={postFormRef} className="post-form bg-white p-10 rounded-lg relative">
                            <button className="absolute top-2 right-2 text-gray-500" onClick={handleCloseForm}>
                                &#10005;
                            </button>
                            <form onSubmit={handleNewPostSubmit} className="w-full">
                                <textarea
                                    className="border p-2 rounded mb-4 w-full h-40"
                                    placeholder="Write something..."
                                    value={newPostContent}
                                    onChange={(e) => setNewPostContent(e.target.value)}
                                    required
                                ></textarea>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                    {createStatus === 'loading' ? 'Posting...' : 'Post'}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
                <div className="create-post-textarea">
                    <textarea
                        className="border p-2 rounded w-full mb-4"
                        placeholder="Write something..."
                        onClick={() => setShowPostForm(true)} // Show the post form when clicked
                    ></textarea>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                        Post
                    </button>
                </div>
                {createStatus === 'failed' && <div className="text-red-600">Error creating post: {createError}</div>}
                {status === 'loading' && <div>Loading posts...</div>}
                {status === 'failed' && <div className="text-red-600">Error fetching posts: {error}</div>}
                <div className="posts-list">
                    {status === 'succeeded' && posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post._id} className="post bg-white rounded shadow-md p-4 mb-6 cursor-pointer">
                                <div>
                                    <h3 className="text-lg font-semibold">{post.title || 'Post'}</h3>
                                    <p className="text-sm text-gray-500 mb-2">By {post.author?.personalDetails?.firstName} {post.author?.personalDetails?.lastName}</p>
                                    <p className="mt-2">{post.content}</p>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center">
                                        <FaThumbsUp className="mr-5" /> {/* Like Icon */}
                                        <FaComment onClick={() => handleCommentIconClick(post._id)} /> {/* Comment Icon */}
                                    </div>
                                </div>
                                <div>
                                    {showComments[post._id] && (
                                        <div className="comments mt-4">
                                            <h4 className="text-md font-semibold">Comments</h4>
                                            {post.comments.length > 0 ? (
                                                post.comments.map((comment, index) => (
                                                    <div key={`comment-${index}`} className="comment bg-gray-200 rounded p-2 my-2">
                                                        <p>{comment.content}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>No comments yet</p>
                                            )}
                                            <form onSubmit={(e) => handleNewCommentSubmit(e, post._id)} className="flex flex-col gap-2 mt-4">
                                                <textarea
                                                    className="border p-2 rounded h-24"
                                                    placeholder="Write a comment..."
                                                    value={newCommentContent}
                                                    onChange={(e) => setNewCommentContent(e.target.value)}
                                                    required
                                                ></textarea>
                                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                                    Post Comment
                                                </button>
                                            </form>
                                        </div>
                                    )}
                                
                                </div>
                                </div>
                            
                        ))
                    ) : (
                        <p className="text-center mt-4">No posts to display</p>
                    )}
                </div>
            </div>



        <div className="py-8">
      <div className="max-w-sm bg-white shadow rounded p-6">
        <div className="flex items-end">
          <p tabIndex="0" className="focus:outline-none text-xl font-semibold leading-5 text-gray-800">Activity</p>
          <p tabIndex="0" className="focus:text-indigo-800 focus:outline-none text-sm leading-normal pl-44 cursor-pointer focus:underline text-right text-indigo-700">View all</p>
        </div>
        <div className="mt-6 flex">
          <div className="w-10 flex flex-col items-center">
            <img aria-label="boy avatar" tabIndex="0" className="focus:outline-none h-10 rounded-full" src="https://cdn.tuk.dev/assets/components/misc/activity-1.png" alt="boy avatar" />
            <div className="pt-4">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card116-svg1.svg" alt="bg"/>
            </div>
          </div>
          <div className="pl-3">
            <p tabIndex="0" className="focus:outline-none text-sm font-semibold leading-normal text-gray-800">John Stark</p>
            <p tabIndex="0" className="focus:outline-none text-xs leading-3 text-gray-500 pt-1">2 hours ago</p>
            <p tabIndex="0" className="focus:outline-none pt-4 text-sm leading-4 text-gray-600">
              Changes made to <span className="text-indigo-700">styleguide.fig</span>, icons <br />
              updated with v2 colors
            </p>
          </div>
        </div>
        <div className="mt-6 flex">
          <div className="w-10 flex flex-col items-center">
            <img tabIndex="0" alt="woman avatar" className="focus:outline-none h-10 rounded-full" src="https://cdn.tuk.dev/assets/components/misc/profile-img-1.png" />
            <div className="pt-4">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card116-svg1.svg" alt="bg"/>
            </div>
          </div>
          <div className="pl-3">
            <p tabIndex="0" className="focus:outline-none text-sm font-semibold leading-normal text-gray-800">Rachel Green</p>
            <p tabIndex="0" className="focus:outline-none text-xs leading-3 text-gray-500 pt-1">5 hours ago</p>
            <p tabIndex="0" className="focus:outline-none pt-4 text-sm leading-4 text-gray-600">
              Reviewed and sent to <span className="text-indigo-700">jill@astro.com </span><br />
              & <span className="text-indigo-700">jason@ipsum.com</span>
            </p>
          </div>
        </div>
        <div className="mt-6 flex">
          <div className="w-10 flex flex-col items-center">
            <img tabIndex="0"  alt="boy avatar" className="focus:outline-none unded-full" src="https://cdn.tuk.dev/assets/components/misc/activity-2.png" />
            <div className="pt-4">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card116-svg1.svg" alt="bg"/>
            </div>
          </div>
          <div className="pl-3">
            <p tabIndex="0" className="focus:outline-none text-sm font-semibold leading-normal text-gray-800">Rachel Green</p>
            <p tabIndex="0" className="focus:outline-none text-xs leading-3 text-gray-500 pt-1">8 hours ago</p>
            <p tabIndex="0" className="focus:outline-none pt-4 text-sm leading-4 text-gray-600">
              Ticket number <span className="text-indigo-700">#18293</span> has been<br />
              resolved.Thank you.
            </p>
          </div>
        </div>
        <div className="mt-6 flex">
          <div className="w-10 flex flex-col items-center">
            <img tabIndex="0" alt="boy avatar" className="focus:outline-none h-10 rounded-full" src="https://cdn.tuk.dev/assets/components/misc/activity-2.png" />
            <div className="pt-4">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card116-svg1.svg" alt="bg"/>
            </div>
          </div>
          <div className="pl-3">
            <p tabIndex="0" className="focus:outline-none text-sm font-semibold leading-normal text-gray-800">Jill Dawson</p>
            <p tabIndex="0" className="focus:outline-none text-xs leading-3 text-gray-500 pt-1">8 hours ago</p>
            <div className="py-4 flex items-center">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card116-svg2.svg" alt="report"/>
              <p tabIndex="0" className="focus:outline-none text-xs leading-6 pl-2 text-indigo-700">Annual Report.docx</p>
            </div>
            <p tabIndex="0" className="focus:outline-none text-sm leading-4 text-gray-600">Shared final version of the report</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
    );
};

export default ForumPage;
