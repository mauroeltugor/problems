const occupiedRooms = [];
const maxRooms = 20;
let requiredRooms = 21;
let checkinHour = 11;

if (requiredRooms <= maxRooms && checkinHour <= 12) {
    let availableRoom = maxRooms - requiredRooms;
    if (availableRoom >= requiredRooms) {
        for (let i = 0; i < requiredRooms; i += 1) {
            occupiedRooms.push(i);
        }
        console.log(`Rooms selected with success, there are ${occupiedRooms} available rooms left`);
        console.log(availableRoom);
    } else {
        console.log('No rooms available');
    }
} else if (requiredRooms > 20 || checkinHour > 12) {
    console.log('Sorry the reservation must be made before 12');
} else {
    console.log('No rooms available');
}

