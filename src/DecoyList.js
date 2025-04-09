import {useState} from "react";
import {v4 as uuidv4} from "uuid";

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

    return <div>
        <h2>Decoys</h2>
        <input
            type="text"
            name="new-decoy"
            id="New Decoy"
            placeholder="New Decoy"
            onBlur={onBlur}
            onKeyDown={onEnterPressed}/>
        <ul className="w3-ul">
            {decoys.map(([key,value]) => {
                return <li key={key} style={{display: "flex", justifyContent: "space-around"}}>
                    <span>{value}</span>
                    <button onClick={() => deleteDecoy(key)}>X</button>
                </li>
            })}
        </ul>
    </div>
}