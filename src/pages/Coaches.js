
import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Navbar from '../components/HomeNavbar';
import backgroundImage from '../assets/images/playerBack.png';
import backgroundFlag from '../assets/images/flag.png';
import coachesData from './coachData';
import PracticeScheduleForm from '../components/PracticeScheduleForm';
import EditPracticeScheduleForm from '../components/EditPracticeScheduleForm';

const practiceSchedulesData = [
    {
        id: 1,
        venue: 'Colombo Ground',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        type: 'Batting Practice'
    },
    {
        id: 2,
        venue: 'Galle Stadium',
        startTime: '02:00 PM',
        endTime: '04:00 PM',
        type: 'Bowling Practice'
    },
    {
        id: 3,
        venue: 'Kandy Ground',
        startTime: '09:00 AM',
        endTime: '11:00 AM',
        type: 'Fielding Practice'
    }
];

const CoachesProfile = () => {
    const [selectedCoach, setSelectedCoach] = useState(coachesData[0]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const [editSchedule, setEditSchedule] = useState(null);

    const handleAddSchedule = () => {
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    const handleEditSchedule = (schedule) => {
        setEditSchedule(schedule);
        setIsEditFormOpen(true);
    };

    const handleCloseEditForm = () => {
        setIsEditFormOpen(false);
    };

    const handleSaveSchedule = (updatedSchedule) => {
        const updatedSchedules = practiceSchedulesData.map((schedule) =>
            schedule.id === updatedSchedule.id ? updatedSchedule : schedule
        );
        // Ideally, this should be done in state and not directly modifying `practiceSchedulesData`
        practiceSchedulesData = updatedSchedules;
        handleCloseEditForm();
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="max-w-screen-lg pt-16">
                <div className="flex gap-6">
                    {/* Most Viewed Coaches List */}
                    <div className="bg-white p-4 rounded-lg shadow-md" style={{ width: '350px', flexShrink: 0 }}>
                        <h2 className="text-xl font-bold mb-4 text-gray-700 border-b pb-2">Coaches List</h2>
                        <ul className="space-y-3">
                            {coachesData.map((coach) => (
                                <li
                                    key={coach.id}
                                    className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-blue-100 ${coach.id === selectedCoach.id ? 'bg-blue-200 font-bold' : 'bg-gray-50'}`}
                                    onClick={() => setSelectedCoach(coach)}
                                >
                                    <img
                                        src={coach.imageUrl}
                                        alt={coach.fullName}
                                        className="h-10 w-10 rounded-full mr-3"
                                    />
                                    {coach.fullName}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coach Details */}
                    <div className="flex-grow bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-md" style={{ backgroundImage: `url(${backgroundImage})` }}>
                        <div className="flex items-center space-x-6 bg-white bg-opacity-75 p-6 rounded-lg"
                            style={{ backgroundImage: `url(${backgroundFlag})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', }}>
                            <img
                                src={selectedCoach.imageUrl}
                                alt={selectedCoach.fullName}
                                className="h-32 w-32 rounded-full border-4 border-blue-300 mr-20"
                            />
                            <div className="flex-grow">
                                <h1 className="text-5xl font-bold text-white">{selectedCoach.fullName}</h1>
                                <p className="text-gray-500">{selectedCoach.age} years old</p>
                            </div>
                        </div>

                        <div className="mt-6 bg-white bg-opacity-75 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-700">Coach Information</h3>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="w-full">
                                    <p>
                                        <span className="font-semibold text-gray-600">Contact:</span>{' '}
                                        {selectedCoach.contact}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-gray-600">Address:</span>{' '}
                                        {selectedCoach.address}
                                    </p>
                                </div>
                                <div className="w-full">
                                    <p className="font-semibold text-gray-600">Description:</p>
                                    <p>{selectedCoach.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Practice Schedules Table */}
                        <div className="mt-6 bg-white bg-opacity-75 p-8 rounded-lg">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold text-gray-700">Practice Schedules</h3>
                                <button
                                    onClick={handleAddSchedule}
                                    className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
                                >
                                    <FaPlus className="text-2xl" />
                                </button>
                            </div>
                            <table className="min-w-full mt-4 bg-white rounded-lg shadow-md w-full">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-16 text-left text-gray-700 font-semibold">Venue</th>
                                        <th className="py-2 px-16 text-left text-gray-700 font-semibold">Start Time</th>
                                        <th className="py-2 px-16 text-left text-gray-700 font-semibold">End Time</th>
                                        <th className="py-2 px-16 text-left text-gray-700 font-semibold">Type</th>
                                        <th className="py-2 px-16 text-left text-gray-700 font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {practiceSchedulesData.map((schedule) => (
                                        <tr key={schedule.id}>
                                            <td className="py-2 px-16 border-b border-gray-200">{schedule.venue}</td>
                                            <td className="py-2 px-16 border-b border-gray-200">{schedule.startTime}</td>
                                            <td className="py-2 px-16 border-b border-gray-200">{schedule.endTime}</td>
                                            <td className="py-2 px-16 border-b border-gray-200">{schedule.type}</td>
                                            <td className="py-2 px-16 border-b border-gray-200 flex items-center space-x-4">
                                                <button
                                                    className="text-blue-500 hover:text-blue-700"
                                                    onClick={() => handleEditSchedule(schedule)}
                                                >
                                                    <FaEdit />
                                                </button>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Practice Schedule Form Popup */}
                {isFormOpen && (
                    <PracticeScheduleForm onClose={handleCloseForm} />
                )}

                {/* Edit Practice Schedule Form Popup */}
                {isEditFormOpen && editSchedule && (
                    <EditPracticeScheduleForm
                        schedule={editSchedule}
                        onClose={handleCloseEditForm}
                        onSave={handleSaveSchedule}
                    />
                )}
            </div>
        </div>
    );
};

export default CoachesProfile;
