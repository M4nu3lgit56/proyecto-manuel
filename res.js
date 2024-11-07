window.addEventListener('load', function () {
    const info = ['\"Aunque al principio no tenia mucha confianza, realmente me sorprendí cuando me vi al espejo. 100% recomendado.\"', '\"El mejor corte que he tenido en mucho tiempo. El barbero entendió perfectamente lo que quería y el resultado fue impecable. ¡Totalmente recomendable!\"', '\"Excelente atención y profesionalismo. Me hicieron un corte personalizado que superó mis expectativas. El ambiente es relajante y acogedor. Definitivamente regresaré.\"', '\"Llevaba tiempo buscando una barbería de confianza y finalmente la encontré. El servicio es increíble, el corte perfecto y la experiencia completa es de primera calidad.\"', '\"Me encanta venir a HECTOR BABER. El barbero es muy profesional y siempre salgo con un corte perfecto. ¡El ambiente también es genial y relajante!\"']

    const main = document.querySelector(".rev-main")

    info.forEach(function (text, i) {
        if (i % 2 == 0) {
            const divContent = this.document.createElement('div')
            divContent.classList.add('rev-content')
            main.appendChild(divContent)

            const pText = this.document.createElement('p')
            pText.classList.add('rev-text')
            pText.innerHTML = text
            divContent.appendChild(pText)
        } else {
            const divContent = this.document.createElement('div')
            divContent.classList.add('rev-content-a')
            main.appendChild(divContent)

            const pText = this.document.createElement('p')
            pText.classList.add('rev-text')
            pText.innerHTML = text
            divContent.appendChild(pText)
        }
    })
})