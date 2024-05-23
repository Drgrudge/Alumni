import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConversations, sendMessage, markMessageAsRead, editMessage, deleteMessage } from '../../redux/store/chattingSlice';
import EmojiPicker from 'emoji-picker-react';
import Ticks from './Ticks';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

function ChatWindow({ conversation, currentUser }) {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.chatting.conversations);
    const [message, setMessage] = useState('');
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        if (conversation) {
            dispatch(fetchConversations(conversation._id));
            socket.emit('joinRoom', conversation._id);
        }
    }, [conversation, dispatch]);

    useEffect(() => {
        messages.forEach((msg) => {
            if (msg.readBy && !msg.readBy.includes(currentUser.id)) {
                dispatch(markMessageAsRead(msg._id));
            }
        });
    }, [messages, currentUser.id, dispatch]);

    useEffect(() => {
        socket.on('message:newMessage', (newMessage) => {
            if (newMessage.receiver === currentUser.id || newMessage.sender === currentUser.id) {
                dispatch(fetchConversations(conversation._id));
            }
        });

        socket.on('messageEdited', (editedMessage) => {
            dispatch(editMessage.fulfilled(editedMessage)); // Ensure the message is updated in the state
        });

        return () => {
            socket.off('message:newMessage');
            socket.off('messageEdited');
        };
    }, [dispatch, conversation, currentUser]);

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            const newMessage = { receiverId: conversation._id, content: message, senderId: currentUser.id, chatId: conversation._id };
            socket.emit('message:sendMessage', newMessage);
            dispatch(sendMessage({ receiverId: conversation._id, content: message }));
            setMessage('');
        }
    };

    const handleEmojiClick = (event, emojiObject) => {
        if (emojiObject && emojiObject.emoji) {
            setMessage(prevMessage => prevMessage + emojiObject.emoji);
        }
        setIsEmojiPickerOpen(false);
    };

    const handleMediaUpload = (event) => {
        const file = event.target.files[0];
        // Logic to handle file upload
        console.log('File uploaded:', file);
    };

    const handleOptionsClick = (message) => {
        setSelectedMessage(selectedMessage === message._id ? null : message._id);
    };

    const handleEditMessage = (message) => {
        const newContent = prompt("Edit your message:", message.content);
        if (newContent) {
            dispatch(editMessage({ messageId: message._id, content: newContent }));
        }
    };

    const handleDeleteMessage = (messageId) => {
        if (window.confirm("Are you sure you want to delete this message?")) {
            dispatch(deleteMessage(messageId));
        }
    };

    if (!conversation) {
        return <div className="flex-1 flex items-center justify-center bg-gray-100">Please select a chat</div>;
    }

    const filteredMessages = messages?.filter(msg =>
        msg?.content?.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    const chattingUser = conversation.participants?.find(user => user._id !== currentUser.id) || {};

    return (
        <div className="w-3/4 flex flex-col h-full">
            {/* Top Bar */}
            <div className="p-4 bg-gray-200 border-b border-gray-300 flex items-center justify-between">
                <span className="text-xl font-bold">{chattingUser?.personalDetails?.firstName} {chattingUser?.personalDetails?.lastName}</span>
            </div>

            <div className="flex-grow p-4 overflow-y-scroll bg-gray-50">
                {/* Search Bar */}
                <div className="mb-4">
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={e => setSearchTerm(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-lg" 
                        placeholder="Search messages"
                    />
                </div>

                {/* Messages */}
                {filteredMessages.length ? (
                    filteredMessages.map((msg, index) => {
                        const isSentByCurrentUser = msg?.sender?._id === currentUser.id;
                        return (
                            <div 
                                key={index} 
                                className={`mb-4 flex ${isSentByCurrentUser ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className="relative max-w-xs p-2 rounded-lg shadow bg-white">
                                    <div className={`p-2 rounded-lg shadow ${isSentByCurrentUser ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
                                        {msg?.content}
                                    </div>
                                    {isSentByCurrentUser && (
                                        <div className="absolute right-0 top-0 flex items-center">
                                            <button onClick={() => handleOptionsClick(msg)} className="p-1">⋮</button>
                                            {selectedMessage === msg._id && (
                                                <div className="absolute top-0 right-0 bg-white border shadow-lg p-2 rounded-lg">
                                                    <button onClick={() => handleEditMessage(msg)} className="block p-2 hover:bg-gray-100">Edit</button>
                                                    <button onClick={() => handleDeleteMessage(msg._id)} className="block p-2 hover:bg-gray-100">Delete</button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center text-gray-500">No messages found.</div>
                )}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-300 flex items-center bg-gray-100 relative">
                <button 
                    onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)} 
                    className="p-2 bg-gray-200 rounded-l-lg hover:bg-gray-300"
                >
                    😊
                </button>
                {isEmojiPickerOpen && (
                    <div className="absolute bottom-16 left-0 z-10">
                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </div>
                )}
                <input 
                    type="text" 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    className="flex-grow p-2 border border-gray-300 rounded-l-lg" 
                    placeholder="Type a message" 
                />
                <input 
                    type="file" 
                    onChange={handleMediaUpload} 
                    className="hidden" 
                    id="file-upload"
                />
                <label htmlFor="file-upload" className="p-2 bg-gray-200 cursor-pointer hover:bg-gray-300">
                    📎
                </label>
                <button 
                    onClick={handleSendMessage} 
                    className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default ChatWindow;
