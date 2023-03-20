//create all the variables
const unaveilableRooms = [];
const maxRooms = 20;
const maxHour = 12;
let requiredRooms = 8;
let checkinHour = 11;

//in this if we see if we have available rooms and if is the hour 
if (requiredRooms <= maxRooms && checkinHour <= maxHour) {
    let availableRoom = maxRooms - requiredRooms;//subtract the required to the max rooms  
    if (availableRoom >= requiredRooms) {
        for (let i = 0; i < requiredRooms; i += 1) {
            unaveilableRooms.push(i);
        }
        console.log(`Rooms selected with success, there are ${unaveilableRooms.length} rooms ocuppied and ${availableRoom} available`);//print the number of rooms that are available 
    } else {// is when we have not available rooms 
        console.log('No rooms available');
    }
} else if (checkinHour > 12) {//when the reservation is after 12 
    console.log('you can not reserve rooms after 12');
} else {
    console.log('No rooms available');
}