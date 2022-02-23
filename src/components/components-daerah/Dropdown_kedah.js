import React, { useState } from "react";
const Dropdown_kedah = () => {

    const [kedah, setKedah] = useState({
        activeObject: null,
        locations: [
          { location: "Baling", code: "kdh-0" },
          { location: "Bandar Baharu", code: "kdh-1" },
          { location: "Kota Setar", code: "kdh-2"},
          { location: "Kuala Muda", code: "kdh-3"},
          { location: "Kubang Pasu", code: "kdh-4" },
          { location: "Kulim", code: "kdh-5" },
          { location: "Langkawi", code: "kdh-6" },
          { location: "Padang Terap", code: "kdh-7" },
          { location: "Pendang", code: "kdh-8"},
          { location: "Pokok Sena", code: "kdh-9"},
          { location: "Puncak Gunung Jerai", code: "kdh-10"},
          { location: "Sik", code: "kdh-11"},
          { location: "Yan", code: "kdh-12"},
        ],
      });
    return(
     <div className="Dropdown">
     <select>
      {kedah.locations.map((elements, index) => (
            <option>{elements.location}</option>
          ))}
          </select>
    </div>
    );
}
 
export default Dropdown_kedah;