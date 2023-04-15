import React, { useState } from 'react';

import TAX_SLABS from './utils/tax_slabs';
import calculateTaxAmount from './utils/calculateTaxAmount'
import Card from './UI/Card'
import Button from './UI/Button';

import classes from './tds.module.css'


function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [income, setIncome] = useState('');
    const [taxAmount, setTaxAmount] = useState(0);

    function handleEmailChange(event) {
        const value = event.target.value;
        // basic email validation using regex
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setEmail(value);
        if (!isValid) {
            event.target.setCustomValidity('Invalid email address');
        } else {
            event.target.setCustomValidity('');
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const tax = calculateTaxAmount(income, TAX_SLABS);
        setTaxAmount(tax);
    }

    return (
        <>
            <Card cssClass={classes.input}>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="name-input">Name</label>
                    <input
                        id="name-input"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />


                    <label htmlFor="email-input">Email</label>
                    <input
                        id="email-input"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />


                    <label htmlFor="income-input">Gross Total Income</label>
                    <input
                        id="income-input"
                        type="text"
                        value={income}
                        onChange={(event) => setIncome(event.target.value)}
                        required
                    />

                    <Button type="submit">Calculate Tax</Button>

                </form>
            </Card>
            {taxAmount &&
                <Card cssClass={classes.amount}>{taxAmount > 0 ? <p cssClass={classes.p}>Total Tax Amount: {taxAmount}</p> : "Nill"}</Card>
            }
        </>

    );

}

export default App;