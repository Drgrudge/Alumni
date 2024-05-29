import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStudent, updateStudent, deleteStudent } from '../../redux/store/preUserSlice';
import UserForm from './UserForm';

const StudentList = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.preUser.students);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleAdd = (student) => {
    dispatch(createStudent(student));
  };

  const handleEdit = (student) => {
    dispatch(updateStudent({ id: student._id, student }));
    setEditingStudent(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const closeModal = () => {
    setEditingStudent(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <ul className="space-y-4">
        {students.map((student) => (
          <li key={student._id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">{student.name}</p>
              <p className="text-gray-600">{student.email}</p>
              <p className="text-gray-600">{student.department}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => setEditingStudent(student)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(student._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editingStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="w-1/3 p-1 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-4 mr-4 bg-white rounded-lg border-2 text-red-600 hover:text-gray-900 text-3xl font-bold"
            >
              &times;
            </button>
            <UserForm user={editingStudent} onSave={handleEdit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;
