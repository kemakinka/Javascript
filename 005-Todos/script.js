
let todoinput = document.querySelector("#todoinput");
let saveBtn   = document.querySelector("#save");
let ulList    = document.querySelector(".list-group");
let deleteAll = document.querySelector("#deleteAll");
let showAlert = document.querySelector("#showAlert")

let items = []

defaultValue()


//load Todo
function defaultValue(){
    items = getItemsFromLocalStroge();
    items.forEach((item)=>{
    let li = document.createElement("li");
    li.classList = "list-group-item mb-2";
    li.textContent = item; 
    
    ulList.appendChild(li);
    let a = document.createElement("a");
    a.setAttribute('href','#');
    a.innerHTML = '<i class="bi bi-trash-fill float-end text-danger"></i></a>';
    li.appendChild(a);
    
});
}


function getItemsFromLocalStroge() {
    if(localStorage.getItem('items') !== null){
        items = JSON.parse(localStorage.getItem('items'));
    }else{
        ulList.textContent ="Not Todo"
    }

    return items;
}


function setItemsFromLocalStroge(text) {
    items = getItemsFromLocalStroge();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}


function deleteItemFromLocalStroge(text){
    items = getItemsFromLocalStroge(text);
    items.forEach(function(item,index){
        if(item == text){
            items.splice(index,1);
        }

        localStorage.setItem('items',JSON.stringify(items));
    });
}

// Add Todo 
saveBtn.addEventListener('click',function(e){
    if(todoinput.value === ""){
        showAlert.innerHTML = "Please Enter a Todo!";
    }else{
        let li = document.createElement("li");
        li.classList = "list-group-item mb-2";
        li.textContent = todoinput.value;
        ulList.appendChild(li);
    
        let a = document.createElement("a");
        a.setAttribute('href','#');
        a.innerHTML = '<i class="bi bi-trash-fill float-end text-danger"></i></a>';
        li.appendChild(a);
        
        setItemsFromLocalStroge(todoinput.value);

        showAlert.innerHTML ="";
        todoinput.value ="";
    }
    // e.preventDefault();
});


// Remove Todo
ulList.addEventListener('click',function(e){
    if(e.target.classList.contains("bi-trash-fill")){
       e.target.parentElement.parentElement.remove();
       deleteItemFromLocalStroge(e.target.parentElement.parentElement.textContent)
    }

    e.preventDefault();
});


// Delete All Todo
deleteAll.addEventListener('click',function(e){
    ulList.innerHTML ="";

    // 2. way
    // ulList.childNodes.forEach((item)=>{
    //     if(item.nodeType == 1){
    //         item.remove();
    //     }
    // })

    // e.preventDefault();
});