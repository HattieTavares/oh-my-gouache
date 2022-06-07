document.querySelector()

const url = `https://oh-my-gouache.herokuapp.com/api/${brand}`

const selectBrands = document.querySelector(".brands")
const selectColors = document.querySelector(".colors")

fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => {
        const gouacheBrands = data.name
        const brandsArray = Object.keys(gouacheBrands).sort()
        for (let i=0; i < brandsArray.length; i++) {
            const option = document.createElement('option') //<option></option>
            option.value = brandsArray[i] //<option value='breed'>
            option.innerText = brandsArray[i] //<option value='breed'>breed</option>
            select.appendChild(option)  //adds current <option> tag to the select box list of options
        }
    })