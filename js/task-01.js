// const list = document.querySelector('#categories');
// console.log(list);

const items = document.querySelectorAll('.item');
// console.log([...items])
console.log(items.length)

const item = [...items].forEach(element => {

    console.log(element.firstElementChild.textContent)
    console.dir(element.lastElementChild.children.length)
});

