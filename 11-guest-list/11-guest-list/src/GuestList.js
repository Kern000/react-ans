import React, {useState} from 'react'

export default function GuestList() {

    const [guests, setGuests] = useState(
        [
            'Tony Stark',
            'Hawkeye',
            'Spider Man',
            'Bruce Wayne'
        ]
    )

    return (
        <React.Fragment>
            <ul>
                {guests ? guests.map((guest)=>
                    <li>
                        {guest}
                    </li>
                ) : <p> Loading...</p>
                }
            </ul>
        </React.Fragment>
    )
}