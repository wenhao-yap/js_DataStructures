/*-----------------------------------------------------------------------------------------------------------------
20. Valid Parentheses
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
-----------------------------------------------------------------------------------------------------------------*/

/**
 * @param {string} s
 * @return {boolean}
 */

/*--------------------------- 
	Approach 1
	Runtime: 56 ms
---------------------------*/

const isValid = (s) => {
	//empty string is valid
	if(s.length == 0) return true;

	const brackets = {
		"(" : ")",
		"[" : "]",
		"{" : "}"
	}

	let stack = [];
	for(let i=0; i<s.length;i++){
		const currChar = s.charAt(i);
		//if it is a opening bracket
		if(brackets[currChar]){
			stack.push(currChar);
		} else { //if it is a closing bracket
			//get the top of stack. If empty, give it a dummy value
			const stackTop = stack.length > 0 ? stack.pop() : "#";
			//get the matching closing bracket for stackTop and compare with currChar
			if(brackets[stackTop] != currChar){
				return false
			}
		}
	}

	return stack.length > 0 ? false : true;
};

console.log("THESE CASES SUPPOSED TO GIVE FALSE RESULTS:");
console.log("(]: " + isValid("(]"));
console.log("([)]: " + isValid("([)]"));
console.log("((((((((): " + isValid("(((((((()"));

console.log("THESE CASES SUPPOSED TO GIVE TRUE RESULTS:");
console.log("()[]{}: " + isValid("()[]{}"));
console.log("{[]}: " + isValid("{[]}"));
console.log("((()(()))): " + isValid("((()(())))"));
console.log("(((((()))))): " + isValid("(((((())))))"));