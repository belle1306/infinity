import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import "../App.css";

const MessagePlanet = () => {
    const options = [
        { id: 1, label: "Mercury" },
        { id: 2, label: "Venus" },
        { id: 3, label: "Earth" },
        { id: 4, label: "Mars" },
        { id: 5, label: "Jupiter" },
        { id: 6, label: "Uranus" },
        { id: 7, label: "Neptune" },
        { id: 8, label: "Pluto" }
    ];

    const [selected, setSelected] = useState([]);

    return (
        <div>
            <h1>Select your planet</h1>
            <pre>{JSON.stringify(selected)}</pre>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={"Select"}
            />
        </div>
    );

}

export default MessagePlanet;