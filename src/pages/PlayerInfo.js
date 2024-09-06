import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import PlayerForm from "../components/PlayerForm";
import EditPlayerForm from "../components/EditPlayerForm";
import { IoHomeSharp } from "react-icons/io5";
import { TbScoreboard } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidCricketBall } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import back from "../assets/images/wallback.png";
import back1 from "../assets/images/back.png";
import logo from "../assets/images/rcclogo.png";
import { FaXmark, FaBars } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

// Sample data
const data = [
  // Sample data here...
  {
    name: "John Doe",
    dob: "1990-01-01",
    email: "john.doe@example.com",
    contactNo: "123-456-7890",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    status: "Active",
    image: "https://static.toiimg.com/photo/104624341/104624341.jpg", // Example image URL
    role: "Player"
  },
  {
    name: "Jane Smith",
    dob: "1992-02-02",
    email: "jane.smith@example.com",
    contactNo: "098-765-4321",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm spin",
    status: "Inactive",
    image: "https://static.toiimg.com/photo/104624442/104624442.jpg", // Example image URL
    role: "Coach"
  },
  {
    name: "Pathum Nissanke",
    dob: "1990-01-01",
    email: "john.doe@example.com",
    contactNo: "123-456-7890",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    status: "Active",
    image: "https://static.toiimg.com/photo/104624341/104624341.jpg", // Example image URL
    role: "Player"
  },
  {
    name: "Rajapakse",
    dob: "1992-02-02",
    email: "jane.smith@example.com",
    contactNo: "098-765-4321",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm spin",
    status: "Inactive",
    image: "https://static.toiimg.com/photo/104624442/104624442.jpg", // Example image URL
    role: "Coach"
  }
];

const TableComponent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rowsPerPage = 2; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = data.slice(
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

  const handleEdit = player => {
    setCurrentPlayer(player);
    setIsEditFormOpen(true);
  };

  const handleDelete = index => {
    console.log("Delete row:", index);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSavePlayer = player => {
    // Logic to save player information, including image upload if necessary
    setIsFormOpen(false);
  };

  const handleSaveEditPlayer = player => {
    // Logic to save edited player information, including image upload if necessary
    console.log("Player updated:", player);
    setIsEditFormOpen(false);
  };
  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex relative w-full p-5 bg-gray-100 rounded-lg shadow-lg">
      <div
        className={`md:flex hidden flex-col justify-start items-center bg-gray-300 w-[15%] h-[40rem]`}
        style={{
          backgroundImage: `url(${back1})`,
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

      {/* <div className=" md:w-[85%] w-[100%] lg:mx-3 "> */}
      <div  className=" relative md:w-[85%] w-[100%] bg-white lg:mx-3 p-5 rounded-lg shadow-lg"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(192, 192, 192, 0)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}>
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
              <Link to={"/player"} className=" flex gap-3 items-center p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-10">
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
          <h2 className="md:text-2xl text-xl mb-6 font-bold text-gray-800">Player Details</h2>
          <button
            onClick={toggleForm}
            className="bg-green-500 hover hover:bg-green-700 text-white rounded-full p-1 lg:text-2xl text-lg"
            aria-label="Add"
          >
            <FaPlus />
          </button>
        </div>
          <div className="flex overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300 bg-white shadow-md">
              <thead className=" bg-baseBlue text-white rounded">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    DOB
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Contact No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Batting Style
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Bowling Style
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Status
                  </th>
                  {/* <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Image</th> */}
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-300">
                {paginatedData.map((item, index) =>
                  <tr
                    key={index}
                    className=" hover:bg-gray-50 h-full align-middle"
                  >
                    <td className="flex flex-col items-center justify-start gap-3 px-4 py-4 whitespace-nowrap text-sm font-bold hover:bg-gray-300 text-gray-900 rounded-2xl">
                      <div className=" w-full"><img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover border border-gray-300"
                      /></div>
                      <div className=" w-full flex text-wrap ">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 h-16 whitespace-nowrap text-sm text-gray-600">
                      {item.dob}
                    </td>
                    <td className="px-6 py-4 h-16 whitespace-nowrap text-sm text-gray-600">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 h-16 whitespace-nowrap text-sm text-gray-600">
                      {item.contactNo}
                    </td>
                    <td className="px-6 py-4 h-16 whitespace-nowrap text-sm text-gray-600">
                      {item.battingStyle}
                    </td>
                    <td className="px-6 py-4 h-16 whitespace-nowrap text-sm text-gray-600">
                      {item.bowlingStyle}
                    </td>
                    <td
                      className={`px-6 py-4 h-16 whitespace-nowrap text-sm text-gray-600`}
                    >
                      <div
                        className={`flex items-center justify-center h-10  ${item.status ==
                        "Active"
                          ? "bg-green-300 p-5  rounded-full font-bold text-green-700"
                          : "bg-slate-300 p-5 text-slate-600 font-bold rounded-full"}`}
                      >
                        {item.status}
                      </div>
                    </td>
                    {/* <td className="px-6 py-4 h-16 whitespace-nowrap">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover border border-gray-300" />
                  </td> */}
                    <td className="px-6 py-4 whitespace-nowrap h-16 text-sm text-gray-600">
                      {item.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap h-16 text-sm text-gray-600 space-x-4">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-green-500 hover:text-green-700 text-xl"
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
                <GrLinkPrevious style={{color:"#fff"}} />
              </button>

              <div className="text-sm font-semibold">
                Page {currentPage} of {totalPages}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-700 rounded disabled:bg-gray-300"
              >
                <GrLinkNext style={{color:"#fff"}} />
              </button>
            </div>
        </div>
        {isFormOpen &&
          <PlayerForm closeForm={toggleForm} onSave={handleSavePlayer} />}
        {isEditFormOpen &&
          <EditPlayerForm
            player={currentPlayer}
            onClose={() => setIsEditFormOpen(false)}
            onSave={handleSaveEditPlayer}
          />}
      </div>
  );
};

export default TableComponent;
