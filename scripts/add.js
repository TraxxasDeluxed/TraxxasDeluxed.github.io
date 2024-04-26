// Task1
console.log("Task 1")
for(let i=0;i<11;i++){
    console.log(i*i)
}

//Task 2 
console.log("Task 2")
for(let i=5;i>0;i--){
    console.log(i);
}
console.log("Blastoff!")

//Task 3
console.log("Task 3")
for(let i=0;i<51;i+=2){
    console.log(i)
}

// Task 4 
console.log("Task 4")
let sum=0
for(let i=0;i<101;i++){
    console.log(sum+i)
}

//Task 5
console.log("Task 5")
let counter = 1
for(i=1;i<11;i++){
    counter*=i
    console.log(counter)
}

// Task 6
console.log("Task 6")
let arr =[3,1,4,1,5];
for(let i=0;i<arr.length;i++){
  console.log(arr[i])
}

// Task 7
console.log("Task 7")
for(let i=-1;i >= -(arr.length);i--){
    console.log(arr.at(i))
}

// Task 8
console.log("Task 8")
arr1 = []
for(let i=0;i<11;i++){
  arr1.push(i*i*i)
}
console.log(arr1)

//Task 9
console.log("Task 9")
arr2=[1]
let n1 = 0, n2 = 1, nextTerm;
for (let i = 1; i < 11; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    arr2.push(nextTerm)
}
console.log(arr2)


// Task 10
arr.reverse()
arr3=[...arr]
console.log(arr3)


