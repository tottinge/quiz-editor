import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import "./w3.css";

export function DecoyList(props) {
    const listToManage = (props.decoys ?? []).map(decoy => [uuidv4(), decoy])
    const [decoys, setDecoys] = useState(listToManage)

    function addDecoy(newDecoyString) {
        let newEntry = [uuidv4(), newDecoyString];
        setDecoys(decoys.concat([newEntry]))
    }

    function onBlur(e) {
        if (e.target.id !== "New Decoy" || e.target.value === "") {
            return;
        }
        addDecoy(e.target.value);
        e.target.value = ""
    }

    function onEnterPressed(e) {
        if (e.key !== "Enter") {
            return;
        }
        e.preventDefault();
        addDecoy(e.target.value);
        e.target.value = ""
    }

    function deleteDecoy(key) {
        setDecoys(decoys.filter(decoy => decoy[0] !== key))
    }

    return <div className="w3-panel">
        <label htmlfor="text" className="w3-label w3-input">Decoys</label>
        <input
            type="text"
            className="w3-input w3-border w3-input"
            name="new-decoy"
            id="New Decoy"
            placeholder="New Decoy"
            onBlur={onBlur}
            onKeyDown={onEnterPressed}/>
        <div className="decoy-container w3-grid">
            {decoys.map(([key,value]) => {
                return <div
                    key={key}
                    role="listitem"
                    className="decoy-item w3-card-4"
                >
                    <span>{value}</span>
                    <input
                        type={"image"}
                        alt={"Remove Decoy Answer"}
                        src={"delete.png"}
                        onClick={() => deleteDecoy(key)}
                    />
                </div>
            })}
        </div>
    </div>
}