let limit=4;
let pageCount=1;
let postCount=1;
let container=document.querySelector(".container");

const getPOST=async()=>{
 let response= await  fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
 let data=await response.json()
 console.log(data)
 console.log(data[0].body)
 data.map((CurEle,index)=>{
     const htmldata=`
    
     <div class="posts" id='posts'>
     

                  <span class='postCount'>${postCount++}</span>
                  <h3 class="title" id="title">${CurEle.title}</h3>
                  <p class="para"id="para">${CurEle.body}</p>

              </div>
     
     `;
     console.log(htmldata);
     container.insertAdjacentHTML('beforeend',htmldata);

 })

}
getPOST();


const showData=()=>{
    setTimeout(()=>{
        pageCount++;
        getPOST();

    },200);
}

window.addEventListener('scroll',()=>{
    const{scrollTop,scrollHeight,clientHeight,}=document.documentElement;
    console.log("scrollheight "+scrollHeight);
    console.log("total  "+scrollTop+clientHeight);
    if(scrollTop+clientHeight >= scrollHeight-668){
        console.log("to the bottom")
        showData();
    }
})