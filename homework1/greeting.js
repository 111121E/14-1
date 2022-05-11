//
// const name = prompt("Как вас зовут?");
// console.log("Helllo " + name);


const arr = ['Vlad', 'Dima','Tom','Sten',];
const arr2 = ['22', '36','18', '28', 24, 5];

if (arr.length > arr2.length) {
    console.log("arr > arr2")
} else if (arr2.length > arr.length){
    console.log("arr2>arr")
} else {
    console.log("arr = arr2")
}

let color = 'red';
switch (color){
    case "green":
        console.log('green');
        break;
    case "red":
        console.log('red');
        break;
    case 'yellow':
        console.log('yellow');
        break;
}