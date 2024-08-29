import React, { useState } from 'react';
import { FaTrashAlt, FaEdit, FaUsers, FaPlus } from 'react-icons/fa';
import EditModal from '../components/TeamEditModal'; // Import the EditModal component
import AddNewModal from '../components/TeamAddNewModal'; // Import the AddNewModal component

const initialData = [
  { id: 1, under: 'Team A', year: 2024, captain: 'Alice' },
  { id: 2, under: 'Team B', year: 2023, captain: 'Bob' },
  { id: 3, under: 'Team C', year: 2022, captain: 'Charlie' },
];

const TableComponent = () => {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form, setForm] = useState({ under: '', year: '', captain: '' });
  const [editItem, setEditItem] = useState(null);

  const handleEdit = (item) => {
    setEditItem(item);
    setForm(item);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleViewMembers = (id) => {
    alert(`View members for row with ID: ${id}`);
    // Implement view members functionality here
  };

  const handleAdd = () => {
    setData([...data, { id: Date.now(), ...form }]);
    setForm({ under: '', year: '', captain: '' });
    setIsModalOpen(false);
  };

  const handleEditSubmit = () => {
    setData(data.map(item => (item.id === editItem.id ? form : item)));
    setEditItem(null);
    setIsEditModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="relative container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Team Information</h2>
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-4 right-4 text-3xl text-blue-600 hover:text-blue-800 transition-colors"
        title="Add New"
      >
        <FaPlus />
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Under</th>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Year</th>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Captain</th>
              <th className="py-3 px-4 border-b border-gray-300 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 border-b border-gray-300 text-left">{item.under}</td>
                <td className="py-3 px-4 border-b border-gray-300 text-left">{item.year}</td>
                <td className="py-3 px-4 border-b border-gray-300 text-left">{item.captain}</td>
                <td className="py-3 px-4 border-b border-gray-300 text-left flex space-x-2">
                  <button 
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                    title="Delete"
                  >
                    <FaTrashAlt />
                  </button>
                  <button 
                    onClick={() => handleViewMembers(item.id)}
                    className="text-green-600 hover:text-green-800 transition-colors"
                    title="Members"
                  >
                    <FaUsers />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding new item */}
      {isModalOpen && (
        <AddNewModal
          form={form}
          onInputChange={handleInputChange}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAdd}
        />
      )}

      {/* Edit Modal */}
      {isEditModalOpen && editItem && (
        <EditModal
          item={editItem}
          form={form}
          onInputChange={handleInputChange}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default TableComponent;
