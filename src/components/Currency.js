import React, { useState,useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const [showItems, SetshowItems] = useState(false);
    const [ head, Sethead ] = useState("");
    const { currency, dispatch } = useContext(AppContext);
    function showDB(){
        SetshowItems(!showItems);
    }
    function handleClick(event){
        
        let curr = event.target.getAttribute('value');
        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr,
        })
        Sethead(event.target.textContent);
    }



    return (
        <div className='db' onClick={showDB}>
                <h3>Currency ({head})</h3>
                            { showItems && <div className='db-items'>
                                <p value="$" onClick={handleClick}>$ Dollar</p>
                                <p value="£" onClick={handleClick}>£ Pound</p>
                                <p value="₹" onClick={handleClick}>₹ Rupee</p>
                                <p value="€" onClick={handleClick}>€ Euro</p>
                                
                </div>}
        </div>
    );
};
export default Currency;
