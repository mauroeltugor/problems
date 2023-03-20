//add the arrays from de slides
const flavor = ['Natural', 'Coconut', 'Almond', 'Vanilla'];
const price = [14000, 14000, 16000, 16000];
const stock = [5, 5, 2, 0];
let selectedFlavor = '';//create a varable where you select the flavor(change flavor)
let quantity = 3;//here you select how many yoghurts you want 

//with the flavor that you wrote the program will find the case and see if we have stock ando after show the price
switch(selectedFlavor){
    case 'Natural':
        if (quantity <= stock[0]){
            console.log(`You select ${selectedFlavor} the unit price is  ${price[0]} and for all is ${price[0]*quantity} `);
        }else{
            console.log(`you need ${quantity} we only have ${stock[0]}. sorry `);
        }
        break
    case 'Coconut':
        if (quantity <= stock[1]){
            console.log(`You select ${selectedFlavor} the unit price is  ${price[1]} and for all is ${price[1]*quantity} `);
        }else{
            console.log(`you need ${quantity} we only have ${stock[1]}. sorry `);
        }
        break
    case 'Almond':
        if (quantity <= stock[2]){
            console.log(`You select ${selectedFlavor} the unit price is  ${price[2]} and for all is ${price[2]*quantity} `);
        }else{
            console.log(`you need ${quantity} we only have ${stock[2]}. sorry `);
        }
        break
    case 'Vanilla':
        if (quantity <= stock[3]){
            console.log(`You select ${selectedFlavor} the unit price is  ${price[3]} and for all is ${price[3]*quantity} `);
        }else{
            console.log(`you need ${quantity} we only have ${stock[3]}. sorry `);
        }
        break
    default:
        console.log(`please write an available flavor`);
}