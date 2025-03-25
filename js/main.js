//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// Needs api-datakey and date - you can use random email

const button = document.querySelector('button')
const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'

button.addEventListener('click', () => {

    document.querySelector('.joke').innerText = ''
    document.querySelector('.setup').innerText = ''
    document.querySelector('.delivery').innerText = ''


    fetch(url) //Make sure to include to search for date
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data.date === search)
        console.log(data)
        if (data.type === 'single') {
            document.querySelector('.joke').innerText = data.joke
            console.log(data.joke)
        } else {
            document.querySelector('.setup').innerText = data.setup
            document.querySelector('.delivery').innerText = data.delivery
            console.log(data.setup)
            console.log(data.delivery)
        }
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
})