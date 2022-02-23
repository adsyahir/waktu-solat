import React, { useState } from "react";

const Dropdown_johor = () =>             
{
    const [johor, setJohor] = useState({
        activeObject: null,
        locations: [
          { location: "Batu Pahat", code: "jhr-0" },
          { location: "Gemas", code: "jhr-1" },
          { location: "Johor Bahru", code: "jhr-2"},
          { location: "Kluang", code: "jhr-3"},
          { location: "Kota Tinggi", code: "jhr-4" },
          { location: "Mersing", code: "jhr-5" },
          { location: "Muar", code: "jhr-6" },
          { location: "Pemanggil", code: "jhr-7" },
          { location: "Pontian", code: "jhr-8"},
          { location: "Pulau Aur", code: "jhr-9"},
          { location: "Segamat", code: "jhr-10"},
        ],
      });
    return(
     <div className="Dropdown">
     <select>
      {johor.locations.map((elements, index) => (
            <option>{elements.location}</option>
          ))}
          </select>
    </div>
    );
}

export default Dropdown_johor;