import React from 'react'

const Clients = ({client})=> {
    
        return (
            <div>
                <p>{client.name}</p>
                <p>{client.isVaccinated}</p>

            </div>
        )

}

export default Clients