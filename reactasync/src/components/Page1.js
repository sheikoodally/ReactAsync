import React, {useState, useEffect } from 'react'

function Page1() {

    useEffect( ()=> {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]); 

    const fetchItems = async () => {
        const data = await fetch('http://api.open-notify.org/astros.json');
        console.log(data);

        const items = await data.json();
        console.log(items);
        //setItems(items.number);
        setItems(items.people);
    }

        return (
            <div>
                <h3>page 1</h3>
                {items.map(item =>(
                    <h4 key={item.name}>{item.name}</h4>
                ))}
            </div>
        )
}

export default Page1;
