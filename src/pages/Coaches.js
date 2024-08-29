import React, { useState } from 'react';
import Navbar from '../components/HomeNavbar';
import backgroundImage from '../assets/images/playerBack.png';
import backgroundFlag from '../assets/images/flag.png';
import player1Image from '../assets/images/coach.jpg'; // Replace with the actual image path
import player2Image from '../assets/images/coach.jpg'; // Replace with the actual image path
import player3Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
import player4Image from '../assets/images/dana.jpeg'; // Replace with the actual image path

const playersData = [
    {
        id: 1,
        fullName: "Dhananjaya Maduranga de Silva",
        birthDate: "September 06, 1991",
        teams: ["Sri Lanka", "Badureliya Sports Club", "Kandurata Maroons", "Sri Lanka A", "Sylhet Strikers", "Jaffna Kings", "Abu Dhabi Knight Riders", "Dambulla Aura", "Ragama Cricket Club", "Sri Lanka Board President's XI", "Sri Lanka Under-19s"],
        battingStyle: "Right hand Bat",
        bowlingStyle: "Right arm Offbreak",
        height: "5ft 8in",
        education: ["Debarawewa Central Hambantota", "Mahanama College Colombo", "Richmond College, Galle"],
        playingRole: "Allrounder",
        internationalCareer: "2015 - 2024",
        imageUrl: player1Image,
        
    },
    {
        id: 2,
        fullName: "Dhananjaya Maduranga de Silva",
        birthDate: "September 06, 1991",
        teams: ["Sri Lanka", "Badureliya Sports Club", "Kandurata Maroons", "Sri Lanka A", "Sylhet Strikers", "Jaffna Kings", "Abu Dhabi Knight Riders", "Dambulla Aura", "Ragama Cricket Club", "Sri Lanka Board President's XI", "Sri Lanka Under-19s"],
        battingStyle: "Right hand Bat",
        bowlingStyle: "Right arm Offbreak",
        height: "5ft 8in",
        education: ["Debarawewa Central Hambantota", "Mahanama College Colombo", "Richmond College, Galle"],
        playingRole: "Allrounder",
        internationalCareer: "2015 - 2024",
        imageUrl: player2Image,
        
    },
    // More player data
];

const CoachesProfile = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(playersData[0]);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="max-w-screen-lg pt-16 "> 
                <div className="flex gap-6">
                    {/* Most Viewed Players List */}
                    <div className="bg-white p-4 rounded-lg shadow-md" style={{ width: '350px', flexShrink: 0 }}> {/* Fixed width with no shrinking */}
                        <h2 className="text-xl font-bold mb-4 text-gray-700 border-b pb-2">Coaches List</h2>
                        <ul className="space-y-3">
                            {playersData.map((player) => (
                                <li
                                    key={player.id}
                                    className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-blue-100 ${player.id === selectedPlayer.id ? 'bg-blue-200 font-bold' : 'bg-gray-50'}`}
                                    onClick={() => setSelectedPlayer(player)}
                                >
                                    <img
                                        src={player.imageUrl}
                                        alt={player.fullName}
                                        className="h-10 w-10 rounded-full mr-3"
                                    />
                                    {player.fullName}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Player Details */}
                    <div className="flex-grow bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-md" style={{ backgroundImage: `url(${backgroundImage})` }}>
                        <div className="flex items-center space-x-6 bg-white bg-opacity-75 p-6 rounded-lg"
                         style={{ backgroundImage: `url(${backgroundFlag})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat', // Prevent repeating the image
                          }}>
                            <img
                                src={selectedPlayer.imageUrl}
                                alt={selectedPlayer.fullName}
                                className="h-32 w-32 rounded-full border-4 border-blue-300 mr-20"
                            />
                            <div className="flex-grow" >
                                <h1 className="text-5xl font-bold text-white">{selectedPlayer.fullName}</h1>
                                <p className="text-gray-500">{selectedPlayer.internationalCareer}</p>
                            </div>
                        </div>

                        <div className="mt-6 bg-white bg-opacity-75 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-700">Player Information</h3>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="w-full">
                                    <p>
                                        <span className="font-semibold text-gray-600">Batting Style:</span>{' '}
                                        {selectedPlayer.battingStyle}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-gray-600">Bowling Style:</span>{' '}
                                        {selectedPlayer.bowlingStyle}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-gray-600">Height:</span>{' '}
                                        {selectedPlayer.height}
                                    </p>
                                </div>
                                <div className="w-full">
                                    <p className="font-semibold text-gray-600">Education:</p>
                                    <ul className="list-disc list-inside">
                                        {selectedPlayer.education.map((edu, idx) => (
                                            <li key={idx}>{edu}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CoachesProfile;
