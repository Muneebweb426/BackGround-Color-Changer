const btn = document.querySelectorAll('.button')
const bod = document.querySelector('body')
 
btn.forEach(function (btnn) {
    btnn.addEventListener("click", function (a) {
        if (a.target.id === 'gray') {
          bod.style.backgroundColor= 'gray'
        }
        if (a.target.id === 'white') {
          bod.style.backgroundColor= 'white'
        }
        if (a.target.id === 'yellow') {
          bod.style.backgroundColor= 'yellow'
        }
        if (a.target.id === 'red') {
          bod.style.backgroundColor= 'red'
        }
        if (a.target.id === 'green') {
          bod.style.backgroundColor= 'green'
        }
    })
    
})