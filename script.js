let inpNewTask = $("#inpNewTask");
let btnAdd = $("#btnAdd");
let btnReset = $("#btnReset");
let btnCleanup = $("#btnCleanup");
let btnSort = $("#btnSort");
let ulTasks = $("#ulTasks");

function addItem(){
    //creating list item for the task
  let listItem = $("<li>", {
    class: "list-group-item",
    text: inpNewTask.val(),
  });

  //making the task disabled when clicked on it 
  listItem.click(()=>{
    listItem.toggleClass('done')
     
  })

  // adding list item task to the kist
  ulTasks.append(listItem);

  //making the task input box empty whenever clicked on add button
  inpNewTask.val("");

}


  // when pressing enter while adding thetask it will add to the list
inpNewTask.keypress((e)=>{
    if(e.which == 13){
        addItem()
    }
})


function clearDone(){
    // all the done task will be removed from dom
    // ultasks mei jo done hai wo select kar rahe jquery ki madad se
    $('#ulTasks .done').remove()
}

function sortTasks(){
    //all the done task will be moved to the end of task list
    $('#ulTasks .done').appendTo(ulTasks)
}


btnAdd.click(()=>{
    addItem()
});

btnReset.click(()=>{
    //clearing the text area for the task input box
    inpNewTask.val("")
})

btnCleanup.click(()=>{
    //remove all the done tasks from the list
    clearDone()
})

btnSort.click(()=>{
    //sort the task
    sortTasks()
})
