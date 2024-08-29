
import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import PlayerForm from '../components/PlayerForm';
import EditPlayerForm from '../components/EditPlayerForm';

// Sample data
const data = [
  // Sample data here...
  {
    name: 'John Doe',
    dob: '1990-01-01',
    email: 'john.doe@example.com',
    contactNo: '123-456-7890',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm fast',
    status: 'Active',
    image: 'https://via.placeholder.com/50', // Example image URL
    role: 'Player'
  },
  {
    name: 'Jane Smith',
    dob: '1992-02-02',
    email: 'jane.smith@example.com',
    contactNo: '098-765-4321',
    battingStyle: 'Left-hand bat',
    bowlingStyle: 'Left-arm spin',
    status: 'Inactive',
    image: 'https://via.placeholder.com/50', // Example image URL
    role: 'Coach'
  }
];

const TableComponent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const handleEdit = (player) => {
    setCurrentPlayer(player);
    setIsEditFormOpen(true);
  };

  const handleDelete = (index) => {
    console.log('Delete row:', index);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSavePlayer = (player) => {
    // Logic to save player information, including image upload if necessary
    setIsFormOpen(false);
  };

  const handleSaveEditPlayer = (player) => {
    // Logic to save edited player information, including image upload if necessary
    console.log('Player updated:', player);
    setIsEditFormOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Player Details</h2>
        <button 
          onClick={toggleForm} 
          className="text-green-600 hover:text-green-800 text-3xl"
          aria-label="Add"
        >
          <FaPlus />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">DOB</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Contact No</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Batting Style</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Bowling Style</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.dob}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.contactNo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.battingStyle}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.bowlingStyle}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover border border-gray-300" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 flex space-x-4">
                  <button 
                    onClick={() => handleEdit(item)} 
                    className="text-blue-600 hover:text-blue-800 text-xl"
                    aria-label="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleDelete(index)} 
                    className="text-red-600 hover:text-red-800 text-xl"
                    aria-label="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isFormOpen && <PlayerForm closeForm={toggleForm} onSave={handleSavePlayer} />}
      {isEditFormOpen && (
        <EditPlayerForm 
          player={currentPlayer} 
          onClose={() => setIsEditFormOpen(false)} 
          onSave={handleSaveEditPlayer} 
        />
      )}
    </div>
  );
};

export default TableComponent;
