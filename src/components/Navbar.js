
import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { TbScoreboard } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidCricketBall } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import back from "../assets/images/back4.png";
import logo from "../assets/images/rcclogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
      return (
        <>
            <div
                className={`md:flex hidden flex-col md:w-[15%] justify-start items-center bg-gray-300 w-[15%] h-[40rem]`}
                style={{
                backgroundImage: `url(${back})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backfaceVisibility: "revert-layer"
                }}
            >
            <div className=" items-center w-full bg-opacity-40 bg-white flex justify-start p-2 ">
                <img src={logo} className="flex opacity-100 w-20 h-20" alt="no" />
            </div>
            <ul className="w-full items-center justify-center mt-5">
            <Link to={"/"} className=" flex gap-3  cursor-pointer items-center p-2 pl-5 text-white w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<IoHomeSharp /> Home
            </Link>
            <Link to={"/player"} className=" flex gap-3 items-center p-2 pl-5 text-white w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<BsPersonFill /> Player
            </Link >
            <Link to={"/match"} className=" flex gap-3 cursor-pointer items-center p-2 pl-5 text-white w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<BiSolidCricketBall /> Match
            </Link>
            <Link to={"/scorecard/:matchId"} className=" flex gap-3 cursor-pointer items-center p-2 pl-5 text-white w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<TbScoreboard /> Score
            </Link>
            <Link to={"/team"} className=" flex gap-3 cursor-pointer items-center p-2 pl-5 text-white w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<RiTeamFill /> Team
            </Link>
            </ul>
        </div>
    </>
       
    );

};
export default Navbar;