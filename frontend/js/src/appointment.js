class Appointment{
    static All = []
    constructor({time, client, barber, day_id}){
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
            <input type="hidden" id="appt-half-hour-id" value="${this.id}">
            <label for="appt-client" id="appt-client-label">Client:</label>
            <em class="appt-client" id="appt-client">${this.client}</em>
            <label for="appt-barber" id="appt-barber-label">Barber:</label>
            <em class="appt-barber" id="appt-barber">${this.barber}</em>
            <div class="appt-edit-button" id="appt-edit-button-${this.id}">edit</div>
            <div class="appt-delete-button" id="appot-delete-button-${this.id}">delete</div>`
        displayHour.append(this.element)
    }
}