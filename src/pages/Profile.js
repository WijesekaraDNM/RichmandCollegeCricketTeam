
// import React, { useState } from 'react';
// import Navbar from '../components/HomeNavbar';
// import backgroundImage from '../assets/images/playerBack.png';
// import player1Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
// import player2Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
// import player3Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
// import player4Image from '../assets/images/dana.jpeg'; // Replace with the actual image path

// const playersData = [
//     {
//         id: 1,
//         fullName: "Dhananjaya Maduranga de Silva",
//         birthDate: "September 06, 1991",
//         teams: ["Sri Lanka", "Badureliya Sports Club", "Kandurata Maroons", "Sri Lanka A", "Sylhet Strikers", "Jaffna Kings", "Abu Dhabi Knight Riders", "Dambulla Aura", "Ragama Cricket Club", "Sri Lanka Board President's XI", "Sri Lanka Under-19s"],
//         battingStyle: "Right hand Bat",
//         bowlingStyle: "Right arm Offbreak",
//         height: "5ft 8in",
//         education: ["Debarawewa Central Hambantota", "Mahanama College Colombo", "Richmond College, Galle"],
//         playingRole: "Allrounder",
//         internationalCareer: "2015 - 2024",
//         imageUrl: player1Image
//     },
//     {
//         id: 2,
//         fullName: "Dhananjaya Maduranga de Silva",
//         birthDate: "September 06, 1991",
//         teams: ["Sri Lanka", "Badureliya Sports Club", "Kandurata Maroons", "Sri Lanka A", "Sylhet Strikers", "Jaffna Kings", "Abu Dhabi Knight Riders", "Dambulla Aura", "Ragama Cricket Club", "Sri Lanka Board President's XI", "Sri Lanka Under-19s"],
//         battingStyle: "Right hand Bat",
//         bowlingStyle: "Right arm Offbreak",
//         height: "5ft 8in",
//         education: ["Debarawewa Central Hambantota", "Mahanama College Colombo", "Richmond College, Galle"],
//         playingRole: "Allrounder",
//         internationalCareer: "2015 - 2024",
//         imageUrl: player2Image
//     },
//     {
//         id: 3,
//         fullName: "Milan Rathnayake",
//         birthDate: "January 15, 1994",
//         teams: ["Sri Lanka", "Colombo Stars"],
//         battingStyle: "Right hand Bat",
//         bowlingStyle: "Right arm Medium",
//         height: "5ft 10in",
//         education: ["Nalanda College, Colombo"],
//         playingRole: "Bowler",
//         internationalCareer: "2020 - 2024",
//         imageUrl: player3Image
//     },
//     {
//         id: 4,
//         fullName: "Kamindu Mendis",
//         birthDate: "September 30, 1998",
//         teams: ["Sri Lanka", "Kandy Warriors"],
//         battingStyle: "Left hand Bat",
//         bowlingStyle: "Right arm Offbreak, Left arm Orthodox",
//         height: "5ft 9in",
//         education: ["St. Sebastian's College, Moratuwa"],
//         playingRole: "Allrounder",
//         internationalCareer: "2018 - 2024",
//         imageUrl: player4Image
//     },
// ];

// const PlayerProfile = () => {
//     const [selectedPlayer, setSelectedPlayer] = useState(playersData[0]);

//     return (
//         <div className="bg-gray-100 min-h-screen">
//         {/* Navbar */}
//         <Navbar />
    
//         {/* Main Content */}
//         <div className="max-w-screen-lg pt-16"> 
//             <div className="flex gap-6">
//                 {/* Most Viewed Players List */}
//                 <div className="bg-white p-4 rounded-lg shadow-md" style={{ width: '350px' }}> {/* Fixed width */}
//                     <h2 className="text-xl font-bold mb-4 text-gray-700 border-b pb-2">Most Viewed Players</h2>
//                     <ul className="space-y-3">
//                         {playersData.map((player) => (
//                             <li
//                                 key={player.id}
//                                 className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-blue-100 ${player.id === selectedPlayer.id ? 'bg-blue-200 font-bold' : 'bg-gray-50'}`}
//                                 onClick={() => setSelectedPlayer(player)}
//                             >
//                                 <img
//                                     src={player.imageUrl}
//                                     alt={player.fullName}
//                                     className="h-10 w-10 rounded-full mr-3"
//                                 />
//                                 {player.fullName}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
    
//                 {/* Player Details */}
//                 <div
//                     className="flex-grow bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-md" 
//                     style={{ backgroundImage: `url(${backgroundImage})`, width: 'calc(100% - 350px)'}}
//                 >
//                     <div className="flex items-center space-x-6 bg-white bg-opacity-75 p-4 rounded-lg">
//                         <img
//                             src={selectedPlayer.imageUrl}
//                             alt={selectedPlayer.fullName}
//                             className="h-32 w-32 rounded-full border-4 border-blue-300"
//                         />
//                         <div>
//                             <h1 className="text-4xl font-bold text-gray-800">{selectedPlayer.fullName}</h1>
//                             <p className="text-gray-500">{selectedPlayer.internationalCareer}</p>
//                         </div>
//                     </div>
    
//                     <div className="mt-6 bg-white bg-opacity-75 p-4 rounded-lg">
//                         <h3 className="text-xl font-semibold text-gray-700">Player Information</h3>
//                         <div className="grid grid-cols-2 gap-4 mt-4">
//                             <div>
//                                 <p>
//                                     <span className="font-semibold text-gray-600">Batting Style:</span>{' '}
//                                     {selectedPlayer.battingStyle}
//                                 </p>
//                                 <p>
//                                     <span className="font-semibold text-gray-600">Bowling Style:</span>{' '}
//                                     {selectedPlayer.bowlingStyle}
//                                 </p>
//                                 <p>
//                                     <span className="font-semibold text-gray-600">Height:</span>{' '}
//                                     {selectedPlayer.height}
//                                 </p>
//                             </div>
//                             <div>
//                                 <p className="font-semibold text-gray-600">Education:</p>
//                                 <ul className="list-disc list-inside">
//                                     {selectedPlayer.education.map((edu, idx) => (
//                                         <li key={idx}>{edu}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
    
                    
//                 </div>
//             </div>
//         </div>
//     </div>
    
//     );
// };

// export default PlayerProfile;
import React, { useState } from 'react';
import Navbar from '../components/HomeNavbar';
import backgroundImage from '../assets/images/playerBack.png';
import backgroundFlag from '../assets/images/flag.png';
import player1Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
import player2Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
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
        stats: [
            { format: 'Test', matches: 55, runs: 3667, hs: '173 v BAN', avg: 40.29, sr: 58.16, '100s': 15, '50s': 33, '4s': 435, '6s': 33, ct: 72, st: 0, ducks: 8, ro: 2 },
            { format: 'ODI', matches: 90, runs: 1865, hs: '93 v NED', avg: 25.90, sr: 78.59, '100s': 2, '50s': 10, '4s': 186, '6s': 17, ct: 41, st: 0, ducks: 4, ro: 2 },
            // Add more formats as needed
        ]
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
        stats: [
            { format: 'Test', matches: 55, runs: 3667, hs: '173 v BAN', avg: 40.29, sr: 58.16, '100s': 15, '50s': 33, '4s': 435, '6s': 33, ct: 72, st: 0, ducks: 8, ro: 2 },
            { format: 'ODI', matches: 90, runs: 1865, hs: '93 v NED', avg: 25.90, sr: 78.59, '100s': 2, '50s': 10, '4s': 186, '6s': 17, ct: 41, st: 0, ducks: 4, ro: 2 },
            // Add more formats as needed
        ]
    },
    // More player data
];

const PlayerProfile = () => {
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

                        {/* Player Stats Table */}
                        <div className="mt-6 bg-white bg-opacity-75 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-700">Batting & Fielding Performance</h3>
                            <div className="overflow-x-auto mt-4">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-blue-200">
                                        <tr>
                                            <th className="px-4 py-2">Format</th>
                                            <th className="px-4 py-2">Matches</th>
                                            <th className="px-4 py-2">Runs</th>
                                            <th className="px-10 py-2">HS</th>
                                            <th className="px-4 py-2">Avg</th>
                                            <th className="px-4 py-2">SR</th>
                                            <th className="px-4 py-2">100s</th>
                                            <th className="px-4 py-2">50s</th>
                                            <th className="px-4 py-2">4s</th>
                                            <th className="px-4 py-2">6s</th>
                                            <th className="px-4 py-2">CT</th>
                                            <th className="px-4 py-2">ST</th>
                                            <th className="px-4 py-2">Ducks</th>
                                            <th className="px-4 py-2">RO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedPlayer.stats.map((stat, idx) => (
                                            <tr key={idx} className="border-t">
                                                <td className="px-4 py-2">{stat.format}</td>
                                                <td className="px-4 py-2 text-center">{stat.matches}</td>
                                                <td className="px-4 py-2 text-center">{stat.runs}</td>
                                                <td className="px-4 py-2 text-center">{stat.hs}</td>
                                                <td className="px-4 py-2 text-center">{stat.avg}</td>
                                                <td className="px-4 py-2 text-center">{stat.sr}</td>
                                                <td className="px-4 py-2 text-center">{stat['100s']}</td>
                                                <td className="px-4 py-2 text-center">{stat['50s']}</td>
                                                <td className="px-4 py-2 text-center">{stat['4s']}</td>
                                                <td className="px-4 py-2 text-center">{stat['6s']}</td>
                                                <td className="px-4 py-2 text-center">{stat.ct}</td>
                                                <td className="px-4 py-2 text-center">{stat.st}</td>
                                                <td className="px-4 py-2 text-center">{stat.ducks}</td>
                                                <td className="px-4 py-2 text-center">{stat.ro}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PlayerProfile;
