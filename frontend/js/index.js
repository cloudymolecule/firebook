const daysAdapter = new DaysAdapter
const appointmentsAdapter = new AppointmentsAdapter

const welcome = document.getElementById('welcome')
const displayHour = document.getElementById('display-hour')
const createEditDay = document.getElementById('create-edit-day')
const addDayButton = document.getElementById('add-day-button')
const createEditButton = document.getElementById('create-edit-button')
const bookAppt = document.getElementById('book-appt')
const apptSaveUpdate = document.getElementById('appt-save-update')
const localDayTime = document.getElementById('local-day-time')
const createEditButtonId = document.getElementById('create-edit-button-id')
const apptSaveUpdateid = document.getElementById('appt-save-update-id')
localDayTime.innerText = new Date().toLocaleString()



document.addEventListener('DOMContentLoaded', () => {
    
    setInterval(() => {
        localDayTime.innerText = `${new Date().toLocaleString()}`
    }, 1000)

    daysAdapter.fetchDays()

    addDayButton.addEventListener('click', () => {
        displayHour.innerHTML = ""
        createEditButton.innerText = 'Create'
        createEditDay.reset()
        welcome.style.display = 'none'        
        bookAppt.style.display = 'none'
        createEditDay.style.display = 'grid'
    })
    
    createEditButton.addEventListener('click', () => {
        if (createEditButton.innerText === 'Create') {
            daysAdapter.fetchPostDays()
        } else {
            daysAdapter.fetchPatchDay(createEditButtonId.value)
        }
    })
    
    apptSaveUpdate.addEventListener('click', () => {
        const bookBarber = document.getElementById('book-barber')
        const bookClient = document.getElementById('book-client')
        if (apptSaveUpdate.innerText === 'Save') {
            appointmentsAdapter.fetchPostAppointments()
        } else {
            appointmentsAdapter.fetchPatchAppointment(apptSaveUpdateid.value)
        }
        bookBarber.value = ""
        bookClient.value = ""
        
    })
})