let id = 1

const saveBook = document.querySelector('[data-save-book-btn]')
const readingListTable = document.getElementById('bookTable')

const bookTitle = document.getElementById('createBook_title')
const bookAuthor = document.getElementById('createBook_author')
const bookReadStatus = document.getElementsByName('createBookReadStatus')

saveBook.addEventListener('click', () => {

    generateReadingListTable()
})

function generateReadingListTable() {
    let table = readingListTable
    let row = table.insertRow(1)
    row.setAttribute('id', `entry-${id}`)
    row.className = 'align-middle position-relative'
    row.insertCell(0).innerHTML = bookTitle.value
    row.insertCell(1).innerHTML = bookAuthor.value
    row.insertCell(2).innerHTML = getRadioValue()
    row.cells[2].className = 'border-end-0'
    let editEntryRow = row.insertCell(3)
    editEntryRow.appendChild(createEditBtn(id))
    editEntryRow.appendChild(deleteBtn(id++))
    editEntryRow.className = 'border-start-0'

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
    bookReadStatus.value = uncheckRadioBtn()
}
function uncheckRadioBtn() {
    let getAllRadios = document.querySelectorAll('input[name="createBookReadStatus"]')
    getAllRadios.forEach(value => value.checked = false)
}
function createEditBtn(id) {
    let editBtn = document.createElement('button')
    editBtn.id = id;
    editBtn.className = 'btn btn-outline-secondary btn-sm'
    editBtn.innerHTML = '<i class="fa fa-edit pe-1" aria-hidden="true"></i>Edit'
    editBtn.onclick = () => {
        console.log(`Edit entry-${id}`)
        let editedRow = document.getElementById(`entry-${id}`)
        bookTitle.value = editedRow.cells(0).innerHTML
        bookSeries.value = editedRow.cells(1).innerHTML
        bookAuthor.value = editedRow.cells(2).innerHTML
        bookReadStatus.value = editedRow.cells(3).innerHTML
    }
    return editBtn

}

function deleteBtn(id) {
    let deleteBtn = document.createElement('button')
    deleteBtn.id = id;
    deleteBtn.className = 'btn text-danger btn-sm ms-3'
    deleteBtn.innerHTML = '<i class="fa fa-trash pe-1" aria-hidden="true"></i> Delete'
    deleteBtn.onclick = () => {
        console.log(`Deleting row entry-${id}`);
        let deletedRow = document.getElementById(`entry-${id}`)
        deletedRow.parentNode.removeChild(deletedRow)
    }
    return deleteBtn
}

