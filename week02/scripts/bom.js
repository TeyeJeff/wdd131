const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function(){
    if (input.value.trim() ==='') {
        alert('PLease enter a chapter chapter');
        input.focus();
        return;
    }

    const chapterTitle = document.createElement('li');
    const deleteButton = document.createElement('button');
    chapterTitle.textContent = input.value;
    deleteButton.textContent = 'X';
    chapterTitle.append(deleteButton);
    list.append(chapterTitle);

    deleteButton.addEventListener('click', function() {
        chapterTitle.remove();
        input.focus();
    })
    
    input.value ='';
    input.focus();
})






