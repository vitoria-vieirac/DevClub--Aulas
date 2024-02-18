const companies = [
    {name: 'Samsung', marketValue: 50, foundedOn:1938},
    {name: 'Microsoft', marketValue: 415, foundedOn:1975},
    {name: 'Intel', marketValue: 117, foundedOn:1968},
    {name: 'Facebook', marketValue: 383, foundedOn:2004},
    {name: 'Spotify', marketValue: 30, foundedOn:2006},
    {name: 'Apple', marketValue: 845, foundedOn:1976}
]

const companiesRealValue = companies.map(item => {
    const percentValue = (item.marketValue * 10)/100
    const realValue = percentValue + item.marketValue

    console.log(realValue)

    return realValue
})

const filterCompanies = companies.filter (item => {
    if (item.foundedOn < 1990){return true}
    else{return false}
})

console.log(filterCompanies)



