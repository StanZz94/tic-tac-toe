import { useState } from "react";

export default function Player({ name, symbol }) {

    const [ isEditing, setIsEditing ] = useState(false);

    function editHandler() {
        setIsEditing((editing) => !editing);

    }
    
    return (
        <li>
            <span className="player">
                { !isEditing ? <span className="player-name">{name}</span> : <input value={name} /> }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editHandler}>{ isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}