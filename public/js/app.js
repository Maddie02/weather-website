console.log('Cliend side JS is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

// message1.textContent = 'From JS!'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() /* prevents refresh */

    const location = search.value
    message1.textContent = 'Loading...'
    message2.textContent = ''
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
            message1.textContent = data.error
        } else {
            console.log(data.location)
            console.log(data.forecast)
            message1.textContent = data.location
            message2.textContent = data.forecast
        }
    })
})

    console.log(location)
})