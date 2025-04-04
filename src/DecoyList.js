import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export function DecoyList(props) {
    // Maybe make a list of [uuid,text] tuples and use that as state?
    const [decoys, setDecoys] = useState(props.decoys ?? [])

    function changeList(e) {
        // We need to recognize changes to an existing field, by id?
        // setDecoys(decoys.concat(e.target.value));
    }

    return <div>
        <h2>Decoys</h2>
        <ul className="w3-ul">
            {decoys.map((decoy, index) => {
                return <li key={index}>{decoy}</li>
            })}
            <li><input
                type="text"
                name="new-decoy"
                id={uuidv4()}
                onChange={changeList} />
            </li>
        </ul>
    </div>
}