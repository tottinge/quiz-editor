import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export function DecoyList(props) {
    const listToManage = (props.decoys ?? []).map(decoy => [uuidv4(), decoy])
    const [decoys, setDecoys] = useState(listToManage)

    function onNewDecoyEntered(e) {
        console.log("blur event", e)
    }
    function onEnterPressed(e) {
        if (e.key !== "Enter") {
            return;
        }
        let newEntry = [uuidv4(), e.target.value];
        setDecoys(decoys.concat([newEntry]))
        e.target.value = ""
    }

    return <div>
        <h2>Decoys</h2>
        <ul className="w3-ul">
            {decoys.map((decoy) => {
                return <li key={decoy[0]}>{decoy[1]}</li>
            })}
            <li><input
                type="text"
                name="new-decoy"
                id="New Decoy"
                placeholder="New Decoy"
                onBlur={onNewDecoyEntered}
                onKeyDown={onEnterPressed}/>
            </li>
        </ul>
    </div>
}