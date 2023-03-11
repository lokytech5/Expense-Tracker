import React, { useState } from 'react'
import './Expense.css'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import Card from '../UI/Card'

export default function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })




    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseList items={filteredExpense} />
            </Card>


        </div>
    )
}
