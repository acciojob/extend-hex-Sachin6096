const extendHex = (shortHex) => {
  // write your code here
	let ans = "#"
	
	for (let x of shortHex)
		{
			if(x != '#')
			ans = ans+x+x;
			
		}
	return ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
