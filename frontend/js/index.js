const daysAdapter = new DaysAdapter
const appointmentsAdapter = new AppointmentsAdapter
const localDayTime = document.getElementById('local-day-time')
localDayTime.innerText = new Date().toLocaleString()

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        localDayTime.innerText = `${new Date().toLocaleString()}`
    }, 1000)
    daysAdapter.fetchDays()
    Day.addFormButtons()
    Appointment.addFormButton()
})