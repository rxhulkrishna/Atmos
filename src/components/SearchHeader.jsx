import { MapPin, SearchIcon, X } from "lucide-react";
import { useState } from "react";

function SearchHeader({ location, setLocation }) {
  const [searchLocation, setSearchLocation] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  async function handleInputChange(e) {
    const value = e.target.value;
    setSearchLocation(value);
  }

  function handleSubmit() {
    const location = searchLocation.trim();
    if (location === "") {
      return;
    }
    setLocation(location);
    setShowSearch(false);
    setSearchLocation("");
  }

  function handleClose() {
    setShowSearch(false);
    setSearchLocation("");
  }

  return (
    <header
      onClick={() => !showSearch && setShowSearch(true)}
      className="flex items-center gap-2 text-base lg:col-span-2 my-4 h-10 border border-neutral-700 py-6 px-4 rounded-xl cursor-pointer hover:bg-neutral-500/10 transition lg:w-max"
    >
      {showSearch ? (
        <>
          <SearchIcon
            onClick={() => {
              setShowSearch((prev) => !prev);
            }}
            size="16"
          />
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
        </>
      ) : (
        <>
          <MapPin size="16" />
          <span>{location}</span>
        </>
      )}
    </header>
  );
}

export default SearchHeader;
