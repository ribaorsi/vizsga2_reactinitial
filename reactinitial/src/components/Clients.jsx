
import React, { useState } from "react";


const Clients = ({client})=> {

    const [vaccination, setVaccination] = useState(true);
    
        return (
            <div>
                <p>{client.name}</p>
                <button onClick={() => setVaccination(true)}>Toggle</button>
                <p>{client.isVaccinated}</p>

            </div>
        )

}

export default Clients