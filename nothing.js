let btn=document.getElementById("mailbox-btn");
let list=document.getElementById("checklists");
btn.addEventListener('click',function(){
    if(list.style.display === 'none'|| list.style.display === ''){
        list.style.display='block';
    }else{
        list.style.display='none';
    }
})