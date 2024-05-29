import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAlumni, updateAlumni, deleteAlumni } from '../../redux/store/preUserSlice';
import UserForm from './UserForm';

const AlumniList = () => {
  const dispatch = useDispatch();
  const alumni = useSelector((state) => state.preUser.alumni);
  const [editingAlumni, setEditingAlumni] = useState(null);

  const handleAdd = (alumni) => {
    dispatch(createAlumni(alumni));
  };

  const handleEdit = (alumni) => {
    dispatch(updateAlumni({ id: alumni._id, alumni }));
    setEditingAlumni(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteAlumni(id));
  };

  const closeModal = () => {
    setEditingAlumni(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Alumni List</h1>
      <ul className="space-y-4">
        {alumni.map((alumnus) => (
          <li key={alumnus._id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">{alumnus.name}</p>
              <p className="text-gray-600">{alumnus.email}</p>
              <p className="text-gray-600">{alumnus.department}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => setEditingAlumni(alumnus)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(alumnus._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editingAlumni && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="w-1/3 p-1 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-4 mr-4 bg-white rounded-lg border-2 text-red-600 hover:text-gray-900 text-3xl font-bold"
            >
              &times;
            </button>
            <UserForm user={editingAlumni} onSave={handleEdit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniList;
