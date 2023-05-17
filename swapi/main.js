// Step 1: Grab an HTML element
let getResidentsButton = document.querySelector('#get-residents')
// Step 2: Write a function

const getResidentsResponse = () => {
    
    axios.get('https://swapi.dev/api/planets?search=Alderaan')
    .then(response => {
        console.log(response.data)
        let resultsArray = response.data.results[0].residents

        console.log(resultsArray)

        for (let i = 0; i < resultsArray.length; i++) {
            console.log(response.data.results[0].residents[i])
            let residentsURL = response.data.results[0].residents[i]
            axios.get(`${residentsURL}`)
            .then(response => {

                console.log(response.data.name)
                let newRes = document.createElement('h2')
                newRes.textContent = (response.data.name)
                document.body.appendChild(newRes)
            })

            .catch(error => {
                console.log(error)
              })
         }
        
      })
      .catch(error => {
        console.log(error)
      })
}

// Step 3: Combine steps 1 and 2 with an event listner
getResidentsButton.addEventListener('click',getResidentsResponse)