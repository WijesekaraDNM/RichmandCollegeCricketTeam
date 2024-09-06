import React, { useState } from "react";
import { FaTrashAlt, FaEdit, FaUsers, FaPlus } from "react-icons/fa";
import EditModal from "../components/TeamEditModal"; // Import the EditModal component
import AddNewModal from "../components/TeamAddNewModal"; // Import the AddNewModal component
import { IoHomeSharp } from "react-icons/io5";
import { TbScoreboard } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidCricketBall } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import back from "../assets/images/back3.png";
import logo from "../assets/images/rcclogo.png";
import { FaXmark, FaBars } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarToggleMenu from "../components/NavbarToggleMenu";

const initialData = [
  { id: 1, under: "Team A", year: 2024, captain: "Alice" },
  { id: 2, under: "Team B", year: 2023, captain: "Bob" },
  { id: 3, under: "Team C", year: 2022, captain: "Charlie" }
];

const TableComponent = () => {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form, setForm] = useState({ under: "", year: "", captain: "" });
  const [editItem, setEditItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rowsPerPage = 2; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);

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

  const handleEdit = item => {
    setEditItem(item);
    setForm(item);
    setIsEditModalOpen(true);
  };

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id));
  };

  const handleViewMembers = id => {
    alert(`View members for row with ID: ${id}`);
    // Implement view members functionality here
  };

  const handleAdd = () => {
    setData([...data, { id: Date.now(), ...form }]);
    setForm({ under: "", year: "", captain: "" });
    setIsModalOpen(false);
  };

  const handleEditSubmit = () => {
    setData(data.map(item => (item.id === editItem.id ? form : item)));
    setEditItem(null);
    setIsEditModalOpen(false);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex relative w-full p-5 bg-gray-100 rounded-lg shadow-lg">
      <Navbar/>
      <div  className=" relative md:w-[85%] w-[100%] bg-white lg:mx-3 p-5 rounded-lg shadow-lg"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(192, 192, 192, 0)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}>
        <div className="flex justify-between items-center mb-4">
          <NavbarToggleMenu/>
          <h2 className="md:text-2xl text-xl mb-6 font-bold  text-center text-gray-800 ">Team Information</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className=" right-4 text-lg lg:text-2xl bg-green-500 hover:bg-green-700 transition-colors rounded-full p-1"
            title="Add New"
          >
            <FaPlus style={{color:"#fff"}}/>
          </button>
        </div>
          <div className="flex overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300 bg-white shadow-md">
              <thead className="bg-[#313659] text-white rounded">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Under
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Year
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Captain
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-300">
                {paginatedData.map(item =>
                  <tr
                    key={item.id}
                    className=" hover:bg-gray-50 h-full align-middle"
                  >
                    <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-800 font-bold">
                      {item.under}
                    </td>
                    <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                      {item.year}
                    </td>
                    <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                      {item.captain}
                    </td>
                    <td className="py-4 px-4 flex space-x-2 h-16 whitespace-nowrap text-sm text-gray-600">
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
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center p-1 bg-white shadow-md rounded mt-4">
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

        {/* Modal for adding new item */}
        {isModalOpen &&
          <AddNewModal
            form={form}
            onInputChange={handleInputChange}
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAdd}
          />}

        {/* Edit Modal */}
        {isEditModalOpen &&
          editItem &&
          <EditModal
            item={editItem}
            form={form}
            onInputChange={handleInputChange}
            onClose={() => setIsEditModalOpen(false)}
            onSubmit={handleEditSubmit}
          />}
      </div>
  );
};

export default TableComponent;
