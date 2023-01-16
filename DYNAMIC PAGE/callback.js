const posts =[
    {title : "Post One" , body : 'This is post one' , created: new Date().getTime() },
    {title : "Post Two" , body : 'This is post two', created : new Date().getTime()}

]
const listEl = document.getElementById('lists');
const timeEl = document.getElementById('time')
let intervalId =0;
let lastedited =0;
function getPost(){
    clearInterval(intervalId);
    lastedited = new Date().getTime();
    intervalId = setInterval(()=>{
        let output ="";
        posts.forEach((post , index)=>{
            output += `<li>${post.title}  created   ${(new Date().getTime()-post.created)/1000} seconds ago</li>`
            
        })
        listEl.innerHTML = output;
        timeEl.innerHTML = `last edited ${(new Date().getTime()-lastedited)/1000}`
    } ,1000)
       
}

function createPost(post , callback){
    setTimeout(()=>{
      posts.push({...post , created: new Date().getTime()});
      callback();
    } , 2000)
}

//getPost();
//createPost({title:"Post three" , body:"This is Post three"} , getPost);

function create4thPost(post4 , callback ){
  setTimeout(()=>{
    posts.push({...post4 , created: new Date().getTime()});
    callback()
  },6000)
}
createPost({title:"Post three" , body:"This is Post three"} , getPost)
create4thPost({title:"Post Four" , body:"This is Post Four"},getPost );