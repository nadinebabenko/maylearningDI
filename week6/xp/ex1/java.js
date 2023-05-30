// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//#1.1 we will receive an error that the variable "a"  has already been declared , 1-st of all the block should be executed and it was reassign to 3

// 1.2 with const instead of let ?
//1.2 we will receive an  arrow that is unpossiable to make to 1 variable  2 consts.when reassingning variable , we have to use let 



//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
// #2.2 What will happen if the variable is declared 

funcThree()
//we will  receive an arrow that a is undefined , so it wiil be only alert


funcTwo()
//it will show that the value of "a" is 5 but not 0
funcThree()
//after it will be executed  again it will  show alert message and it will show that "a" = 5  

// with const instead of let ?
// when we use const it is impossiable to reassign the value


//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
//we will see the alert "Hello"
funcFive()
//we will see the  properties of a = 0 , which was declared previously




//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

funcSix()
//4.1  it is going to be block executed first 
//we will see alert inside the funcSix function   test
//+ variable "a" was reassign previousle and it was 0

 
// 4.2 with const instead of let ?
//without changes,because we havent changed anything. First of all the block will be exeuted with alert and "test"as "a"


//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);


//1.will be executed what is in the main scope e/m  alert in the if block   5 
//2-nd will be the  second internal alert  outside of the if block 2 


 
// with const instead of let ?

// nothing cause we havent reassign anything , 1 scope and internal one was executed