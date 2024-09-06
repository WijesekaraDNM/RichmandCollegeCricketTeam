// import React, { useState } from 'react';
// import { FaEdit, FaTrash, FaPlus, FaClipboardList } from 'react-icons/fa';

// const MatchDetails = () => {
//   const [formData, setFormData] = useState({
//     matchName: '',
//     time: '',
//     venue: '',
//     opponent: '',
//     tier: '',
//     division: '',
//     umpire: '',
//     type: '',
//   });

//   const [matches, setMatches] = useState([
//     {
//       matchName: 'Match 1',
//       time: '2024-08-29T10:00',
//       venue: 'Stadium A',
//       opponent: 'Team X',
//       tier: 'Tier 1',
//       division: 'Division A',
//       umpire: 'John Doe',
//       type: 'ODI',
//     },
//     {
//       matchName: 'Match 2',
//       time: '2024-08-30T14:00',
//       venue: 'Stadium B',
//       opponent: 'Team Y',
//       tier: 'Tier 2',
//       division: 'Division B',
//       umpire: 'Jane Smith',
//       type: 'T20',
//     },
//   ]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMatches([...matches, formData]);
//     setFormData({
//       matchName: '',
//       time: '',
//       venue: '',
//       opponent: '',
//       tier: '',
//       division: '',
//       umpire: '',
//       type: '',
//     });
//   };

//   const handleEdit = (index) => {
//     // Edit functionality can be added here
//     console.log('Edit match at index:', index);
//   };

//   const handleDelete = (index) => {
//     const updatedMatches = matches.filter((_, i) => i !== index);
//     setMatches(updatedMatches);
//   };

//   const handleAddStat = (index) => {
//     // Add match stat functionality can be added here
//     console.log('Add Match Stat for match at index:', index);
//   };

//   const handleAddScoreCard = (index) => {
//     // Add score card functionality can be added here
//     console.log('Add Score Card for match at index:', index);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500 p-8">
//       {/* Form Section */}
//       <div className="max-w-3xl mx-auto mb-10 bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Match Details</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 gap-6">
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Match Name</label>
//               <input
//                 type="text"
//                 name="matchName"
//                 value={formData.matchName}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Time</label>
//               <input
//                 type="datetime-local"
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Venue</label>
//               <input
//                 type="text"
//                 name="venue"
//                 value={formData.venue}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Opponent</label>
//               <input
//                 type="text"
//                 name="opponent"
//                 value={formData.opponent}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Tier</label>
//               <input
//                 type="text"
//                 name="tier"
//                 value={formData.tier}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Division</label>
//               <input
//                 type="text"
//                 name="division"
//                 value={formData.division}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Umpire</label>
//               <input
//                 type="text"
//                 name="umpire"
//                 value={formData.umpire}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Type</label>
//               <select
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               >
//                 <option value="" disabled>Select Match Type</option>
//                 <option value="Test">Test</option>
//                 <option value="ODI">ODI</option>
//                 <option value="T20">T20</option>
//               </select>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           >
//             Add Match
//           </button>
//         </form>
//       </div>

//       {/* Table Section */}
//       <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Match Details</h2>
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Match Name</th>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Time</th>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Venue</th>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Opponent</th>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Tier</th>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Division</th>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Umpire</th>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Type</th>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {matches.map((match, index) => (
//               <tr key={index} className="border-b">
//                 <td className="py-2 px-4">{match.matchName}</td>
//                 <td className="py-2 px-4">{match.time}</td>
//                 <td className="py-2 px-4">{match.venue}</td>
//                 <td className="py-2 px-4">{match.opponent}</td>
//                 <td className="py-2 px-4">{match.tier}</td>
//                 <td className="py-2 px-4">{match.division}</td>
//                 <td className="py-2 px-4">{match.umpire}</td>
//                 <td className="py-2 px-4">{match.type}</td>
//                 <td className="py-2 px-4 flex space-x-2">
//                   <button
//                     onClick={() => handleEdit(index)}
//                     className="text-blue-500 hover:text-blue-700"
//                   >
//                     <FaEdit />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <FaTrash />
//                   </button>
//                   <button
//                     onClick={() => handleAddStat(index)}
//                     className="text-green-500 hover:text-green-700"
//                   >
//                     <FaClipboardList />
//                   </button>
//                   <button
//                     onClick={() => handleAddScoreCard(index)}
//                     className="text-yellow-500 hover:text-yellow-700"
//                   >
//                     <FaPlus />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MatchDetails;
// import React, { useState } from 'react';
// import { FaEdit, FaTrash, FaPlus, FaClipboardList } from 'react-icons/fa';
// import MatchStatPopup from '../components/MatchStatPopUp.js'; // Import the new popup component
// import ScoreCardPopup from '../components/ScoreCardPopup.js'; // Import the ScoreCardPopup component
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import EditPopup from '../components/EditMatchDetailPopup.js'; // Import the EditPopup component
// import FormPopup from '../components/MatchFormPopUp.js'; // Import the new FormPopup component

// const MatchDetails = () => {
//   const [formData, setFormData] = useState({
//     matchName: '',
//     time: '',
//     venue: '',
//     opponent: '',
//     tier: '',
//     division: '',
//     umpire: '',
//     type: '',
//   });

//   const [matches, setMatches] = useState([
//     {
//       matchName: 'Match 1',
//       time: '2024-08-29T10:00',
//       venue: 'Stadium A',
//       opponent: 'Team X',
//       tier: 'Tier 1',
//       division: 'Division A',
//       umpire: 'John Doe',
//       type: 'ODI',
//     },
//     {
//       matchName: 'Match 2',
//       time: '2024-08-30T14:00',
//       venue: 'Stadium B',
//       opponent: 'Team Y',
//       tier: 'Tier 2',
//       division: 'Division B',
//       umpire: 'Jane Smith',
//       type: 'T20',
//     },
//   ]);

//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const navigate = useNavigate();
//  const [currentMatchIndex, setCurrentMatchIndex] = useState(null);
//  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // State for Edit Popup

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMatches([...matches, formData]);
//     setFormData({
//       matchName: '',
//       time: '',
//       venue: '',
//       opponent: '',
//       tier: '',
//       division: '',
//       umpire: '',
//       type: '',
//     });
//   };

//   const handleEdit = (index) => {
//     setCurrentMatchIndex(index);
//     setIsEditPopupOpen(true);
//   };

//   const handleDelete = (index) => {
//     const updatedMatches = matches.filter((_, i) => i !== index);
//     setMatches(updatedMatches);
//   };

//   const handleAddStat = (index) => {
//     setCurrentMatchIndex(index);
//     setIsPopupOpen(true); // Open the popup when the button is clicked
//   };

//   const handleAddScoreCard = (index) => {
//     const matchId = index; // Use index or a unique ID from your match data
//     navigate(`/scorecard/${matchId}`);
//   };

//   const handlePopupClose = () => {
//     setIsPopupOpen(false);
//     setCurrentMatchIndex(null);
//   };

//   const handlePopupSubmit = (statData) => {
//     console.log('Match Stat Submitted:', statData);
//     // You can now do something with the submitted statData and the current match
//   };

//   const handleEditPopupClose = () => {
//     setIsEditPopupOpen(false);
//     setCurrentMatchIndex(null);
//   };

//   const handleEditPopupSubmit = (updatedMatchData) => {
//     const updatedMatches = matches.map((match, index) =>
//       index === currentMatchIndex ? updatedMatchData : match
//     );
//     setMatches(updatedMatches);
//     setIsEditPopupOpen(false);
//     setCurrentMatchIndex(null);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500 p-8">
//       {/* Form Section */}
//       <div className="max-w-3xl mx-auto mb-10 bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Match Details</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 gap-6">
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Match Name</label>
//               <input
//                 type="text"
//                 name="matchName"
//                 value={formData.matchName}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Time</label>
//               <input
//                 type="datetime-local"
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Venue</label>
//               <input
//                 type="text"
//                 name="venue"
//                 value={formData.venue}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Opponent</label>
//               <input
//                 type="text"
//                 name="opponent"
//                 value={formData.opponent}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Tier</label>
//               <input
//                 type="text"
//                 name="tier"
//                 value={formData.tier}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Division</label>
//               <input
//                 type="text"
//                 name="division"
//                 value={formData.division}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Umpire</label>
//               <input
//                 type="text"
//                 name="umpire"
//                 value={formData.umpire}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Type</label>
//               <input
//                 type="text"
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//             >
//               Add Match
//             </button>
//           </div>
//         </form>
//       </div>
//   {/* Table Section */}
//          <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Match Details</h2>
//          <table className="min-w-full bg-white">
//            <thead>
//             <tr>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Match Name</th>
//              <th className="py-2 px-4 bg-indigo-600 text-white">Time</th>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Venue</th>
//                <th className="py-2 px-4 bg-indigo-600 text-white">Opponent</th>
//                <th className="py-2 px-4 bg-indigo-600 text-white">Tier</th>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Division</th>
//               <th className="py-2 px-4 bg-indigo-600 text-white">Umpire</th>
//                 <th className="py-2 px-4 bg-indigo-600 text-white">Type</th>
//                <th className="py-2 px-4 bg-indigo-600 text-white">Actions</th>
//             </tr>
//         </thead>
//           <tbody>
//            {matches.map((match, index) => (
//               <tr key={index} className="border-b">
//                 <td className="py-2 px-4">{match.matchName}</td>
//                 <td className="py-2 px-4">{match.time}</td>
//                 <td className="py-2 px-4">{match.venue}</td>
//                 <td className="py-2 px-4">{match.opponent}</td>
//                 <td className="py-2 px-4">{match.tier}</td>
//                 <td className="py-2 px-4">{match.division}</td>
//                 <td className="py-2 px-4">{match.umpire}</td>
//                 <td className="py-2 px-4">{match.type}</td>
//                 <td className="py-2 px-4 flex space-x-2">
//                   <button
//                     onClick={() => handleEdit(index)}
//                     className="text-blue-500 hover:text-blue-700"
//                   >
//                     <FaEdit />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <FaTrash />
//                   </button>
//                   <button
//                     onClick={() => handleAddStat(index)}
//                     className="text-green-500 hover:text-green-700"

//                   >
//                     <FaClipboardList />
//                   </button>
//                   <button
//                    onClick={() => handleAddScoreCard(index)}
//                     className="text-yellow-500 hover:text-yellow-700"

//                   >
//                     <FaPlus />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Popup for Adding Match Stat */}
//       <MatchStatPopup
//         isOpen={isPopupOpen}
//         onClose={handlePopupClose}
//         onSubmit={handlePopupSubmit}
//       />
//          <EditPopup
//         isOpen={isEditPopupOpen}
//         onClose={handleEditPopupClose}
//         onSubmit={handleEditPopupSubmit}
//         matchData={matches[currentMatchIndex]}
//       />
//     </div>
//   );
// };

// export default MatchDetails;
import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaClipboardList } from "react-icons/fa";
import MatchStatPopup from "../components/MatchStatPopUp.js"; // Import the new popup component
import ScoreCardPopup from "../components/ScoreCardPopup.js"; // Import the ScoreCardPopup component
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import EditPopup from "../components/EditMatchDetailPopup.js"; // Import the EditPopup component
import FormPopup from "../components/MatchFormPopUp.js"; // Import the new FormPopup component
import { FaXmark, FaBars } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { IoHomeSharp } from "react-icons/io5";
import { TbScoreboard } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidCricketBall } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import back2 from "../assets/images/back5.png";
import logo from "../assets/images/rcclogo.png";

const MatchDetails = () => {
  const [matches, setMatches] = useState([
    {
      matchName: "Match 1",
      time: "2024-08-29T10:00",
      venue: "Stadium A",
      opponent: "Team X",
      tier: "Tier 1",
      division: "Division A",
      umpire: "John Doe",
      type: "ODI"
    },
    {
      matchName: "Match 2",
      time: "2024-08-30T14:00",
      venue: "Stadium B",
      opponent: "Team Y",
      tier: "Tier 2",
      division: "Division B",
      umpire: "Jane Smith",
      type: "T20"
    },
    {
      matchName: "Match 3",
      time: "2024-08-29T10:00",
      venue: "Stadium A",
      opponent: "Team X",
      tier: "Tier 1",
      division: "Division A",
      umpire: "John Doe",
      type: "ODI"
    },
    {
      matchName: "Match 4",
      time: "2024-08-30T14:00",
      venue: "Stadium B",
      opponent: "Team Y",
      tier: "Tier 2",
      division: "Division B",
      umpire: "Jane Smith",
      type: "T20"
    }
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [currentMatchIndex, setCurrentMatchIndex] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // State for Edit Popup
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false); // State for Form Popup
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rowsPerPage = 2; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(matches.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = matches.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleEdit = index => {
    setCurrentMatchIndex(index);
    setIsEditPopupOpen(true);
  };

  const handleDelete = index => {
    const updatedMatches = matches.filter((_, i) => i !== index);
    setMatches(updatedMatches);
  };

  const handleAddStat = index => {
    setCurrentMatchIndex(index);
    setIsPopupOpen(true); // Open the popup when the button is clicked
  };

  const handleAddScoreCard = index => {
    const matchId = index; // Use index or a unique ID from your match data
    navigate(`/scorecard/${matchId}`);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setCurrentMatchIndex(null);
  };

  const handleEditPopupClose = () => {
    setIsEditPopupOpen(false);
    setCurrentMatchIndex(null);
  };

  const handleEditPopupSubmit = updatedMatchData => {
    const updatedMatches = matches.map(
      (match, index) => (index === currentMatchIndex ? updatedMatchData : match)
    );
    setMatches(updatedMatches);
    setIsEditPopupOpen(false);
    setCurrentMatchIndex(null);
  };

  const handleFormPopupClose = () => {
    setIsFormPopupOpen(false);
  };

  const handleFormPopupSubmit = newMatchData => {
    setMatches([...matches, newMatchData]);
    setIsFormPopupOpen(false);
  };

  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" flex relative w-full p-5 bg-gray-100 rounded-lg shadow-lg">
      <div
        className={`md:flex hidden flex-col md:w-[15%] justify-start items-center bg-gray-300 w-[15%] h-[40rem]`}
        style={{
          backgroundImage: `url(${back2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backfaceVisibility: "revert-layer"
        }}
      >
        <div className=" items-center w-full bg-opacity-40 bg-white flex justify-start p-2 ">
          <img src={logo} className="flex opacity-100 w-20 h-20" alt="no" />
        </div>
        <ul className="w-full items-center justify-center mt-5">
          <Link to={"/"} className=" flex gap-3 items-center p-2 pl-5 text-white w-full hover:bg-gray-300 hover:bg-opacity-10">
            {" "}<IoHomeSharp /> Home
          </Link>
          <Link to={"/player"} className=" flex gap-3 items-center p-2 pl-5 text-white w-full hover:bg-gray-300 hover:bg-opacity-10">
            {" "}<BsPersonFill /> Player
          </Link >
          <Link to={"/match"} className=" flex gap-3 items-center p-2 pl-5 text-white w-full hover:bg-gray-300 hover:bg-opacity-10">
            {" "}<BiSolidCricketBall /> Match
          </Link>
          <Link to={"/scorecard/:matchId"} className=" flex gap-3 items-center p-2 pl-5 text-white w-full hover:bg-gray-300 hover:bg-opacity-10">
            {" "}<TbScoreboard /> Score
          </Link>
          <Link to={"/team"} className=" flex gap-3 items-center p-2 pl-5 text-white w-full hover:bg-gray-300 hover:bg-opacity-10">
            {" "}<RiTeamFill /> Team
          </Link>
        </ul>
      </div>
      <div
        className=" relative md:w-[85%] w-[100%] bg-white lg:mx-3 p-5 rounded-lg shadow-lg"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(192, 192, 192, 0)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex md:hidden items-start justify-start ">
            <button
              className="text-black focus:outline-none m-4 focus:test-gray-500  "
              onClick={toggleButton}
            >
              {isMenuOpen
                ? <FaXmark className="text-lg " />
                : <FaBars className="text-lg " />}
            </button>
          </div>
          <div
            className={`absolute space-y-2 z-30 mt-60 left-5 w-[200px] mb-2 rounded-l-lg justify-end items-center py-3 transition-all duration-500000 ease-in-out  bg-primary bg-opacity-10  shadow-lg border-[3px] border-opacity-50 ${isMenuOpen
              ? " h-auto w-48 block justify-center items-center hover:transition-transform hovet:text-opacity-100  hover:duration-50000 hover:ease-in-out text-subText hover:text-opacity-100 hover:bg-white hover:border-opacity-100 mb-10"
              : "hidden"}`}
          >
            <ul className=" flex flex-col gap-1 relative w-full !mt-[8.00px] !text-[12px] cursor-pointer px-1 ![font-family:'Inter',Helvetica]  items-start">
              <Link to={"/"} className=" flex gap-3 items-center p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<IoHomeSharp /> Home
              </Link>
              <Link to={"/"} className=" flex gap-3 items-center p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<BsPersonFill /> Player
              </Link>
              <Link to={"/match"} className=" flex gap-3 items-center p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<BiSolidCricketBall /> Match
              </Link>
              <Link to={"/scorecard/:matchId"} className=" flex gap-3 items-center p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<TbScoreboard /> Score
              </Link>
              <Link to={"/team"} className=" flex gap-3 items-center p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<RiTeamFill /> Team
              </Link>
            </ul>
          </div>
          <h2 className="md:text-2xl text-xl mb-6 font-bold text-center text-gray-800">
            Match Details
          </h2>
          <button
            onClick={() => setIsFormPopupOpen(true)}
            className="bg-green-500 hover:bg-green-700 rounded-full p-1 text-white text-lg lg:text-2xl"
          >
            <FaPlus />
          </button>
        </div>
        <div className="flex overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 bg-white shadow-md">
            <thead className=" bg-baseRed2 text-white rounded">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Match Name
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Time
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Venue
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Opponent
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Tier
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Division
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Umpire
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Type
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-300">
              {paginatedData.map((match, index) =>
                <tr
                  key={index}
                  className=" hover:bg-gray-50 h-full align-middle"
                >
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-800 font-bold">
                    {match.matchName}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.time}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.venue}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600 ">
                    {match.opponent}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.tier}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.division}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.umpire}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.type}
                  </td>
                  <td className="py-4 px-4 flex space-x-2 h-16 whitespace-nowrap text-sm text-gray-600">
                    <button
                      onClick={() => handleEdit(index)}
                      className=" text-green-500 hover:text-green-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleAddStat(index)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaClipboardList />
                    </button>
                    <button
                      onClick={() => handleAddScoreCard(index)}
                      className="text-yellow-500 hover:text-yellow-700"
                    >
                      <FaPlus />
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4 p-1 bg-white shadow-md rounded">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-700 rounded disabled:bg-gray-300"
          >
            <GrLinkPrevious style={{ color: "#fff" }} />
          </button>

          <div className="text-sm font-semibold">
            Page {currentPage} of {totalPages}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-700 rounded disabled:bg-gray-300"
          >
            <GrLinkNext style={{ color: "#fff" }} />
          </button>
        </div>
      </div>

      {/* Popup for Adding Form */}
      <FormPopup
        isOpen={isFormPopupOpen}
        onClose={handleFormPopupClose}
        onSubmit={handleFormPopupSubmit}
      />
      <MatchStatPopup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        onSubmit={statData => console.log("Match Stat Submitted:", statData)}
      />
      <EditPopup
        isOpen={isEditPopupOpen}
        onClose={handleEditPopupClose}
        onSubmit={handleEditPopupSubmit}
        matchData={matches[currentMatchIndex]}
      />
    </div>
  );
};

export default MatchDetails;
