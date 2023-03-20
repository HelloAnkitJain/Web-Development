import './Content.css';
import React,{ useState } from 'react';

function Content(){
    let [newTitle, setTitle] = useState(0);

    function decrement(){
            newTitle = newTitle - 1;
            setTitle(newTitle)
    }

    function increment(){
            newTitle = newTitle + 1;
            setTitle(newTitle)
    }

    function init(){
        setTitle(0)
    }

    return(<div>
        <div    className='inside'>
                <button onClick={decrement}>-</button>
                <span className='counter'>{newTitle}</span>
                <button onClick={increment}>+</button>

        </div>
        <button onClick={init}>reset</button>
        </div>
    )
}

export default Content;