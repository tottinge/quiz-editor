import {useState} from "react";

export function Resource(props) {
    const [resource, setResource] = useState(props)
    const onChange = (e) => {
        setResource({...resource, [e.target.name]: e.target.value})
    }
    return <div className="w3-card">
        <div className="w3-third w3-section" style={{bgcolor: "red"}}>
            <div className="w3-col">
                <label htmlFor={"description"}>Text:</label>
                <input
                    className="w3-input"
                    id="description"
                    name="description"
                    placeholder="Enter description here:"
                    type='text'
                    value={resource.description}
                    onChange={onChange}
                />
                <label htmlFor={"url"}>URL:</label>
                <input
                    className="w3-input"
                    placeholder="Enter URL here:"
                    id="url"
                    name="url"
                    type="url"
                    value={resource.url}
                    onChange={onChange}
                />
            </div>
            <label>(Preview)</label>
            <div className="w3-card w3-half">
                <iframe
                    src={resource.url}
                    title={"Preview of " + resource.description}
                    referrerPolicy="no-referrer"
                    style = {{border: "none"}}
                />
            </div>
        </div>
    </div>
}