import React, { useState, useEffect } from 'react'
import RacerDetail from '../components/RacerDetail';
import { RacerForm } from '../components/RacerForm';

export default function Racers(props){
    const [racers, setRacers] = useState([]);
    const [season, setSeason] = useState(2021)
    const [round, setRound] = useState(1)

    useEffect(() => {
        console.log(season, round)
        fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => setRacers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings))
    })

    const handleForm = (e) => {
        e.preventDefault();
        console.log("Handling form!");
        const seasonInput = e.target.season.value;
        const roundInput = e.target.round.value
        setSeason(seasonInput);
        setRound(roundInput);
    }

    return (
        <div>
            This is the Racers Page
            <RacerForm handleForm={handleForm}/>
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
                    {users.map((r, i) => <UserInfo key={i} racer={r} />)}
                </tbody>
            </table>
            : null}
            
        </div>
    )
}