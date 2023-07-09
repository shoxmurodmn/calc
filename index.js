let fon = document.querySelector('#fon')

let display = (num) => {
   fon.value += num
}

function Clear() {
   fon.value = ''
}
function del() {
   fon.value = fon.value.slice(0, -1)
}

function calculay(){
try {
   fon.value = eval(fon.value)
   
   }
catch {
   alert(`invalit code`)
}
}
// let a = 'salom'
// alert(a.slice)
function amal(vl) {
   if (fon.value.at(-1) !== '-' && fon.value.at(-1) !== '+' && fon.value.at(-1) !== '*' && fon.value.at(-1) !== '/') {
      fon.value += vl
   }
}