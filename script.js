
console.log("Test2");
let btn = document.getElementById('hello');
hello.onclick = function() {
  alert("Go fuck yourself");
}

function isPalindrome(word) {
  return (word.toLowerCase() === word.toLowerCase()
    .split('')
    .reverse()
    .join('')) ? alert(true) : alert(false);
}
