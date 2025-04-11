import {useState} from "react";

export function Resource(props) {
    const [resource, setResource] = useState(props)

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
    }
    return <div>
        <div className="w3-section" style={{bgcolor: "red"}}>
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

            <label>Preview</label>
            <iframe
                width="100%"
                src={getPreviewUrl()}
                title={"Preview of " + resource.description}
                referrerPolicy="no-referrer"
                style={{border: "none"}}
            />
        </div>
    </div>
}