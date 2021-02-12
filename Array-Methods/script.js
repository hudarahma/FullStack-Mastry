




// Interducing Array Methods 


let arr = ['a','b','c','d','e','f'];

/*------------- Slice------------- */
/* Slice does not mutate the array
It returns the sliced part of an array
Parameters : (inclusive,exclusive) */
console.log(arr.slice(2));
console.log(arr.slice(-1));
console.log(arr.slice(2,4));
console.log(arr.slice(-2,-1));
console.log(arr.slice(2,-1));
console.log(arr);


/*------------- Splice------------- */
/* Splice mutate the array
It returns the deleted part of an array
Parameters : (start,deleteCount) */

let arr1 = ['a','b','c','d','e','f'];
console.log(arr1.splice(2));
console.log(arr1.splice(0,1));


/*------------- Reverse------------- */
/* Reverse mutate the array
It returns the Reversed array */
let arrOriginal = ['p','q','r','s','t','u'];
console.log(arrOriginal.reverse());


/*------------- Concat------------- */
/* doest not mutate the array
parameter : array we want to concat with the 1st array
It returns the joined array */
let arrCon = ['p','q','r','s','t','u'];
console.log(arrCon.concat(arr));


/*------------- Join------------- */
/* doest not mutate the array
parameter : acharacter that join the array
return: String */
let arrJoin = ['p','q','r','s','t','u'];
console.log(arrJoin.join('*'));


/* ---------------ForEach---------- */

const movement = [100,300,200,432,900,522,456];
// for (const[key,value] of movement.entries()){
//   if(value>500){
//     console.log(value);
//     break;
//   }
// }
const USDtoINR = 75;
const mov = [];
movement.forEach((el,i)=>{
  // mov.push(el*USDtoINR);
  const arr = el*USDtoINR;
  // console.log(arr);
});
// console.log(mov);



// console.log('-------------ForEach with set and maps--------- ');
// const currencies = new Map([
//   ['usd','US Dollars'],
//   ['eur','Euro'],
//   ['GBP','pound sterling']
// ]);

// /* MAP */
// currencies.forEach((value,key)=>{
//   console.log(`${key}:${value}`)
// });

// /* Set */
// const currencyUnique = new Set(['USD','EURO','USD','INR']);
// console.log(currencyUnique);


/* ---------------MAP---------- */

movement.map((el,i)=>{
  console.log(el,i)
})

const conversion = movement.map((e,i)=> e*USDtoINR);
console.log(conversion);


const name = 'AwAnee PaNdey';
const getName = (name)=>{
  const fStep = name.toLowerCase()
  .split(' ').map((e)=>e[0]).join('');
  console.log(fStep);
}
getName(name);

/* ---------------Filter------------ */
const movement1 = [100,-300,200,-432,900,-522,-456];
const filtered = movement1.filter((el,i,arr)=>(el>0));
console.log(filtered);
console.log(movement1);

/* ---------------Reduce------------ */
const movement2 = [10,30,20,140,90,100];
// reduce (callbackfunction(acc,el,i,arr), accumulator)
const reducedArray = movement2.reduce((acc,el,i,arr)=>{
  //console.log(`i - ${i}: EL - ${el} : acc - ${acc}`);
  return acc+el;
},0);

console.log(reducedArray);

const max = movement2.reduce((acc,el)=>(el>acc)? el : acc);
console.log(max);

// ------------------Find------------------------
const movment3 = [10,30,-20, 140,-90, 100, -75, 35 ]
const firstMinusValue = movment3.find((el,i,arr) =>(el<0));
console.log(firstMinusValue)
// -------------------------FindIndex--------------

const firstMinusIndex = movment3.findIndex((el,i,arr)=>(el<0));
console.log(firstMinusIndex);
// ------------------Some-----------------
const movement4 = [10,30,-20, 140,-90, 100, -75, 35];
const anyValue = movement4.some((el)=>el===100);
console.log(anyValue);

//------------------------ Every------------
const movement5= [10,30,-20, 140,-90, 100, -75, 35];
const everyValue = movement5.every((el) => el>0);
console.log(everyValue);

// Flat
const arrFlat = [[1,2,3],[4,5,6],7,8];
console.log(arrFlat.flat());
console.log(...arrFlat);

const arrFlat1= [[1,2,3,4[5,6,7,8]],[4,5,6],7,8]
console.log(arrFlat1.flat(2)); //---> Take the parameter for flat level

// FlatMap

/* ---------------FlatMap------------------- */
// Data
const account1 = {
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
};

const account2 = {
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
};

const account3 = {
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
};

const account4 = {
  movements: [430, 1000, 700, 50, ['Awanee', 'Pandey', 'Sidhi']],
};

const accounts = [account1, account2, account3, account4];

// Prettier & less code
// flat
const movements = accounts.map((el)=>el.movements)
console.log(movements);
const flatArray = movements.flat(2);
console.log(flatArray);

// flatMap --> (only goes 1 level deep flattening)
const totalMovements2 = accounts.flatMap((el) => el.movements);
console.log(totalMovements2);


// ----------------Sort()----------------------
// Mutate the original Array
const movementSort = [100, 120, 50, 20];
movementSort.sort();
console.log(movementSort);


// ************We will be doing it tomorrow

// array
const arrCreate =[1,2,3,4]
const arrCreate2 = new Array(1,2,3,4);

// **************************fill()****************

const x = new Array(7); //--> gives us 7 empty arrays
