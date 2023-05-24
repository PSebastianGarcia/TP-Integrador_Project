const valueTicket = document.getElementById("value-ticket-showed");
const resumeButton = document.getElementById("resumen");
const clearButton = document.getElementById("borrar");
const TICKET_BASE_PRICE = 200;
const STUDENT_DISCOUNT = 0.80;
const TRAINEE_DISCOUNT = 0.50;
const JUNIOR_DISCOUNT = 0.15;
const discounts = [STUDENT_DISCOUNT, TRAINEE_DISCOUNT, JUNIOR_DISCOUNT];

function addValue () {
    const ticketTypeValue = document.getElementById("option-ticket").value;
    finalValue (ticketTypeValue);
}

function clearValue () {    
    valueTicket.innerHTML = null;
}

function finalValue (value) {
    const numberOfTicket = document.getElementById("countInput").value;
    let price = TICKET_BASE_PRICE;
    price -= price * discounts[value];
    valueTicket.innerHTML = price * numberOfTicket;
};

resumeButton.onclick = addValue;
clearButton.onclick = clearValue;