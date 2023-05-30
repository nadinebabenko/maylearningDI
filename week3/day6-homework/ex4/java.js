const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log (building.numberOfFloors)

console.log ( "apartments on the 1st flour: " , building.numberOfAptByFloor.firstFloor
    )
    console.log ( "apartments on the 3rd  flour: " , building.numberOfAptByFloor.thirdFloor
    )

    //Console.log the name of the second tenant and the number of rooms he has in his apartment.

    console.log ( "second tenant: " , building.nameOfTenants[1], "number of rooms which he has : " , building.numberOfRoomsAndRent.dan[0]
    )

    //Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
    const Sarahrent = building.numberOfRoomsAndRent.sarah[1]
    console.log (Sarahrent)
    const Davidrent = building.numberOfRoomsAndRent.david[1]
    console.log (Davidrent)
    const Danrent  = building.numberOfRoomsAndRent.dan[1]
    console.log (Danrent)

    if (Sarahrent + Davidrent > Danrent) {
console.log (building.numberOfRoomsAndRent.dan[1] =  1200)
    }
 