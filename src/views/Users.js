import React, { useState, useEffect } from 'react'
import UserInfo from '../components/UserInfo';
import { UserThing } from '../components/UserThing';

export default function users(props){
    const [users, setUsers] = useState([]);
    const [id, setId] = useState(1)
    const [title, setTitle] = useState(1)
    const [body, setBody] = useState(1)

    useEffect(() => {
        console.log(title, body)
        fetch(`http://ergast.com/api/f1/${title}/${body}/driverStandings.json`)
            .then(res => res.json())
            .then(data => setusers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings))
    })

    const handleForm = (e) => {
        e.preventDefault();
        console.log("Handling form!");
        const titleInput = e.target.title.value;
        const bodyInput = e.target.body.value
        settitle(titleInput);
        setbody(bodyInput);
    }

    return (
        <div>
            This is the users Page
            <UserThing handleForm={handleForm}/>
            {users.length ? 
                <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <td>ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Ttile</td>
                        <td>Join Date</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((r, i) => <userDetail key={i} user={r} />)}
                </tbody>
            </table>
            : null}
            
        </div>
    )
}