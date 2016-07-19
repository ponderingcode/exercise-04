var arrStr = [];
var arrStrReverse = [];
var val0;
var reverse = "";

function onSubmitButtonPressed() {
    event.preventDefault();
    val0 = $('#inp0').val();
    
    for (var i = 0; i < val0.length; i++) {
        arrStr.push(val0.charAt(i));
    }
    arrStrReverse = arrStr.reverse();
    
    for (var i = 0; i < arrStrReverse.length; i++)
    {
        reverse += arrStrReverse[i];        
    }
    
    (val0.toUpperCase() === reverse.toUpperCase()) ? $('#output').text('The word "' + val0 + '" is a palindrome.') : $('#output').text('The word "' + val0 + '" is not a palindrome.');
}