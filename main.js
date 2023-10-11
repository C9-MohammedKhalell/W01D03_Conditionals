///////////////Pulse Check
// 1
if (10 >= 10){
}

// 2
if (5 > 3) {
}

// 3
if (5 > 10){
}
else{
}

// 4
if (2 < 3 && 7 > 10){
}

// 5
if ("hello" === "hello"){
}
//=====================================================================

true && true && false;
true && false;
false;

true || (true && false);
true || (false);
true ;

5 === 2 || 1 < 10;
false || 1 < 10;
false || true;
true;

(!false && true) || (!true && true);
(true && true) || (!true && true);
true || (!true && true);
true || (false && true);
true || false;
true;

//=====================================================================
const legalAge = function (age) {
  if (age>=18) {
    return true;
}
else{
  return false;

}
};

legalAge(20); // => true
legalAge(18); // => true
legalAge(17); // => false

//=====================================================================

const isItMyName = function (name) {
if (name==="Mohammad") {
    return true;
}
else{
  return false;

}
};

// the following output depends on the assumption that your name is `John`
isItMyName("Mark"); // => false
isItMyName("Sarah"); // => false
isItMyName("John"); // => true

//=====================================================================

const positiveOrNegative = function (number) {
    if (number>0) {
return number+" is positive";

    } else if (number<0) {
        return number+" is negative";
    } else{
        return number+" is neither positive nor negative";
    }
  };
  
  positiveOrNegative(10); // => 10 is positive
  positiveOrNegative(-10); // => -10 is negative
  positiveOrNegative(0); // => 0 is neither positive nor negative

//=====================================================================
///////////////Practice

// you could use the `toLowerCase` string methods to convert a string into lower case
"HeLlO wOrlD".toLowerCase(); // => "hello world"

// you could use the `toUpperCase`string methods to convert a string into upper case
"HeLlO wOrlD".toUpperCase(); // => "HELLO WORLD"

const toLowerOrUpperCase = function (string, strCase) {
if (strCase==="upper") {
return string.toUpperCase();    
} else if (strCase==="lower") {
    return string.toLowerCase();    
    } else  {
        return "String case must be lower or upper";    
        } 
    
};

toLowerOrUpperCase("HELLO WORLD", "lower"); // => "hello world"
toLowerOrUpperCase("my name is john", "upper"); // => "MY NAME IS JOHN"
toLowerOrUpperCase("my name is john", "mixed"); // => "String case must be lower or upper"

//=====================================================================

// one handy string property `length` is used to return the length of a string
"hello".length; // => 5
"hello world".length; // => 11 (notice how the space in between the words counted as a character)

// - words less than 5 are considered short words
// - words in between 5 and 8 are considered medium words
// - words in between 9 and 13 are considered long words
// - words more than 13 are considered very long words

const howLong = function (word) {
if (word.length<5) {
return "short";    
} else if (word.length>=5 && word.length<=8) {
    return "medium";    
    } else if (word.length>=9 && word.length<=13) {
        return "long";    
        } else if (word.length>13) {
            return "very long"; {
    
}}};

howLong("and"); // => "short"
howLong("function"); // => "medium"
howLong("corresponding"); // => "long"
howLong("Supercalifragilisticexpialidocious"); // => "very long"

//=====================================================================

// since strings store a series of characters in an ordered way
// we could use the index of the character to access the character in the string
// each character in the string has its own unique identifying number (index)
// the index value starts at zero and for every letter that is added after the first one, the index will be incremented by one

"hello"[0]; // => h
"hello"[1]; // => e
"hello"[2]; // => l
"hello"[3]; // => l
"hello"[4]; // => o

// write a function `startsWith` that accept two string arguments `string`, `character` and returns true if the string
// starts with that character. It doesn't matter if it's lowercase or uppercase

const startsWith = function (string, character) {
if (string[0].toLowerCase()===character.toLowerCase()) {
return true;    
} else {
    return false;    

}};
startsWith("Hello", "h"); // => true
startsWith("hello", "h"); // => true
startsWith("hello", "a"); // => false
startsWith("World", "h"); // => false
startsWith("World", "a"); // => false

//=====================================================================

const endsWith = function (string, character) {
   let x= string.length;
if (string[x-1].toLowerCase()===character.toLowerCase()) {
    return true;    
    } else {
        return false;    
    
    }
  };
  
  endsWith("Hello", "o"); // => true
  endsWith("Hello", "O"); // => true
  endsWith("hellO", "o"); // => true
  endsWith("World", "h"); // => false
  endsWith("World", "a"); // => false
  endsWith("World", "c"); // => false

//=====================================================================

const deposit = function (amount) {
if (typeof amount ==="number" && amount>0) {
    return amount;
} else if (typeof amount ==="string") {
    return "Please enter a number";
} else if (typeof amount ==="number" && amount<0) {
    return "Please enter a positive number";
} else {
    
}  };
  
  deposit(100); // => 100
  deposit(250); // => 250
  deposit(-100); // => "Please enter a positive number"
  deposit("100"); // => "Please enter a number"

//=====================================================================

const oddOrEven = function (number) {
if (number%2===0) {
return number+" is even"    
} else {
    return number+" is odd" 
}  };
  
  oddOrEven(1); // => "1 is odd"
  oddOrEven(2); // => "2 is even"
  oddOrEven(5); // => "5 is odd"
  oddOrEven(10); // => "10 is even"

//=====================================================================

const stringCase = function (string) {
if (string.toLowerCase()===string) {
return "all lower case";    
} else if (string.toUpperCase()===string) {
    return "all upper  case";    
    } else {
        return "mix case";    
}  };
  
  stringCase("JOHN"); // => "all upper case"
  stringCase("john"); // => "all lower case"
  stringCase("joHN"); // => "mix case"

//=====================================================================

const isLeapYear = function (year) {
    if (year%4===0 && year%400===0) {
        return true  
        } else {
            return false
        }  
  };
  
  isLeapYear(2000); // => true
  isLeapYear(2004); // => true
  isLeapYear(2020); // => true
  isLeapYear(2096); // => true
  
  isLeapYear(1603); // => false
  isLeapYear(2021); // => false
  isLeapYear(2200); // => false
  isLeapYear(2500); // => false
  isLeapYear(2600); // => false
  isLeapYear(3000); // => false
//=====================================================================

const login_v01 = function (username, password) {
if (username.length>6&&password.length>=8) {
return "login successful"    
} else {
    return "login failed"
}  };
  
  login_v01("John", "1234"); // => "login failed"
  login_v01("John", "12345678"); // => "login failed"
  login_v01("john_doe", "123456"); // => "login failed"
  login_v01("john_doe", "12345678"); // => "login successful"

//=====================================================================

// accounts:
// 1- username: "john_doe", password:"koljgwEA"
// 2- username: "jane_doe", password: "12345678"

const login_v02 = function (username, password) {
if (username.toLowerCase()==="john_doe"&& password==="koljgwEA"||username.toLowerCase()==="jane_doe"&& password==="12345678") {
return "login successful"    
} else {
    return "login failed"    

}  };
  
  // usernames are not case sensitive but passwords are
  login_v02("JOHN_DOE", "koljgwEA"); // => "login successful"
  login_v02("john_doe", "KOLJGWEA"); // => "login failed"
  // both information need to be true to return a success message
  login_v02("john_doe", "12345678"); // => "login failed"
  login_v02("jane_doe", "koljgwEA"); // => "login failed"
  login_v02("jane_doe", "12345678"); // => "login successful"

//=====================================================================


// 1- `username must be more than 6 characters long`
// 2- `password must be at least 8 characters long`
// 3- `username doesn't exist`.
// 4- `wrong password`.

// accounts:
// 1- username: "john_doe", password:"koljgwEA"
// 2- username: "jane_doe", password: "12345678"

const login_v03 = function (username, password) {
    if (username.toLowerCase()==="john_doe"&& password==="koljgwEA"||username.toLowerCase()==="jane_doe"&& password==="12345678") {
        return "login successful"    
        } else if (username.toLowerCase()==="john_doe"|| username.toLowerCase()==="jane_doe"&& password.length>8) {
            return "wrong password"
        } else if (password==="koljgwEA"|| password==="12345678"&& username.length>6) {
            return "username doesn't exist"
        } else if (username.length<=6) {
            return "username must be more than 6 characters long"
        } else if (password.length<=8) {
            return "password must be at least 8 characters long"
        } 
          };
  
  login_v03("john_doe", "koljgwEA"); // => "login successful"
  login_v03("jane_doe", "12345678"); // => "login successful"
  
  login_v03("john", "12345678"); // => "username must be more than 6 characters long"
  login_v03("jane_doe", "123456"); // => "password must be at least 8 characters long"
  
  login_v03("MrPotato", "12345678"); // => "username doesn't exist"
  login_v03("jane_doe", "123456789"); // => "wrong password"

//=====================================================================
///////////////Advanced Practice

const letterInString = function (string, letter) {
    
if (string.search(letter.toLowerCase())==1) {
return    true
} else {
    return false
}  };
  
  letterInString("Hello", "E"); // => true
  letterInString("Hello", "Z"); // => false

//=====================================================================

const guessTheSquareRoot = function (number, squareRoot) {
if (number%squareRoot===0) {
return "correct"    
} else {
    return "incorrect"
}  };
  
  guessTheSquareRoot(4, 2); // => "correct"
  guessTheSquareRoot(4, 3); // => "incorrect"

//=====================================================================

const randomMove = function () {
x=Math.floor(Math.random() * 3);
if (x===1) {
    return "rock"    

} else if (x===2) {
    return "paper"    

} else {
    return "scissors"    

} 
  };
  
  randomMove(); // => "rock"
  randomMove(); // => "rock"
  randomMove(); // => "paper"
  randomMove(); // => "scissors"

//=====================================================================





