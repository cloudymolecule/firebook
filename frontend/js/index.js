let a = document.getElementById('create-edit-day')
a.style.display = 'none'

let b = document.getElementById('book-appt')
b.style.display = 'grid'

//add and edit day form
const addDayButton = document.getElementById('add-day-button')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const openHour = document.getElementById('open-hour')
const openMinutes = document.getElementById('open-minutes')
const openAmpm = document.getElementById('open-ampm')
const closeHour = document.getElementById('close-hour')
const closeMinutes = document.getElementById('close-minutes')
const closeAmpm = document.getElementById('close-ampm')
const barber1 = document.getElementById('barber-1')
const barber2 = document.getElementById('barber-2')
const barber3 = document.getElementById('barber-3')
const barber4 = document.getElementById('barber-4')
const barber5 = document.getElementById('barber-5')
const barber6 = document.getElementById('barber-6')
const barber7 = document.getElementById('barber-7')
const barber8 = document.getElementById('barber-8')
const createSaveButton = document.getElementById('create-save-button')

//appointments form
//each appointment here
const availableBarbers = document.getElementById('available-barbers')
const bookClient = document.getElementById('book-client')
const apptDelete = document.getElementById('appt-delete')
const apptSaveUpdate = document.getElementById('appt-save-update')