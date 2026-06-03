import { MapPin, SearchIcon, X } from "lucide-react";
import { useState } from "react";
// import { searchCities } from "../services/atmosService";

function SearchHeader({ location, setLocation }) {
  const [searchLocation, setSearchLocation] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [hovering, setHovering] = useState(false);
  //   const [suggestions, setSuggestions] = useState([]);
  //   const [loading, setLoading] = useState(false);

  async function handleInputChange(e) {
    const value = e.target.value;
    setSearchLocation(value);
    // if (value.length > 2) {
    //   setLoading(true);
    //   const response = await searchCities(value);
    //   console.log(response);
    //   setSuggestions(response);
    //   setLoading(false);
    // }
  }

  function handleSubmit() {
    setLocation(searchLocation);
    setShowSearch(false);
    setHovering(false);
    setSearchLocation("");
  }

  function handleClose() {
    setShowSearch(false);
    setHovering(false);
    setSearchLocation("");
  }

  return (
    <header
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="flex items-center gap-2 text-base lg:col-span-2 lg:self-start my-4 h-10 border border-neutral-700 py-6 px-4 rounded-xl"
    >
      {!hovering || showSearch ? (
        <MapPin size="16" />
      ) : (
        <SearchIcon
          onClick={() => {
            setShowSearch((prev) => !prev);
          }}
          size="16"
        />
      )}
      {showSearch ? (
        <>
          <input
            type="text"
            value={searchLocation}
            placeholder="Enter location"
            className="bg-transparent outline-none w-full"
            onChange={(e) => handleInputChange(e)}
          />
          <button
            type="submit"
            onClick={() => handleSubmit()}
            className="px-2 py-2 bg-transparent text-white rounded-xl  hover:bg-neutral-500/10 transition text-sm"
          >
            Search
          </button>
          <X
            type="submit"
            onClick={() => handleClose()}
            size="16"
            className=" bg-transparent text-white rounded-xl hover:bg-neutral-500/10 transition"
          />
        </>
      ) : (
        <span>{location || "Bangalore, India"}</span>
      )}
    </header>
  );
}

export default SearchHeader;
