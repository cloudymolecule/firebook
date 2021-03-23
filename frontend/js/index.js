const daysAdapter = new DaysAdapter
daysAdapter.fetchDays()



// let a = document.getElementById('create-edit-day')
// a.style.display = 'none'

// let b = document.getElementById('book-appt')
// b.style.display = 'grid'

//add and edit day form
const createEditDay = document.getElementById('create-edit-day')

const addDayButton = document.getElementById('add-day-button')
// const dayForm = document.getElementById('day')
// const monthForm = document.getElementById('month')
// const yearForm = document.getElementById('year')
// const openHourForm = document.getElementById('open-hour')
// const openMinutesForm = document.getElementById('open-minutes')
// const openAmpmForm = document.getElementById('open-ampm')
// const closeHourForm = document.getElementById('close-hour')
// const closeMinutesForm = document.getElementById('close-minutes')
// const closeAmpmForm = document.getElementById('close-ampm')
// const barber1Form = document.getElementById('barber-1')
// const barber2Form = document.getElementById('barber-2')
// const barber3Form = document.getElementById('barber-3')
// const barber4Form = document.getElementById('barber-4')
// const barber5Form = document.getElementById('barber-5')
// const barber6Form = document.getElementById('barber-6')
// const barber7Form = document.getElementById('barber-7')
// const barber8Form = document.getElementById('barber-8')
const createSaveButton = document.getElementById('create-save-button')

//appointments form
//each appointment here
const bookAppt = document.getElementById('book-appt')

// const availableBarbersForm = document.getElementById('available-barbers')
// const bookClientForm = document.getElementById('book-client')
// const apptDelete = document.getElementById('appt-delete')
// const apptSaveUpdate = document.getElementById('appt-save-update')

addDayButton.addEventListener('click', () => {
    bookAppt.style.display = 'none'
    createEditDay.style.display = 'grid'
})

createSaveButton.addEventListener('click', () => {
    
})

