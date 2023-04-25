var x = prompt("Enter a number: ");
var size = x.length;
var isPalindrome = true;
for (var i = 0; i < size / 2; i++){
    if(x[i] !== x[size - 1 - i]){
        isPalindrome = false;
        break;
    }
}
{isPalindrome? alert('Is a Palindrome'): alert("Isn't a Palindrome")};

