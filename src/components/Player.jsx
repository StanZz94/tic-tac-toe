import { useState } from "react";

export default function Player({ name, symbol }) {

    const [ playerName, setPlayerName ] = useState(name)
    const [ isEditing, setIsEditing ] = useState(false);

    function editHandler() {
        setIsEditing(editing => !editing);

    }

    function changeHandler(e) {
        setPlayerName(e.target.value);

    }
    
    return (
        <li>
            <span className="player">
                { !isEditing ? <span className="player-name">{playerName}</span> : <input type="text" value={playerName} onChange={changeHandler} required/> }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editHandler}>{ isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}