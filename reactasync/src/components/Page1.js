import React, {useState, useEffect } from 'react'

function Page1() {

    useEffect( ()=> {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        const data = await fetch('http://api.open-notify.org/astros.json');
        console.log(data);

        const items = await data.json();
        console.log(items);
    }

        return (
            <div>
                <h3>page 1</h3>
            </div>
        )
}

export default Page1;
