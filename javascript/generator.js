
var generator = {

  createRow: function (className, type, trainer) {
    // get table element
    var tableBodyElement = document.querySelector('.main-table tbody')

    // create row element
    var trElement = document.createElement('tr')

    // create cell elements for each text data
    var classNameTdElement = document.createElement('td')
    var typeTdElement = document.createElement('td')
    var trainerTdElement = document.createElement('td')

    // insert text to each cell
    classNameTdElement.innerHTML = className
    typeTdElement.innerHTML = type
    trainerTdElement.innerHTML = trainer

    // append each cell to row element
    trElement.appendChild(classNameTdElement)
    trElement.appendChild(typeTdElement)
    trElement.appendChild(trainerTdElement)

    // append row element to table
    tableBodyElement.appendChild(trElement)
  }

}

window.generator = generator
