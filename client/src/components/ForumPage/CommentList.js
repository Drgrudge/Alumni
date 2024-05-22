import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const CommentList = ({ comments }) => {
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const handleReply = (commentId) => {
    // Logic to handle reply action can be added here
    console.log("Reply to comment with ID:", commentId);
  };

  const handleCommentClick = (commentId) => {
    if (selectedCommentId === commentId) {
      setSelectedCommentId(null); // Deselect if already selected
    } else {
      setSelectedCommentId(commentId); // Select the clicked comment
    }
  };

  const handleEdit = (commentId) => {
    console.log("Edit comment with ID:", commentId);
  };

  const handleDelete = (commentId) => {
    console.log("Delete comment with ID:", commentId);
  };

  return (
    <div className="mt-4">
      {comments.map((comment) => {
        // Extracting personalDetails here for clarity
        const personalDetails = comment.author?.personalDetails;

        if (!personalDetails) {
          return null; // Skip rendering if personalDetails are not available
        }

        const { firstName, lastName, profilePicture } = personalDetails;

        return (
          <div
            key={comment._id}
            className="mt-2 p-2 bg-gray-100 rounded flex flex-col"
          >
            <div
              className="flex items-start cursor-pointer"
              onClick={() => handleCommentClick(comment._id)}
            >
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt={`${firstName} ${lastName}`}
                  className="h-10 w-10 rounded-full mr-2"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUser}
                  className="h-10 w-10 rounded-full mr-2 text-gray-400"
                />
              )}
              <div className="flex-1">
                <p className="text-sm text-gray-600">
                  Author: {firstName} {lastName}
                </p>
                <p>{comment.content}</p>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <button
                onClick={() => handleReply(comment._id)}
                className="text-blue-500 text-xs mr-2"
              >
                Reply
              </button>
              {selectedCommentId === comment._id && (
                <>
                  <button
                    onClick={() => handleEdit(comment._id)}
                    className="text-gray-500 text-xs mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(comment._id)}
                    className="text-red-500 text-xs"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
