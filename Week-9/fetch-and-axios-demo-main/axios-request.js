const url = 'https://api.adviceslip.com/advice';

axios.get(url)
    .then(res => {
        console.log(res.data.slip.advice)
    })
    .catch((error) => {
        console.log(error)
    })