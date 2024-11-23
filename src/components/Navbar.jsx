import React, { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

const Navbar = ({ setCategory, handleSearch, setIsSearchMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleCategoryChange = (category) => {
    setCategory(category);
    setIsSearchMode(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery); // Debugging statement
    handleSearch(searchQuery);
    setSearchQuery(""); // Clear the search input after submission
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="p-4">
      <div>
        <div className="heading w-full flex justify-center items-center">
          <div>
            <button
              onClick={() => handleCategoryChange("latest")}
              className="font-['Dancing_Script'] text-[#1c1b19]"
            >
              <h1 className="text-3xl font-bold">The Newspaper</h1>
            </button>
          </div>
        </div>

        <div className="w-full border-b-[1px] border-[#5e5a56] mt-2"></div>

        <div className="content h-[25vw] w-full p-4 flex gap-5 justify-between">
          <div className="left w-[40%] h-full hidden md:flex flex-col justify-center items-center">
            <div className="text-2xl font-bold">{formattedDate}</div>
            <div className="text-4xl mt-2">{formattedTime}</div>
          </div>

          <div className="w-[1px] h-full hidden md:flex bg-[#5e5a56]"></div>

          <div className="right w-[60%] h-full flex flex-col justify-around items-center">
            <div className="button hidden md:flex justify-between gap-10 items-center ">
              <button
                onClick={() => handleCategoryChange("sports")}
                className="w-[15vw] text-[#1c1c19] border border-[#1c1c19] mb-4 font-medium py-3 rounded-full hover:bg-[#1c1c19] hover:text-[#c3bcb2] transition-colors"
              >
                Sports
              </button>
              <button
                onClick={() => handleCategoryChange("politics")}
                className="w-[15vw] text-[#1c1c19] border border-[#1c1c19] mb-4 font-medium py-3 rounded-full hover:bg-[#1c1c19] hover:text-[#c3bcb2] transition-colors"
              >
                Politics
              </button>
              <button
                onClick={() => handleCategoryChange("technology")}
                className="w-[15vw] text-[#1c1c19] border border-[#1c1c19] mb-4 font-medium py-3 rounded-full hover:bg-[#1c1c19] hover:text-[#c3bcb2] transition-colors"
              >
                Technology
              </button>
            </div>

            <div className="search gap-10 justify-between items-center">
              <form onSubmit={handleSearchSubmit} className="flex items-center w-full">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-[60vw] lg:w-[30vw] px-4 py-2 border border-[#1c1c19] outline-none rounded-full mr-4 bg-[#c3bcb2] placeholder-[#1c1c19]"
                />
                <button
                  type="submit"
                  className="w-auto sm:w-[20vw] lg:w-[10vw] text-[#c3bcb2] bg-[#1c1c1a] font-medium py-2 px-4 rounded-full transition-colors flex justify-between items-center"
                >
                  Search
                  <MdArrowOutward />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[25vw] w-full bg-[#1c1b19] flex justify-center items-center">
        <h1 className="text-[25vw] font-bold mb-[5vw] text-[#c3bcb2] leading-none">news.</h1>
      </div>
    </div>
  );
};

export default Navbar;
