export function Resource(props) {
    return <div className="w3-container w3-card w3-grid">
        <div className="w3-row" style={{bgcolor: "red"}}>

            <div className="w3-col">
                <label>Resource</label>
                <input
                    className="w3-input"
                    id="description"
                    name="description"
                    placeholder="Enter description here:"
                    type='text'
                    value={props.description}
                />
                <input
                    className="w3-input"
                    placeholder="Enter URL here:"
                    id="url"
                    name="url"
                    type="url"
                    value={props.url}
                />
            </div>
            <div className="w3-card">
                <iframe src={props.url} title={props.description}/>
            </div>
        </div>
    </div>
}