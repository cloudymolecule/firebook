// const daysAdapter = new DaysAdapter
// const barbersAdapter = new BarbersAdapter
// daysAdapter.fetchDays()

const createEditDay = document.getElementById('create-edit-day')
const addDayButton = document.getElementById('add-day-button')

const createSaveButton = document.getElementById('create-save-button')

//appointments form
//each appointment here
const bookAppt = document.getElementById('book-appt')

// const availableBarbersForm = document.getElementById('available-barbers')
// const bookClientForm = document.getElementById('book-client')
// const apptDelete = document.getElementById('appt-delete')
// const apptSaveUpdate = document.getElementById('appt-save-update')

addDayButton.addEventListener('click', () => {
   if (createEditDay.style.display !== 'none'){
    createEditDay.style.display = 'none'
    bookAppt.style.display = 'grid'
   } else {
    createEditDay.style.display = 'grid'
    bookAppt.style.display = 'none'
   }
    
})

// createSaveButton.addEventListener('click', () => {
//     daysAdapter.fetchPostDays()
// })

