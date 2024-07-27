// let a=localStorage.setItem('name','saloxiddin')
// let b=localStorage.getItem('name')
// console.log(b);
let h1=document.querySelector('h1')
let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
    let inp=document.querySelector('input').value
    localStorage.setItem('name',inp)
    h1.textContent=inp
})
h1.textContent=localStorage.gitItem('name')