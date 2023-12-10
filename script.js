let toDoArray = JSON.parse(localStorage.getItem('toDoArray')) || [];
renderPage()

//below is the button that adds our todo title and todo dates to the page

let addButton = document.querySelector('.js-add-button');
addButton.addEventListener('click', ()=>{
addTodo();
renderPage();

})

// below are the buttons that remove our todo title and date from the webpage

// writing a function.....

function renderPage(){
  let accumulatorHTML = '';
  toDoArray.forEach((Name)=>{
  let todoHtml =`<div class='todo-container'>
  <p class='todo-names'>${Name.todoName}</p> 
  <p class='todo-date'>${Name.date}</p> 
  <p><button class='delete-button'>Delete</button></p>
  </div>`;
  accumulatorHTML += todoHtml;});
  let appContent = document.querySelector('.app-content');
  appContent.innerHTML = accumulatorHTML;
  let eachDeleteButtons = document.querySelectorAll('.delete-button')

  deleteAllButtonToggle();
  eachDeleteButtons.forEach((eachDeleteButton, index)=>{
    eachDeleteButton.addEventListener('click', ()=>{
      toDoArray.splice(index, 1);
      renderPage();
     
    });
 });
}


function addTodo(){   
let todoNameText = document.querySelector('.js-todo-name');
let todoDate = document.querySelector('.js-todo-date');
let customObject = {};
customObject.todoName = todoNameText.value;
customObject.date = new Date(todoDate.value).toDateString();

if (customObject.todoName === ''){
  let warningText = document.querySelector(".js-text-warning-alert");
    warningText.classList.add('text-warning-alert');
    warningText.innerHTML = `Please, input title<p> <img src='images/down.png' class='arrow-down-image'><p/>`;
  setTimeout(()=>{
    warningText.classList.remove('text-warning-alert');
    warningText.innerHTML = '';
  }, 2000)
}

else if (customObject.date === 'Invalid Date'){
  let warningText = document.querySelector(".js-date-warning-alert");
    warningText.classList.add('date-warning-alert');
    warningText.innerHTML = `Please, select a date<p> <img src='images/down.png' class='arrow-down-image'><p/>`;
  setTimeout(()=>{
    warningText.classList.remove('date-warning-alert');
    warningText.innerHTML = '';
  }, 2000)
}
else{
toDoArray.push(customObject)
todoNameText.value = '';
todoDate.value = '';
;}};


// end of function....

//this function deletes all the todos on the page


//DELETEALL FUNCTION SECTION START
function deleteAllButtonToggle(){
if ( toDoArray.length === 0 ){
  let deleteAllContainer = document.querySelector('.js-delete-all-container');
  deleteAllContainer.innerHTML = '';
}
else {

  let deleteAllContainer = document.querySelector('.js-delete-all-container');
  deleteAllContainer.innerHTML = `<button class="delete-all-button js-delete-all-button">Delete All</button>`;
;
  let deleteAllButton = document.querySelector('.js-delete-all-button');
  
  deleteAllButton.addEventListener('click', (e)=>{
    deleteAll();
    renderPage();
  })
};
}



function deleteAll(){
  toDoArray = [];
};

//DELETEALL FUNCTION SECTION END

localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
