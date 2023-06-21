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

  //after adding the task to list making add and reset button disabled 
  toggleInputButtons()

}

// when pressing enter while adding the task it will add to the list
inpNewTask.keypress((e)=>{
    if(e.which == 13){
        addItem()
    }
})

function toggleInputButtons(){
    //if text area is empty then making the add and reset button disabled
    btnAdd.prop('disabled', inpNewTask.val()=='')
    btnReset.prop('disabled', inpNewTask.val()=='')

    //if list have 0 chile then making the sort and cleanup button disabled
    btnSort.prop('disabled', ulTasks.children().length<1)
    btnCleanup.prop('disabled', ulTasks.children().length<1)
}

inpNewTask.on('input',()=>{
    //if there is no text in task input area then the add and reset buttons are disabled by default in html code but as someone enters the text the button should be enabled
    toggleInputButtons()
})


//button click handling

btnAdd.click(()=>{
    addItem()
});

btnReset.click(()=>{
    //clearing the text area for the task input box
    inpNewTask.val('')
    //whenever the text area is cleaned using reset button then the add and reset button must become disabled
    toggleInputButtons()
})

btnCleanup.click(()=>{
    //remove all the done tasks from the list
    clearDone()
})

btnSort.click(()=>{
    //sort the task
    sortTasks()
})

function clearDone(){
    // all the done task will be removed from dom
    // ultasks mei jo done hai wo select kar rahe jquery ki madad se
    $('#ulTasks .done').remove()
    //checking if removed all then toggling the button to disable
    toggleInputButtons()
}

function sortTasks(){
    //all the done task will be moved to the end of task list
    $('#ulTasks .done').appendTo(ulTasks)
}
