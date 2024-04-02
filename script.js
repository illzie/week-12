let id = 1

const saveBook = document.querySelector('[data-save-book-btn]')
const readingListTable = document.getElementById('bookTable')

const bookTitle = document.getElementById('createBook_title')
const bookSeries = document.getElementById('createBook_series')
const bookAuthor = document.getElementById('createBook_author')
const bookReadStatus = document.getElementsByName('createBookReadStatus')

saveBook.addEventListener('click', () => {

    generateReadingListTable()
})

function generateReadingListTable() {
    let table = readingListTable
    let row = table.insertRow(1)
    row.setAttribute('id', `item-${id}`)
    row.insertCell(0).innerHTML = bookTitle.value
    row.insertCell(1).innerHTML = bookSeries.value
    row.insertCell(2).innerHTML = bookAuthor.value
    row.insertCell(3).innerHTML = getRadioValue()
    let editEntry = row.insertCell(4)
    editEntry.appendChild(editBtn++)

    resetInputs()

}
function getRadioValue() {
    for (i = 0; i < bookReadStatus.length; i++) {
        if (bookReadStatus[i].checked)
            return bookReadStatus[i].value;
    }
}
function resetInputs() {
    bookTitle.value = ' '
    bookSeries.value = ' '
    bookAuthor.value = ' '
    bookReadStatus.checked = false
}