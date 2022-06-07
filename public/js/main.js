// document.querySelector()

const url = `https://oh-my-gouache.herokuapp.com/api/`

const selectBrands = document.querySelector(".brands")
const selectColors = document.querySelector(".colors")

fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => {
        const gouacheBrands = data
        const brandsArray = Object.keys(gouacheBrands).sort()
        for (let i=0; i < brandsArray.length; i++) {
            const option = document.createElement('option') //<option></option>
            option.value = brandsArray[i] //<option value='breed'>
            option.innerText = brandsArray[i] //<option value='breed'>breed</option>
            selectBrands.appendChild(option)  //adds current <option> tag to the select box list of options
        }

        let colorArray
        
        selectBrands.addEventListener('change', event => {
            document.getElementById("color").selectedIndex = 0
            let clear = document.getElementById("color");
            while (clear.length > 1) {
            clear.remove(clear.length-1);
            }
            let colors = data[event.target.value]
            colorArray = colors.sort((a,z) => {
                if(a.name < z.name){
                    return -1
                } else {
                    return 1
                }
            })
            for (let i=0; i < colorArray.length; i++) {
                const option = document.createElement('option')
                option.value = colorArray[i].name
                option.innerText = colorArray[i].name
                selectColors.appendChild(option)
            }
        })

        selectColors.addEventListener("change", event => {
            let pickedColor = colorArray.find(item =>item.name === event.target.value)
            document.getElementById("colorName").innerText = pickedColor.name
            document.getElementById("swatch").style.backgroundColor = pickedColor.hex
            document.getElementById("itemNum").innerText = pickedColor.number
            document.getElementById("lightfast").innerText = pickedColor.rating
            document.getElementById("pigments").innerText = pickedColor.pigments
            document.getElementById("opacity").innerText = pickedColor.opacity
        })
    })