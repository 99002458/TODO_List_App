console.log("krishna");

let listCount = 0;
let numTaskLeft = 0;
let addContainer = $("#add-list-container");

let inputField = $("#input-list");
let addMe = $("#add-list");
let listItems = $("#list-items");

inputField.keyup(function () {
    if (inputField.val() !== "") {
        addMe.css("display", "inline");
    }
});

addMe.click(function (event) {
    listCount++;
    addMe.css("display", "none");
    
    listItems.append(`
    <div id="${listCount}" onmouseover="showDeleteButton(${listCount})" onmouseout="hideDeleteButton(${listCount})">
    <li class="each-list-item">
    <input onchange="showCompleted()" class="checkbox" type="checkbox" name="checkbox-id" id="checkbox${listCount}">
    <span>${inputField.val()}</span>
    <button class="delete-list btn" id="delete${listCount}" onclick="deleteTask(${listCount})">
    <i class="fas fa-times-circle"></i>
    </button>
    </li>
    </div>
    `);
    
    inputField.val("");
    console.log($(".tags"));
  taskLeft();
});

function showCompleted() {
  let eachItem = $(".each-list-item");
  eachItem.each(function (i) {
      if (eachItem[i].firstElementChild.checked === true) {
        // console.log("Coor-change");
        let id = eachItem[i].firstElementChild.id.substring(8);
        // console.log(id);
      $("#"+ id).addClass("each-item-list-container");
    }
    else{
        let id = eachItem[i].firstElementChild.id.substring(8);
        console.log(id);
      $("#"+ id).removeClass("each-item-list-container");
    }
  });
  taskLeft();
}


$("#clear-completed-tasks").click(function(){
  let allCompleted = $(".each-item-list-container");
  allCompleted.each(function(i){
      console.log(allCompleted[i]);
      allCompleted[i].remove();
  });
  taskLeft();
});


$("#uncomplete-completed").click(function(){
    let eachItem = $(".each-list-item");
  eachItem.each(function (i) {
    eachItem[i].firstElementChild.checked = "true";
  });
  showCompleted();
  taskLeft();
});

function showDeleteButton(id){
    $('#delete'+id).css("display","inline");
    console.log("shrikanttttttttttttt");
}

function hideDeleteButton(id){
    $('#delete'+id).css("display","none");
    console.log("shrikanttttttttttttt");
}

function deleteTask(id){
    console.log($('#'+id));
    $('#'+id).remove();
    taskLeft();
}

function taskLeft(){
    let eachItem = $(".each-list-item");
    numTaskLeft = 0;
    eachItem.each(function (i) {
        if (eachItem[i].firstElementChild.checked === false) {
          numTaskLeft++;
      }
    });
    $("#task-pending")[0].innerHTML = numTaskLeft + " task left";
}

