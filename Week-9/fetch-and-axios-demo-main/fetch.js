
const url = 'https://api.adviceslip.com/advice';

// The fetch() method returns a promise. If the promise returned is resolve, the function within the then() method is executed. That function contains the code for handling the data received from the API.
fetch(url)
    //make output data come back in json format
    .then((resp) => resp.json())
    //console.log the advice quote from the data object 
    .then(function(data){
        console.log(data.slip.advice);
    })
    // The API you call using fetch() may be down or other errors may occur. If this happens, the reject promise will be returned. The catch method is used to handle reject. The code within catch() will be executed if an error occurs when calling the API of your choice.
    .catch(function(error) {
        console.log(error)
    });