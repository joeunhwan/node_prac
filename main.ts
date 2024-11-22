import _ from 'lodash'

console.log(_.upperCase('hellow_world'))

interface User {
    name: string
    age: number
}

const user: User = {
    name: 'Eunhwan',
    age: 85
}

console.log(user)