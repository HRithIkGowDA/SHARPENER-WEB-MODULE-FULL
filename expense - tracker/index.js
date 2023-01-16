const formEl = document.querySelector('#myForm');
const msg = document.querySelector('.message');
const userList = document.querySelector(".userList")

const amountEl = document.querySelector("#amount");
const descriptionEl = document.querySelector("#description");
const categoryEl = document.querySelector("#category");

formEl.addEventListener('submit' , onSubmit)





function showNewUserOnScreen(myobj){
   const child = `<li  id =${myobj._id}>Category :-${myobj.category} Amount:-${myobj.amount} Description:-${myobj.description} <button type="button" class="btn btn-danger btn-sm m-2 float-right" onClick = deleteItem("${myobj._id}")>Delete</button><button type="button" class="btn btn-primary m-2 float-right btn-sm" onClick = editItem('${myobj.description}','${myobj.category}','${myobj.amount}','${myobj._id}')>Edit</button></li>`
   userList.innerHTML = userList.innerHTML + child
}

async function onSubmit(e){
    e.preventDefault();
    if(amountEl.value == "" && descriptionEl.value == "" &&  categoryEl.value == "" ){
        msg.innerHTML = "Please Enter Amount , Description and category";
        setTimeout(function(){
           msg.remove()
        } , 5000)
    }else{ 
        const myobj = {
            amount : amountEl.value,
            description : descriptionEl.value,
            category : categoryEl.value
        }
       

      
       // showNewUserOnScreen(myobj)
       amountEl.value="";
       descriptionEl.value =""
    }
    
}

async function  deleteItem(id){
    //localStorage.removeItem(`user${description}`);
    //const child = document.getElementById(description);

    //userList.removeChild(child);
   
  
}

function editItem(description , category  , amount , id){
    descriptionEl.value = description;
    amountEl.value = amount;
    categoryEl.value=category;

    deleteItem(id);
}