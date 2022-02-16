let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    }, {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const names = []
for (let i = 0; i < students.length; i++) {
    const name = students[i].name       //получение данных из каждого элемента arr
    names[i] = name                     //добавление данных в новый arr
}
// console.log(names)

const trueStudents = []
for (let i = 0; i < students.length; i++) {
    const trueStudent = {...students[i], isStudent: true}
    trueStudents[i] = trueStudent
}
// console.log(trueStudents);

const myMap = (arr, callBack) => {
    const resultArray = []
    for (let i = 0; i < arr.length; i++) {
        const newDate = callBack(arr[i])
        resultArray[i] = newDate
    }
    return resultArray
}

// console.log(myMap(students, s => s.name))
// console.log(myMap(students, s => ({...s, isStudent: true})))  // интерпритатор ждет {}, а в случае объекта необходимы дополнительные () =>  ({})

const getName = (s) => s.name

const getTrueStudent = (s) => {
    return {...s, isStudent: true}
}

// console.log(students.map(getName))
// console.log(students.map(getTrueStudent))

function myFilter(arr, callBack) {
    const resultArray = []
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i]) === true) {
            resultArray.push(arr[i])
        }
    }
    return resultArray
}

console.log(myFilter(students, s => s.scores >= 90))

function myFind(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i]) === true) {
            return arr[i]
        }
        return undefined
    }
}

console.log(myFind(students, s => (s.name === "Bob")))
console.log(students.find(s => s.name === "Bob"))




























