var arrStr = [];
var arrStrReverse = [];
var val0;
var reverse = "";

function onSubmitButtonPressed() {
    val0 = $('#inp0').val();
    
    for (var i = 0; i < val0.length; i++) {
        arrStr.push(val0.charAt(i));
    }
    arrStrReverse = arrStr.reverse();
    
    for (var i = 0; i < arrStrReverse.length; i++)
    {
        reverse += arrStrReverse[i];        
    }
    
    alert(reverse);
    
    (val0 === reverse) ? alert('The word "' + val0 + '" is a palindrome.') : alert('The word "' + val0 + '" is not a palindrome.');
}