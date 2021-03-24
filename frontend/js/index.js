const daysAdapter = new DaysAdapter
daysAdapter.fetchDays()

const createEditDay = document.getElementById('create-edit-day')
const addDayButton = document.getElementById('add-day-button')

const createSaveButton = document.getElementById('create-save-button')

//appointments form
//each appointment here
const bookAppt = document.getElementById('book-appt')

// const bookClientForm = document.getElementById('book-client')
// const apptDelete = document.getElementById('appt-delete')
// const apptSaveUpdate = document.getElementById('appt-save-update')

addDayButton.addEventListener('click', () => {
    createEditDay.style.display = 'grid'
    bookAppt.style.display = 'none'
})

createSaveButton.addEventListener('click', () => {
    daysAdapter.fetchPostDays()
})
