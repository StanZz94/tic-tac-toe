import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {

    const [playerName, setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false);

    function editHandler() {
        setIsEditing(editing => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    function changeHandler(e) {
        setPlayerName(e.target.value);

    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" value={playerName} onChange={changeHandler} required />}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}