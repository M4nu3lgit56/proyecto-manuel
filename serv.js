window.addEventListener('load', function () {
    const info = [
        {
            name: "Corte con Barba",
            price: "18.000$",
            img: "imagenes/barba.jpg"
        },
        {
            name: "Corte Normal",
            price: "14.000$",
            img: "imagenes/manuel.jpg"
        },
        {
            name: "Servicio a Domicilio",
            price: "20.000$",
            img: "imagenes/eduardo.jpg"
        }
    ]

    const container = document.querySelector('.serv-main')

    info.forEach(function (element, num) {
        if (num % 2 == 0) {
            const divContent = this.document.createElement('div')
            divContent.classList.add('serv-content')
            container.appendChild(divContent)

            const divInfo = document.createElement('div')
            divInfo.classList.add('serv-info')
            divContent.appendChild(divInfo)

            const text = document.createElement('h3')
            text.innerHTML = element.name
            divInfo.appendChild(text)

            const price = document.createElement('var')
            price.innerHTML = element.price
            divInfo.appendChild(price)

            const divImg = document.createElement('div')
            divImg.classList.add('serv-img')
            divContent.appendChild(divImg)

            const imag = document.createElement('img')
            imag.src = element.img
            divImg.appendChild(imag)
        } else {
            const divContent = this.document.createElement('div')
            divContent.classList.add('serv-content-a')
            container.appendChild(divContent)

            const divInfo = document.createElement('div')
            divInfo.classList.add('serv-info')
            divContent.appendChild(divInfo)

            const text = document.createElement('h3')
            text.innerHTML = element.name
            divInfo.appendChild(text)

            const price = document.createElement('var')
            price.innerHTML = element.price
            divInfo.appendChild(price)

            const divImg = document.createElement('div')
            divImg.classList.add('serv-img')
            divContent.appendChild(divImg)

            const imag = document.createElement('img')
            imag.src = element.img
            divImg.appendChild(imag)
        }
    })
})