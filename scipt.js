const valueTicket = document.getElementById("value-ticket-showed");
const resumeButton = document.getElementById("resumen");
const clearButton = document.getElementById("borrar");
const TICKET_BASE_PRICE = 200;
const STUDENT_DESC = 0.80;
const TRAINEE_DESC = 0.50;
const JUNIOR_DESC = 0.15;
const values = [0, 1, 2];

function addValue () {
    const ticketTypeValue = document.getElementById("option-ticket").value;
    finalValue (ticketTypeValue);
}

function clearValue () {    
    valueTicket.innerHTML = null;
}

function finalValue (value) {
    const countTicket = document.getElementById("countInput").value;
    let price = TICKET_BASE_PRICE;
    if (value == 1) {
        price -= price * STUDENT_DESC;
    } else if (value == 2) {
        price -= price * TRAINEE_DESC;
    } else {
        price -= price * JUNIOR_DESC;
    };
    valueTicket.innerHTML = price * countTicket;
};

resumeButton.onclick = addValue;
clearButton.onclick = clearValue;