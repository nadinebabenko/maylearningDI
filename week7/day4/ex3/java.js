const users = { user1: 18273, user2: 92833, user3: 90315 }

const entries = Object.entries(users)
console.log(entries)

const values=Object.values(users)
console.log(values)

const keys =Object.keys(users)
console.log(keys)
const result =[]

values.forEach((id, index) => {
    result.push([keys[index] , id * 2])
})
console.log(result)