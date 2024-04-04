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
    validateForm()
    let table = readingListTable
    let row = table.insertRow(1)
    row.setAttribute('id', `entry-${id}`)
    row.className = 'align-middle position-relative'
    row.insertCell(0).innerHTML = bookTitle.value
    row.cells[0].className = 'border-end-0'
    row.insertCell(1).innerHTML = bookSeries.value
    row.cells[1].className = 'border-start-0 fw-lighter'
    row.insertCell(2).innerHTML = bookAuthor.value
    row.insertCell(3).innerHTML = getRadioValue()
    row.cells[3].className = 'border-end-0'
    let editEntryRow = row.insertCell(4)
    editEntryRow.appendChild(createEditBtn(id))
    editEntryRow.appendChild(deleteBtn(id++))
    editEntryRow.className = 'border-start-0 d-flex justify-content-end'
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
const uncheckRadioBtn = () => {
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
        // bookTitle.value = editedRow.cells[0].innerHTML
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
function validateForm() {
    let isChecked = document.querySelector('input[name="createBookReadStatus"]:checked')

    if (bookTitle.value === '') {
        bookTitle.classList.add('border-danger')
        document.getElementById('titleError').innerHTML = 'Please add a title'

    }
    if (bookAuthor.value === '') {
        bookAuthor.classList.add('border-danger')
        document.getElementById('authorError').innerHTML = 'Please add an Author'
    }
    if (isChecked == null) {
        document.querySelectorAll('[data-read-status-lable]').forEach(lable => {
            lable.classList.remove('btn-outline-secondary')
            lable.classList.add('btn-outline-danger')
        })
        document.getElementById('readingStatError').innerHTML = 'Please check one'
    }
    console.log('FAIL')

}

