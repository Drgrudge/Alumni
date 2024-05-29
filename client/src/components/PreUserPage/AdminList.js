import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAdmin, updateAdmin, deleteAdmin } from '../../redux/store/preUserSlice';
import UserForm from './UserForm';
// import AdminForm from './AdminForm';

const AdminList = () => {
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.preUser.admins);
  const [editingAdmin, setEditingAdmin] = useState(null);

  const handleAdd = (admin) => {
    dispatch(createAdmin(admin));
  };

  const handleEdit = (admin) => {
    dispatch(updateAdmin({ id: admin._id, admin }));
    setEditingAdmin(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteAdmin(id));
  };

  const closeModal = () => {
    setEditingAdmin(null);
  };

  return (
    <div className="container mx-auto  p-4">
      <h1 className="text-2xl font-bold mb-4">Admin List</h1>
      <ul className="space-y-4">
        {admins.map((admin) => (
          <li key={admin._id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">{admin.name}</p>
              <p className="text-gray-600">{admin.email}</p>
              <p className="text-gray-600">{admin.department}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => setEditingAdmin(admin)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(admin._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editingAdmin && (
        <div className="fixed inset-0 flex  items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className=" w-1/3  p-1  rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-4 mr-4 bg-white rounded-lg border-2 text-red-600 hover:text-gray-900 text-3xl font-bold"
            >
              &times;
            </button>
            <UserForm user={editingAdmin} onSave={handleEdit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminList;
