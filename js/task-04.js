const decrement = document.querySelector('button[data-action="decrement"]');
decrement.addEventListener("click", changeNumber);

const increment = document.querySelector('button[data-action="increment"]');
increment.addEventListener('click', changeNumber);

const count = document.querySelector('#value')

function changeNumber(event) {
    let counterValue = Number(count.textContent)
    let type = event.target.dataset.action;

    if (type === 'decrement') {
        counterValue -= 1;
    }
    else if (type === 'increment') {
        counterValue += 1;
    }

    count.textContent = counterValue;;
}