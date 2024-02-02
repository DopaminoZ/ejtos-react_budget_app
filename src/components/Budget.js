import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget,currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
    
        if (updatedBudget <= 20000 && updatedBudget >= totalExpenses) {
            setNewBudget(updatedBudget);
            dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
        } else if(updatedBudget <= totalExpenses){
            alert("Expenses will exceed budget");
        }
        else{
            setNewBudget(20000);
            alert("Limit is 20000");
        }
    };
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={
    handleBudgetChange}></input>
</div>
    );
};
export default Budget;
