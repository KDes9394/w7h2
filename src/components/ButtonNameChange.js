import React from "react";

export const ButtonNameChange = (props) => {
    let myName = props.name;
    const [name, setName] = useState(myName)
    const handleForm = (e) => {
        e.preventDefault();
        console.log(e)
        const newName = e.target.value;
        console.log(newName);
    }
    return (
        <form onSubmit={handleForm}>
            <div className="mb-3">
                <label htmlFor="newName" className="form-label">New Name</label>
                <input type="text" className="form-control" id="newName" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <input type='submit' value='Submit' className='btn btn-secondary' />
        </form>
    )
    }