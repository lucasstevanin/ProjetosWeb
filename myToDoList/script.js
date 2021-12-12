
//////////  REMOVE ELEMENTS TO DO LIST    ///////

//Create a "close" button and append it to each list item
var myList = document.getElementsByTagName("li")

for (let i = 0; i < myList.length; i++){
    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    myList[i].appendChild(span)
}

//Click on a close button to hide the current list item
var x = document.getElementsByClassName("close")

for (let i = 0; i < x.length; i++){
    x[i].onclick = function(){
       var div = this.parentElement
       div.style.display = "none"
    } 
}

/*Add a "checked mark when clicked on list item"*/ 
var listUl = document.querySelector('ul')
listUl.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
}, false)

//////////  ADD ELEMENTS TO DO LIST    ///////


//Create a new list item when clicking on the "Add button"
function newTask(){
    let li = document.createElement("li")
    let inputValue = document.getElementById("text").value
    let t = document.createTextNode(inputValue)
    li.appendChild(t)

    if (inputValue === ""){
        alert("You must write something!")
    } else {
        document.getElementById("myUL").appendChild(li)
    }
    document.getElementById("text").value = ""

    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)

    for (let i = 0; i < x.length; i++){
        x[i].onclick = function(){
           var div = this.parentElement
           div.style.display = "none"
        } 
    }
}


