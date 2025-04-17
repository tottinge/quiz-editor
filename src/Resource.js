import {useState} from "react";
import validator from "validator";
import "./w3.css";

export function Resource(props) {
    const item = {
        description: props.description,
        url: props.url,
        uuid: props.uuid
    };
    const [resource, setResource] = useState(item)

    const onChange = (e) => {
        setResource({...resource, [e.target.name]: e.target.value})
        if (props.parentUpdate) {
            props.parentUpdate(resource)
        }
    }

    function getUrlFor(url) {
        if (url && validator.isURL(url)) {
            return url;
        }
        return "";
    }

    return <div>
        <div className="resource-item" title="resource for further reading">
            <label htmlFor={"description"}>Text:</label>
            <input
                className="w3-input"
                id="description"
                name="description"
                placeholder="Enter description here:"
                title="Title for recommended reading"
                type='text'
                value={resource.description}
                onChange={onChange}
                onBlur={onChange}
            />
            <label htmlFor={"url"}>URL:</label>
            <input
                className="w3-input"
                placeholder="Enter URL here:"
                id="url"
                name="url"
                type="url"
                title="url of resource for recommended reading"
                value={resource.url}
                pattern="https?://.+"
                onChange={onChange}
                onBlur={onChange}
            />
            <iframe title="preview of resource page" src={getUrlFor(resource.url)}></iframe>
            <a className="w3-button centered-button w3-center"
               title={"open preview of resource in new tab"}
               href={resource.url}
               target="_blank"
               rel="noreferrer"
               style={{
                   display: "block",
                   "pointer-events":getUrlFor(resource.url)?"all":"none",
                   "background-color": getUrlFor(resource.url)?"green":"lightgrey",
                   color: "white"
               }}
            >
                Preview In New Tab
            </a>

        </div>
    </div>
}