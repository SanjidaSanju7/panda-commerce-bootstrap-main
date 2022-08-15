// Practice- 2

const h2collection = document.getElementsByTagName('h2');
for (const h2 of h2collection) {
    h2.style.color = 'lightblue'
}
// Practice- 3

document.getElementById('backpack').style.backgroundColor = 'tomato';

// Practice- 4

const cardCollection = document.getElementsByClassName('card');
for (const card of cardCollection) {
    card.style.borderRadius = '30px'
}

// Practice- 5

function clickHandler() {
    console.log(' The button clicked successfully')
}

// Practice- 6

const buttonCollection = document.getElementsByClassName('btn');
for (const btn of buttonCollection) {
    btn.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

// Practice- 7

document.getElementById('inputEmail1').addEventListener('keyup',
    function (event) {
        const inputText = event.target.value;
        const submitButton = document.getElementById('submit-btn');

        if (inputText === 'email') {
            submitButton.removeAttribute('disabled');
        }
        else {
            submitButton.setAttribute('disabled', true);
        }
    })

// Practice- 8

document.getElementById('red-shoe').addEventListener('mouseenter', function (event) {
    event.target.src = 'Images/shoes/shoe-4.png';
})
document.getElementById('red-shoe').addEventListener('mouseout', function (event) {
    event.target.src = 'Images/shoes/shoe-3.png';
})

// Practice- 9

document.getElementById('subscribe').addEventListener('dblclick', function (event) {
    event.target.style.backgroundColor = 'lightcoral'
})