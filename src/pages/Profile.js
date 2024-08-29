
import React, { useState } from 'react';
import Navbar from '../components/HomeNavbar';
import backgroundImage from '../assets/images/playerBack.png';
import backgroundFlag from '../assets/images/flag.png';
import playersData from './PlayersData';

const PlayerProfile = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(playersData[0]);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="max-w-screen-lg pt-16"> 
                <div className="flex gap-6">
                    {/* Most Viewed Players List */}
                    <div className="bg-white p-4 rounded-lg shadow-md" style={{ width: '350px', flexShrink: 0 }}>
                        <h2 className="text-xl font-bold mb-4 text-gray-700 border-b pb-2">Most Viewed Players</h2>
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
                         backgroundRepeat: 'no-repeat',
                          }}>
                            <img
                                src={selectedPlayer.imageUrl}
                                alt={selectedPlayer.fullName}
                                className="h-32 w-32 rounded-full border-4 border-blue-300 mr-20"
                            />
                            <div className="flex-grow">
                                <h1 className="text-5xl font-bold text-white">{selectedPlayer.fullName}</h1>
                                <p className="text-gray-500">{selectedPlayer.internationalCareer}</p>
                            </div>
                        </div>

                        <div className="mt-6 bg-white bg-opacity-75 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-700">Player Information</h3>
                            <div className="mt-4 space-y-2">
                                <p><strong>Name:</strong> {selectedPlayer.fullName}</p>
                                <p><strong>Date of Birth:</strong> {selectedPlayer.birthDate}</p>
                                <p><strong>Email:</strong> {selectedPlayer.email}</p>
                                <p><strong>Contact No:</strong> {selectedPlayer.contactNo}</p>
                                <p><strong>Batting Style:</strong> {selectedPlayer.battingStyle}</p>
                                <p><strong>Bowling Style:</strong> {selectedPlayer.bowlingStyle}</p>
                                <p><strong>Role:</strong> {selectedPlayer.playingRole}</p>
                            </div>
                        </div>

                        <div className="mt-6 bg-white bg-opacity-75 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-gray-700 mb-4">Player Stats</h2>
                            {/* Batting Stats */}
                            <h3 className="text-2xl font-bold text-gray-700 mb-4">Batting and Fielding Stats</h3>
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead>
                                    <tr className="bg-gray-100 border-b">
                                        <th className="py-2 px-4 text-left">Format</th>
                                        <th className="py-2 px-4 text-left">Matches</th>
                                        <th className="py-2 px-4 text-left">Innings</th>
                                        <th className="py-2 px-4 text-left">Runs</th>
                                        <th className="py-2 px-10 text-left">Highest Score</th>
                                        <th className="py-2 px-4 text-left">Avg</th>
                                        <th className="py-2 px-4 text-left">SR</th>
                                        <th className="py-2 px-4 text-left">100s</th>
                                        <th className="py-2 px-4 text-left">50s</th>
                                        <th className="py-2 px-4 text-left">4s</th>
                                        <th className="py-2 px-4 text-left">6s</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedPlayer.stats.map((stat) => (
                                        <tr key={stat.format} className="border-b">
                                            <td className="py-2 px-4">{stat.format}</td>
                                            <td className="py-2 px-4">{stat.matches}</td>
                                            <td className="py-2 px-4">{stat.innings}</td>
                                            <td className="py-2 px-4">{stat.runs}</td>
                                            <td className="py-2 px-4">{stat.hs}</td>
                                            <td className="py-2 px-4">{stat.avg}</td>
                                            <td className="py-2 px-4">{stat.sr}</td>
                                            <td className="py-2 px-4">{stat['100s']}</td>
                                            <td className="py-2 px-4">{stat['50s']}</td>
                                            <td className="py-2 px-4">{stat['4s']}</td>
                                            <td className="py-2 px-4">{stat['6s']}</td>
                                           
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Bowling Stats */}
                            <h3 className="text-2xl font-bold text-gray-700 mb-4 mt-4">Bowling Stats</h3>
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg mt-6">
                                <thead>
                                    <tr className="bg-gray-100 border-b">
                                        <th className="py-2 px-4 text-left">Format</th>
                                        <th className="py-2 px-4 text-left">Inns</th>
                                        <th className="py-2 px-4 text-left">Overs</th>
                                        <th className="py-2 px-4 text-left">Matches</th>
                                        <th className="py-2 px-4 text-left">Wickets</th>
                                        <th className="py-2 px-4 text-left">Runs Conceded</th>
                                        <th className="py-2 px-4 text-left">Best</th>
                                        <th className="py-2 px-4 text-left">Avg</th>
                                        <th className="py-2 px-4 text-left">Economy Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedPlayer.bowlingStats.map((stat) => (
                                        <tr key={stat.format} className="border-b">
                                            <td className="py-2 px-4">{stat.format}</td>
                                            <td className="py-2 px-4">{stat.innings}</td>
                                            <td className="py-2 px-4">{stat.overs}</td>
                                            <td className="py-2 px-4">{stat.matches}</td>
                                            <td className="py-2 px-4">{stat.wickets}</td>
                                            <td className="py-2 px-4">{stat.runsConceded}</td>
                                            <td className="py-2 px-4">{stat.best}</td>
                                            <td className="py-2 px-4">{stat.average}</td>
                                            <td className="py-2 px-4">{stat.economyRate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerProfile;
