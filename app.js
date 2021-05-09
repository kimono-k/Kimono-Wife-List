const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list'); // bubble boi
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.add-item-input');
const addItemButton = document.querySelector('button.add-item-button');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

// firstListItem.style.backgroundColor = 'pink';
// lastListItem.style.backgroundColor = 'deeppink';

function attachListItemButtons(li) {
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);

    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);

    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove wife';
    li.appendChild(remove);
}

for (let i = 0; i < lis.length; i++) {
    attachListItemButtons(lis[i]);
}

listUl.addEventListener('click', (event) => {
    // only allow clicked <li's> for the event.target
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == 'remove') {
            let li = event.target.parentNode; // gets the event data from the activation of the click
            let ul = li.parentNode;
            ul.removeChild(li);
        }

        if (event.target.className == 'up') {
            let li = event.target.parentNode; // gets the event data from the activation of the click
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            // if there is a previous sibling then
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        }

        if (event.target.className == 'down') {
            let li = event.target.parentNode; // gets the event data from the activation of the click
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            // if there is a next sibling then
            if (nextLi) {
                ul.insertBefore(nextLi, li); // reverse
            }
        }
    }
});

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }

});

// If button clicked then fill paragraph with the input given
descriptionButton.addEventListener('click', () => {
   descriptionP.innerHTML = descriptionInput.value + ':';
   descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0]; // collection
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    addItemInput.value = '';
});