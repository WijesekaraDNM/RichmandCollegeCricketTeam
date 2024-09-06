// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ScoreCardPage = () => {
//   const { matchId } = useParams(); // Extract matchId from URL parameters

//   const [players, setPlayers] = useState([
//     // Dummy data for players
//     {
//       playerName: 'Player 1',
//       runs: 45,
//       wickets: 2,
//       overs: 10,
//       runConceded: 55,
//       fours: 6,
//       sixes: 2,
//       fifties: 0,
//       hundreds: 0,
//       balls: 30,
//     },
//     {
//       playerName: 'Player 2',
//       runs: 78,
//       wickets: 0,
//       overs: 8,
//       runConceded: 45,
//       fours: 8,
//       sixes: 3,
//       fifties: 1,
//       hundreds: 0,
//       balls: 48,
//     },
//     {
//         playerName: 'Player 1',
//         runs: 45,
//         wickets: 2,
//         overs: 10,
//         runConceded: 55,
//         fours: 6,
//         sixes: 2,
//         fifties: 0,
//         hundreds: 0,
//         balls: 30,
//       },
//       {
//         playerName: 'Player 2',
//         runs: 78,
//         wickets: 0,
//         overs: 8,
//         runConceded: 45,
//         fours: 8,
//         sixes: 3,
//         fifties: 1,
//         hundreds: 0,
//         balls: 48,
//       },
//       {
//         playerName: 'Player 1',
//         runs: 45,
//         wickets: 2,
//         overs: 10,
//         runConceded: 55,
//         fours: 6,
//         sixes: 2,
//         fifties: 0,
//         hundreds: 0,
//         balls: 30,
//       },
//       {
//         playerName: 'Player 2',
//         runs: 78,
//         wickets: 0,
//         overs: 8,
//         runConceded: 45,
//         fours: 8,
//         sixes: 3,
//         fifties: 1,
//         hundreds: 0,
//         balls: 48,
//       },
//       {
//         playerName: 'Player 1',
//         runs: 45,
//         wickets: 2,
//         overs: 10,
//         runConceded: 55,
//         fours: 6,
//         sixes: 2,
//         fifties: 0,
//         hundreds: 0,
//         balls: 30,
//       },
//       {
//         playerName: 'Player 2',
//         runs: 78,
//         wickets: 0,
//         overs: 8,
//         runConceded: 45,
//         fours: 8,
//         sixes: 3,
//         fifties: 1,
//         hundreds: 0,
//         balls: 48,
//       },{
//         playerName: 'Player 1',
//         runs: 45,
//         wickets: 2,
//         overs: 10,
//         runConceded: 55,
//         fours: 6,
//         sixes: 2,
//         fifties: 0,
//         hundreds: 0,
//         balls: 30,
//       },
//       {
//         playerName: 'Player 2',
//         runs: 78,
//         wickets: 0,
//         overs: 8,
//         runConceded: 45,
//         fours: 8,
//         sixes: 3,
//         fifties: 1,
//         hundreds: 0,
//         balls: 48,
//       },{
//         playerName: 'Player 1',
//         runs: 45,
//         wickets: 2,
//         overs: 10,
//         runConceded: 55,
//         fours: 6,
//         sixes: 2,
//         fifties: 0,
//         hundreds: 0,
//         balls: 30,
//       },
//       {
//         playerName: 'Player 2',
//         runs: 78,
//         wickets: 0,
//         overs: 8,
//         runConceded: 45,
//         fours: 8,
//         sixes: 3,
//         fifties: 1,
//         hundreds: 0,
//         balls: 48,
//       },
//     // Add more players as needed
//   ]);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-8">
//       <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Scorecard for Match ID: {matchId}
//         </h2>
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 bg-blue-600 text-white">Player Name</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">Runs</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">Wickets</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">Overs</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">Run Conceded</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">4s</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">6s</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">50s</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">100s</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">Balls</th>
//             </tr>
//           </thead>
//           <tbody>
//             {players.map((player, index) => (
//               <tr key={index} className="border-b">
//                 <td className="py-2 px-4">{player.playerName}</td>
//                 <td className="py-2 px-4">{player.runs}</td>
//                 <td className="py-2 px-4">{player.wickets}</td>
//                 <td className="py-2 px-4">{player.overs}</td>
//                 <td className="py-2 px-4">{player.runConceded}</td>
//                 <td className="py-2 px-4">{player.fours}</td>
//                 <td className="py-2 px-4">{player.sixes}</td>
//                 <td className="py-2 px-4">{player.fifties}</td>
//                 <td className="py-2 px-4">{player.hundreds}</td>
//                 <td className="py-2 px-4">{player.balls}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ScoreCardPage;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import PlayerFormPopup from "../components/ScoreCardPopup"; // Import the new form component

import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

import Navbar from "./Navbar";
import NavbarToggleMenu from "./NavbarToggleMenu";

const ScoreCardPage = () => {
  const { matchId } = useParams(); // Extract matchId from URL parameters
  const [players, setPlayers] = useState([
    // Dummy data for players
    {
      playerName: "Player 1",
      runs: 45,
      wickets: 2,
      overs: 10,
      runConceded: 55,
      fours: 6,
      sixes: 2,
      fifties: 0,
      hundreds: 0,
      balls: 30
    },
    {
      playerName: "Player 2",
      runs: 78,
      wickets: 0,
      overs: 8,
      runConceded: 45,
      fours: 8,
      sixes: 3,
      fifties: 1,
      hundreds: 0,
      balls: 48
    },
    {
      playerName: "Player 1",
      runs: 45,
      wickets: 2,
      overs: 10,
      runConceded: 55,
      fours: 6,
      sixes: 2,
      fifties: 0,
      hundreds: 0,
      balls: 30
    },
    {
      playerName: "Player 2",
      runs: 78,
      wickets: 0,
      overs: 8,
      runConceded: 45,
      fours: 8,
      sixes: 3,
      fifties: 1,
      hundreds: 0,
      balls: 48
    },
    {
      playerName: "Player 1",
      runs: 45,
      wickets: 2,
      overs: 10,
      runConceded: 55,
      fours: 6,
      sixes: 2,
      fifties: 0,
      hundreds: 0,
      balls: 30
    },
    {
      playerName: "Player 2",
      runs: 78,
      wickets: 0,
      overs: 8,
      runConceded: 45,
      fours: 8,
      sixes: 3,
      fifties: 1,
      hundreds: 0,
      balls: 48
    },
    {
      playerName: "Player 1",
      runs: 45,
      wickets: 2,
      overs: 10,
      runConceded: 55,
      fours: 6,
      sixes: 2,
      fifties: 0,
      hundreds: 0,
      balls: 30
    },
    {
      playerName: "Player 2",
      runs: 78,
      wickets: 0,
      overs: 8,
      runConceded: 45,
      fours: 8,
      sixes: 3,
      fifties: 1,
      hundreds: 0,
      balls: 48
    },
    {
      playerName: "Player 1",
      runs: 45,
      wickets: 2,
      overs: 10,
      runConceded: 55,
      fours: 6,
      sixes: 2,
      fifties: 0,
      hundreds: 0,
      balls: 30
    },
    {
      playerName: "Player 2",
      runs: 78,
      wickets: 0,
      overs: 8,
      runConceded: 45,
      fours: 8,
      sixes: 3,
      fifties: 1,
      hundreds: 0,
      balls: 48
    },
    {
      playerName: "Player 1",
      runs: 45,
      wickets: 2,
      overs: 10,
      runConceded: 55,
      fours: 6,
      sixes: 2,
      fifties: 0,
      hundreds: 0,
      balls: 30
    },
    {
      playerName: "Player 2",
      runs: 78,
      wickets: 0,
      overs: 8,
      runConceded: 45,
      fours: 8,
      sixes: 3,
      fifties: 1,
      hundreds: 0,
      balls: 48
    }
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rowsPerPage = 5; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(players.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = players.slice(
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

  const handleFormOpen = () => setIsFormOpen(true);
  const handleFormClose = () => setIsFormOpen(false);

  const handleFormSubmit = playerData => {
    // Add matchId to player data and update the players state
    setPlayers([...players, { ...playerData, matchId }]);
    handleFormClose();
  };

  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" flex relative w-full p-5 bg-gray-100 rounded-lg shadow-lg">
      <Navbar/>
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
          <NavbarToggleMenu/>
          <h2 className="md:text-2xl text-xl mb-6 font-bold text-center text-gray-800">
            Scorecard for Match ID: {matchId}
          </h2>
          <button
            onClick={handleFormOpen}
            className="bg-green-500 hover:bg-green-700 rounded-full p-1 text-white text-lg lg:text-2xl"
          >
            <FaPlus />
          </button>
        </div>
        <div className="flex overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 bg-white shadow-md">
            <thead className=" bg-[#3D163F] text-white rounded">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">Player Name</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">Runs</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">Wickets</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">Overs</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">Run Conceded</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">4s</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">6s</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">50s</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">100s</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">Balls</th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-300">
              {paginatedData.map((player, index) =>
                <tr key={index} className=" hover:bg-gray-50 h-full align-middle">
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-800 font-bold">
                    {player.playerName}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {player.runs}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {player.wickets}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {player.overs}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {player.runConceded}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {player.fours}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {player.sixes}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {player.fifties}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {player.hundreds}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {player.balls}
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

      {/* Player Form Popup */}
      <PlayerFormPopup
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        matchId={matchId}
      />
    </div>
  );
};

export default ScoreCardPage;
