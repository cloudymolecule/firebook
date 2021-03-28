class Appointment{
    static All = []
    constructor({id, time, client, barber, day_id}){
        this.id = id
        this.time = time
        this.client = client
        this.barber = barber
        this.day_id = day_id
        this.element = document.createElement('div')
        this.element.id = `appointment-${this.id}`

        Appointment.All.push(this)
    }

    attachToDom(){
        const displayHour = document.getElementById('display-hour')
        this.element.classList.add("each-half-hour")
        this.element.innerHTML = `
            <label for="appt-client" id="appt-client-label">Client:</label>
            <em class="appt-client" id="appt-client-${this.id}">${this.client}</em>
            <label for="appt-barber" id="appt-barber-label">Barber:</label>
            <em class="appt-barber" id="appt-barber-${this.id}">${this.barber}</em>
            <div class="appt-edit-button" id="appt-edit-button-${this.id}">edit</div>
            <div class="appt-delete-button" id="appt-delete-button-${this.id}">delete</div>`
        displayHour.append(this.element)
    }

    addEventListeners(){
        const edit = document.getElementById(`appt-edit-button-${this.id}`)
        const del = document.getElementById(`appt-delete-button-${this.id}`)
        edit.addEventListener('click', this.editAppt)
        del.addEventListener('click', this.deleteAppt)
    }

    editAppt = () => { 
        AppointmentsAdapter.fetchPatchAppointment()
    }

    deleteAppt = () => { 
        AppointmentsAdapter.deleteAppointment()
    }

    static displayHalfHours = (time) => {
        const displayHour = document.getElementById('display-hour')
        const dayId = document.querySelector('.selected-day #day-id').value
        displayHour.innerHTML = ""
        
        let halfHourAppts = Appointment.All.filter(function(halfHour) {
            return (halfHour.time === time && halfHour.day_id == dayId)
        })
        
        halfHourAppts.forEach(halfHour => {
            halfHour.attachToDom()
            halfHour.addEventListeners()
        })
    }
}