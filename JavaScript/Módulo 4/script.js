const users = [
    {name: 'José', vip: true},
    {name: 'Maria', vip: false},
    {name: 'Carolina', vip: true},
    {name: 'Pedro', vip: false},
    {name: 'Ana', vip: false},
    {name: 'Denise', vip: true},
]

const newList = users.map(vip => {
    const userVip = {name: vip.name,
        bracelet: vip.vip ? 'black' : 'green'
    }

    return userVip
})

console.log(newList)


const students = [
    {name: 'José', testGrade: 5},
    {name: 'Maria', testGrade: 3},
    {name: 'Carolina', testGrade: 8},
    {name: 'Pedro', testGrade: 4},
    {name: 'Ana', testGrade: 9},
    {name: 'Denise', testGrade: 6},
]

const aprovedStudents = students.map(aproved => {
    const aproveds = {
        name: aproved.name,
        result: aproved.testGrade >= 5 ? 'Aprovado' : 'Reprovado'
    }

    return aproveds
})

console.log(aprovedStudents)


