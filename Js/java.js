let btn = document.querySelector("#all");
let btnOne = document.querySelector("#pending");
let btnTwo = document.querySelector("#completed");
const addTodo = () => {
  let userInput = document.getElementById("user-data").value;

  btnOne.addEventListener("click", function () {
    return true;
  });
  btnTwo.addEventListener("click", function () {
    return true;
  });
  if (userInput == "") {
    return;
  } else {
    if (btnOne != true || btnTwo != true) {
      btn.click();
    }
    $(".task-box").append(
      "<li class='li-container' id='li-container'><span id='li-text'>" +
        userInput +
        "</span><div class='list-btn'><button id='submit-btn' onclick='spanSwitch(this)'><span class='material-symbols-outlined'>edit</span></button><button id='submit-btn' onclick='completedTodo(this)'><span class='material-symbols-outlined'>check_circle</span></button><button id='submit-btn' onclick='removeTodo(this)'><span class='material-symbols-outlined'>delete</span></button></div></li>"
    );
  }
};

const clearAllTodo = () => {
  $(".li-container").remove();
  localStorage.clear();
};

const removeTodo = (e) => {
  e.parentNode.parentNode.remove();
};

const completedList = (e) => {
  document.getElementById("pending").classList.remove("active");
  document.getElementById("all").classList.remove("active");
  document.getElementById("completed").classList.add("active");
  // let Li = document.querySelector('li')
  // console.log(Li.classList.contains('completed'))
  // if (Li.classList.contains('completed')) {
  //   Li.style.display = 'flex'
  // } else {
  //   Li.style.display = 'none'
  // }
};

const pendingList = () => {
  document.getElementById("completed").classList.remove("active");
  document.getElementById("all").classList.remove("active");
  document.getElementById("pending").classList.add("active");
};

const allList = () => {
  document.getElementById("completed").classList.remove("active");
  document.getElementById("pending").classList.remove("active");
  document.getElementById("all").classList.add("active");
  if (btnOne == true || btnTwo == true) {
    document.querySelector("li").style.display = "flex";
  }
};

const completedTodo = (e) => {
  e.parentNode.parentNode.classList.add("completed");
};

const spanSwitch = (e) => {
  let txt = e.parentNode.parentNode;
  let userInput = document.getElementById("user-data").value;
  let element = document.getElementById("li-container");

  element.innerHTML = `<input id='edit-input' onblur='spanReset(this)' value='${txt}'/><div class='list-btn'><button id='submit-btn' onclick='spanSwitch(this)'><span class='material-symbols-outlined'>edit</span></button><button id='submit-btn' onclick='completedTodo()'><span class='material-symbols-outlined'>check_circle</span></button><button id='submit-btn' onclick='removeTodo()'><span class='material-symbols-outlined'>delete</span></button></div>`;
  document.getElementById("edit-input").focus();
};

const spanReset = (e) => {
  let txt = e.value;
  let element = document.getElementById("li-container");

  element.innerHTML = `<span> ${txt} </span><div class='list-btn'><button id='submit-btn' onclick='spanSwitch(this)'><span class='material-symbols-outlined'>edit</span></button><button id='submit-btn' onclick='completedTodo()'><span class='material-symbols-outlined'>check_circle</span></button><button id='submit-btn' onclick='removeTodo()'><span class='material-symbols-outlined'>delete</span></button></div>`;
  let x = document.getElementById("edit-input");
  if (x.value == "") {
    $(".li-container").remove();
  }
};
