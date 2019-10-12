import React, {useState, useEffect } from 'react'

function Page1() {

    useEffect( ()=> {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);
    const [number, setItems1] = useState(); 

    const fetchItems = async () => {
        const data = await fetch('http://api.open-notify.org/astros.json');

        const items = await data.json();
        setItems(items.people);
        setItems1(items.number);

    }

        return (
            <div>
                <h3>Number of people on Space Now:</h3>
                <h4>{number}</h4>

                <h3>Names of people on Space:</h3>
                {items.map(item =>(
                    <h4 key={item.name}>{item.name}</h4>
                ))}
            </div>
        )
}

export default Page1;
