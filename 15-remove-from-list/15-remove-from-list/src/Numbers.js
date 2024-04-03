import React, {useState} from 'react'

export default function Numbers(){

    const [allNumbers, setAllNumbers] = useState([1,3,5,7,14,15])

    function removeAtRandom(){
        
        let indexToRemove = Math.floor(Math.random() * allNumbers.length);
        let clonedArray = [...allNumbers];
        clonedArray.splice(indexToRemove, 1);
        setAllNumbers(clonedArray);
    }

    return <React.Fragment>
      <ul>
        {allNumbers.map(number=> <li> {number} </li>)}
      </ul>
      <div>
         <button onClick={removeAtRandom}>Remove Random</button>
      </div>     
    </React.Fragment>

}
