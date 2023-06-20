// complete the given function

function palindrome(str){
	let strJoin = str.split('').join('').toLowerCase();
	let isPalindrome = true;
	let i = 0; j = strJoin.length-1;
	while(i <= j && isPalindrome){
		if(strJoin[i] !== strjoin[j]){
			isPalindrome = false;
		}
		i++;
		j--;
	}
	return isPalindrome;
}
module.exports = palindrome
