import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { addPost, addCommentToPost, addReplyToComment, likePost, updateLikes, editPost, deletePost } from '../../redux/store/forumSlice';
import { fetchUser, selectUserDetails } from '../../redux/store/authSlice';
import { FaThumbsUp, FaComment, FaEdit, FaTrash } from 'react-icons/fa';
import CommentList from './CommentList';
import CreateComment from './CreateComment';
import MediaModal from './MediaModal';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.forum.posts);
    const user = useSelector(selectUserDetails);
    const [showComments, setShowComments] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMediaSrc, setModalMediaSrc] = useState('');
    const [modalMediaType, setModalMediaType] = useState('');
    const [editMode, setEditMode] = useState({});
    const [editContent, setEditContent] = useState({});

    useEffect(() => {
        if (!user) {
            console.log('Fetching user details...');
            dispatch(fetchUser());
        }
    }, [dispatch, user]);

    useEffect(() => {
        console.log("Current user:", user);

        const socket = io('http://localhost:3000');

        socket.on('newPost', newPost => {
            dispatch(addPost(newPost));
        });

        socket.on('newComment', data => {
            dispatch(addCommentToPost(data));
        });

        socket.on('newReply', data => {
            dispatch(addReplyToComment(data));
        });

        socket.on('updateLikes', data => {
            console.log("Received updateLikes event with data:", data);
            dispatch(updateLikes(data));
        });

        return () => {
            socket.off('newPost');
            socket.off('newComment');
            socket.off('newReply');
            socket.off('updateLikes');
        };
    }, [dispatch]);

    const toggleComments = postId => {
        setShowComments(prevState => ({
            ...prevState,
            [postId]: !prevState[postId]
        }));
    };

    const handleLike = postId => {
        console.log("handleLike called for postId:", postId);
        console.log("User ID:", user?.id);
    
        if (postId && user?.id) {
            dispatch(likePost(postId)).then(response => {
                console.log("Like response:", response);
                const updatedPostIndex = posts.findIndex(post => post._id === postId);
                if (updatedPostIndex !== -1) {
                    const updatedPost = posts[updatedPostIndex];
                    const likesArray = updatedPost.likes || []; // Ensure likes array is initialized
                    const newLikes = likesArray.includes(user.id)
                        ? likesArray.filter(like => like !== user.id)
                        : [...likesArray, user.id];
    
                    // Create a new array for posts
                    const updatedPosts = [...posts];
                    updatedPosts[updatedPostIndex] = {
                        ...updatedPost,
                        likes: newLikes
                    };
    
                    dispatch(updateLikes({ postId, likes: newLikes }));
                }
            }).catch(error => {
                console.log("Like error:", error);
            });
        } else {
            console.log("Post ID or User ID is missing:", postId, user?.id);
        }
    };
    
    

    const handleEditPost = (postId, content) => {
        setEditMode(prevState => ({
            ...prevState,
            [postId]: true
        }));
        setEditContent(prevState => ({
            ...prevState,
            [postId]: content
        }));
    };

    const handleSaveEdit = postId => {
        dispatch(editPost({ postId, content: editContent[postId] }));
        setEditMode(prevState => ({
            ...prevState,
            [postId]: false
        }));
    };

    const handleDeletePost = postId => {
        dispatch(deletePost(postId));
    };

    const handleEditChange = (postId, content) => {
        setEditContent(prevState => ({
            ...prevState,
            [postId]: content
        }));
    };

    const openModal = (mediaSrc, mediaType) => {
        setModalMediaSrc(mediaSrc);
        setModalMediaType(mediaType);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalMediaSrc('');
        setModalMediaType('');
    };

    if (!user) {
        console.log("User is not available yet");
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-4">
            {posts.map(post => {
                const personalDetails = post.author?.personalDetails;
                const { firstName, lastName, profilePicture } = personalDetails || {};

                if (!firstName || !lastName) {
                    return null; // Skip rendering the post if author details are unknown
                }

                return (
                    <div key={post._id} className="p-4 bg-white rounded-lg shadow">
                        <div className="flex items-center">
                            {profilePicture ? (
                                <img 
                                    src={profilePicture} 
                                    alt={`${firstName} ${lastName}`} 
                                    className="h-10 w-10 border-2 rounded-full mr-2" />
                            ) : (
                                <FontAwesomeIcon icon={faUser} className="h-10 w-10 rounded-full mr-2 text-gray-400" />
                            )}
                            <div>
                                <h3 className="text-xl font-semibold">{post.title}</h3>
                                <p className="text-sm text-gray-600">
                                    Author: {firstName} {lastName}
                                </p>
                            </div>
                        </div>
                        {editMode[post._id] ? (
                            <div>
                                <textarea
                                    value={editContent[post._id]}
                                    onChange={(e) => handleEditChange(post._id, e.target.value)}
                                    className="border p-2 rounded mb-4 w-full"
                                />
                                <button 
                                    onClick={() => handleSaveEdit(post._id)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div>
                                {post.photo && (
                                    <img 
                                        src={`http://localhost:3000/${post.photo}`} 
                                        alt="Post" 
                                        className="w-full h-48 object-contain border-2 border-gray-500 mt-2 rounded cursor-pointer"
                                        onClick={() => openModal(`http://localhost:3000/${post.photo}`, 'image')}
                                    />
                                )}
                                {post.video && (
                                    <video 
                                        controls 
                                        className="w-full h-48 mt-2 rounded cursor-pointer object-contain"
                                        onClick={() => openModal(`http://localhost:3000/${post.video}`, 'video')}
                                    >
                                        <source src={`http://localhost:3000/${post.video}`} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                                <p className="mt-2">{post.content}</p>
                            </div>
                        )}
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <FaThumbsUp 
                                    className={`mr-3 cursor-pointer ${post.likes?.includes(user?.id) ? 'text-red-500' : ''}`} 
                                    onClick={() => handleLike(post._id)} 
                                />
                                <span>{post.likes?.length || 0}</span>
                                <FaComment className="ml-4 cursor-pointer" onClick={() => toggleComments(post._id)} />
                            </div>
                            {post.author._id === user.id && (
                                <div className="flex items-center">
                                    <FaEdit className="mr-3 cursor-pointer" onClick={() => handleEditPost(post._id, post.content)} />
                                    <FaTrash className="mr-3 cursor-pointer" onClick={() => handleDeletePost(post._id)} />
                                </div>
                            )}
                        </div>
                        {showComments[post._id] && (
                            <>
                                <CommentList comments={post.comments || []} postId={post._id} />
                                <CreateComment postId={post._id} />
                            </>
                        )}
                    </div>
                );
            })}
            <MediaModal 
                isOpen={isModalOpen} 
                onRequestClose={closeModal} 
                mediaSrc={modalMediaSrc} 
                mediaType={modalMediaType} 
            />
        </div>
    );
};

export default PostList;
