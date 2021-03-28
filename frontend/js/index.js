const daysAdapter = new DaysAdapter
const appointmentsAdapter = new AppointmentsAdapter
daysAdapter.fetchDays()

const createEditDay = document.getElementById('create-edit-day')
const addDayButton = document.getElementById('add-day-button')
const createEditButton = document.getElementById('create-edit-button')
const bookAppt = document.getElementById('book-appt')
const apptSaveUpdate = document.getElementById('appt-save-update')
const localDayTime = document.getElementById('local-day-time')
const createEditButtonId = document.getElementById('create-edit-button-id')
const apptSaveUpdateid = document.getElementById('appt-save-update-id')
localDayTime.innerText = new Date().toLocaleString()

addDayButton.addEventListener('click', () => {
    createEditButton.innerText = 'Create'
    createEditDay.reset()
    createEditDay.style.display = 'grid'
    bookAppt.style.display = 'none'
})

createEditButton.addEventListener('click', () => {
    if (createEditButton.innerText === 'Create') {
        daysAdapter.fetchPostDays()
    } else {
        daysAdapter.fetchPatchDay(createEditButtonId.value)
    }
})

apptSaveUpdate.addEventListener('click', () => {
    if (apptSaveUpdate.innerText === 'Save') {
        appointmentsAdapter.fetchPostAppointments()
    } else {
        appointmentsAdapter.fetchPatchAppointment(apptSaveUpdateid.value)
    }
    
})

setInterval(() => {
    localDayTime.innerText = `${new Date().toLocaleString()}`
}, 1000)