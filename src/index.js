import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
function Page(){
  return(
    <App />
  )
}
ReactDOM.render(<Page/>,document.querySelector("#root"))
let navEl = document.querySelector('.container-nav')
navEl.addEventListener("click",function(){
window.open('https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvNBjqlqKVQjmnrjdQkflQqmQNJxLwSwrPvTMMnbVlXLjqFcsMDrQDwzxMtpFcprxcxG','_blank').focus()
})
document.querySelector('.face').addEventListener("click",function(){
  window.open('https://www.facebook.com/ahme.khalil.7/','_black').focus()
})
/*document.querySelector('.tweet').addEventListener("click",function(){
  window.open('https://www.google.com/?hl=ar','_black').focus()
})*/
document.querySelector('.insta').addEventListener("click",function(){
  window.open('https://www.instagram.com/akhalil123321/').focus()
})
document.querySelector('.link').addEventListener("click",function(){
  window.open('https://www.linkedin.com/in/ahmed-khalil-4235261ab/','_black').focus()
})
document.querySelector('.git').addEventListener("click",function(){
  window.open('https://github.com/Akhalil123321','_black').focus()
})