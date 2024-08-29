// import React, { useState } from 'react';

// const PlayerForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     dob: '',
//     email: '',
//     contactNo: '',
//     battingStyle: '',
//     bowlingStyle: '',
//     status: '',
//     role: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Add form submission logic here
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 mt-28">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Player Registration Form</h2>
        
//         {/* Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* DOB */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Date of Birth</label>
//           <input
//             type="date"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Contact No */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Contact No</label>
//           <input
//             type="tel"
//             name="contactNo"
//             value={formData.contactNo}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Batting Style */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Batting Style</label>
//           <input
//             type="text"
//             name="battingStyle"
//             value={formData.battingStyle}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Bowling Style */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Bowling Style</label>
//           <input
//             type="text"
//             name="bowlingStyle"
//             value={formData.bowlingStyle}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Status */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Status</label>
//           <select
//             name="status"
//             value={formData.status}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             <option value="" disabled>Select Status</option>
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>

//         {/* Role */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Role</label>
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             <option value="" disabled>Select Role</option>
//             <option value="Batsman">Batsman</option>
//             <option value="Bowler">Bowler</option>
//             <option value="All-Rounder">All-Rounder</option>
//             <option value="Wicket-Keeper">Wicket-Keeper</option>
//           </select>
//         </div>

//         {/* Image Upload */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-semibold mb-2">Upload Image</label>
//           <input
//             type="file"
//             name="image"
//             onChange={handleImageChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PlayerForm;
import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; // Import plus icon
import PlayerForm from "../components/PlayerForm"

// Sample data
const data = [
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

  const handleEdit = (index) => {
    console.log('Edit row:', index);
  };

  const handleDelete = (index) => {
    console.log('Delete row:', index);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
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
                    onClick={() => handleEdit(index)} 
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
      {isFormOpen && <PlayerForm closeForm={toggleForm} />}
    </div>
  );
};

export default TableComponent;
