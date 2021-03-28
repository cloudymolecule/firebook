const daysAdapter = new DaysAdapter
const appointmentsAdapter = new AppointmentsAdapter
daysAdapter.fetchDays()

const createEditDay = document.getElementById('create-edit-day')
const addDayButton = document.getElementById('add-day-button')
const createEditButton = document.getElementById('create-edit-button')
const bookAppt = document.getElementById('book-appt')
const apptSaveUpdate = document.getElementById('appt-save-update')
const localDayTime = document.getElementById('local-day-time')

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
        daysAdapter.fetchPatchDay(createEditButton.id)
    }
})

apptSaveUpdate.addEventListener('click', () => {
    appointmentsAdapter.fetchPostAppointments()
})

setInterval(() => {
    localDayTime.innerText = `${new Date().toLocaleString()}`
}, 1000)