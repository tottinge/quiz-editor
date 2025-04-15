import {useState} from "react";

export function Resource(props) {
    const item = {
        description: props.description,
        url: props.url,
        uuid: props.uuid
    };
    const [resource, setResource] = useState(item)

    function getPreviewUrl() {
        if (resource.url) {
            if (resource.url.startsWith("http://") || resource.url.startsWith("https://")) {
                return resource.url
            }
        }
        return "/logo192.png"
    }

    const onChange = (e) => {
        setResource({...resource, [e.target.name]: e.target.value})
        if (props.parentUpdate) {
            props.parentUpdate(resource)
        }
    }
    return <div>
        <div className="w3-section" style={{bgcolor: "red"}} title="resource for further reading">
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
                onChange={onChange}
                onBlur={onChange}
            />

            <label>Preview</label>
            <iframe
                width="100%"
                src={getPreviewUrl()}
                title={"Preview of " + resource.description+" if available"}
                referrerPolicy="no-referrer"
                style={{border: "none"}}
            />
        </div>
    </div>
}