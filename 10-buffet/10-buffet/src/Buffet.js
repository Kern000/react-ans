import React, {useState} from 'react'

export default function Buffet() {

    const [items, setItems] = useState([]);

    const priceList = {
      beef : 12.00,
      chicken: 7.50,
      fish : 10.00,
      mushrooms : 5.5,
      spinach: 2.5
    }

    const handleChange = (event) => {
      if(items.includes(event.target.value)){
        setItems(items.filter((item) => item !== event.target.value));
      } else {
        setItems([...items, event.target.value]);
      }
    }

    const calculateTotal = () => {
        let total = 0;
        for (let item of items){
          total += priceList[item];
        }       
        return total;
    }

    return (
      <React.Fragment>
          <div>
            <input type="checkbox" name="orders" value="beef" checked={items.includes("beef")} onChange={handleChange}/><label>Shabu Shabu Beef</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="chicken" checked={items.includes("chicken")} onChange={handleChange}/><label>Chicken Fillet</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="fish" checked={items.includes("fish")} onChange={handleChange}/><label>Fish Fillet</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="mushrooms" checked={items.includes("mushrooms")} onChange={handleChange}/><label>Assorted mushhrooms</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="spinach" checked={items.includes("spinach")} onChange={handleChange}/><label>Spinach</label>
          </div>
          <h1>Total:{calculateTotal()}</h1>
      </React.Fragment>
    )
}
  
