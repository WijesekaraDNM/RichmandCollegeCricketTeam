// TableComponent.jsx
import React, { useState } from 'react';
import { FaTrashAlt, FaEdit, FaUserPlus } from 'react-icons/fa';

const membersData = [
  { id: 1, under: 'Team A', year: 2024, captain: 'John Doe' },
  { id: 2, under: 'Team B', year: 2023, captain: 'Jane Smith' },
  // Add more rows as needed
];

const TableComponent = () => {
  const [members, setMembers] = useState(membersData);

  const handleDelete = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  const handleEdit = (id) => {
    // Handle edit functionality here
    alert(`Edit member with ID: ${id}`);
  };

  const handleAddMember = () => {
    // Handle add member functionality here
    alert('Add new member');
  };

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddMember}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
        >
          <FaUserPlus className="inline mr-2" />
          Add Member
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-200 border-b border-gray-300">
          <tr>
            <th className="py-2 px-4 text-left text-gray-600">Under</th>
            <th className="py-2 px-4 text-left text-gray-600">Year</th>
            <th className="py-2 px-4 text-left text-gray-600">Captain</th>
            <th className="py-2 px-4 text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id} className="border-b border-gray-300">
              <td className="py-2 px-4">{member.under}</td>
              <td className="py-2 px-4">{member.year}</td>
              <td className="py-2 px-4">{member.captain}</td>
              <td className="py-2 px-4 flex space-x-2">
                <button
                  onClick={() => handleEdit(member.id)}
                  className="text-yellow-500 hover:text-yellow-600"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
