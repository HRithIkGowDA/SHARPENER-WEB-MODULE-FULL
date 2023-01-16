const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(()=>{
        let output="";
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
            document.body.innerHTML = output;
        })
    },1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(post)
            posts.push(post);
            console.log(posts)
            const error = false;

            if(!error){
                resolve();
            } else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}
function deletePost() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            var error = false;
            if (posts.length){
                posts.pop()
               
            } else{
                error = true;
            }
            if(!error){
                resolve();
            } else{
                reject('Error: Array is empty now');
            } 
        }, 1000);
    });
}

createPost({title:'Post Three', body:'This is the third post'})
    .then(deletePost)
    .then(getPosts)
    .catch(err => console.log(err))

// getPosts();
// deletePost()
//     .then(getPosts)
//     .catch(err=>console.log(err));
// deletePost()
//     .then(getPosts)
//     .catch(err=>console.log(err));
// deletePost()
//     .then(getPosts)
//     .catch(err=>console.log(err));

// Async / await
// async function init() {
//     await createPost({title: 'Post Three', body:'This is post three'});
    
//     getPosts();
// }

// init();

// Async /await with fetch

// async function fetchUsers(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');

//     const data = await res.json();
//     console.log(data);
// }

// fetchUsers();
// createPost({title: 'Post Three', body:'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));


const promise1 = Promise.resolve('Hello viru');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>setTimeout(resolve, 2000,' bye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
// Task
const updateLastUserActivityTime = new Promise((reolve,reject)=>{
    setTimeout(()=>{
        console.log(posts)
        // console.log(lastActivityTime);
    },1000)
})

Promise.all([promise1,promise2, promise3,promise4]).then((values)=> console.log(values));
