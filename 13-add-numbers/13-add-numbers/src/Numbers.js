import React, {useState} from 'react'

export default function Numbers () {
  
    const [allNumbers, setAllNumbers] = useState([1,3,5,7]);
    const [newNumber, setNewNumber] = useState(0);

    const addRandom = ()=> {

        let randomNumber = Math.floor(Math.random() * 10 + 1);
        setAllNumbers([...allNumbers, randomNumber]);

    }

    const addNumber = () => {
        setAllNumbers([...allNumbers, newNumber]);        
    }

    return <React.Fragment>
        <ul>
            {allNumbers? allNumbers.map(number=><li>{number}</li>) 
                        : <p>Loading...</p>}
        </ul>
        <div>
            <button onClick={addRandom}>Add Random</button>
        </div>
        <div>
            <input type="text" name="newNumber" value={newNumber} onChange={(event)=> setNewNumber(event.target.value)}/>
            <button onClick={addNumber}>Add</button>
        </div>
    </React.Fragment>

}