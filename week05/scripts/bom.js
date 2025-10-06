const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value !='') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }});
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  })};
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');


function setChapterList() {
    localStorage.setItem('myFavBomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character

chaptersArray = chaptersArray.fliter((item) => item !== chapter);

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}


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







