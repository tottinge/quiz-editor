import {useState} from "react";

export function DecoyList(props) {
    const [decoys, setDecoys] = useState(props.decoys ?? [])

    return <div>
        <h2>Decoys</h2>
        <ul>
            {decoys.map((decoy, index) => {
                return <li key={index}>{decoy}</li>
            })}
        </ul>
    </div>
}