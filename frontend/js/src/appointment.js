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
            <input type="hidden" id="appointment-id" value="${this.id}">
            <h3 class="appointment-half-hour" id="appointment-half-hour-${this.id}"></h3>
            <div class="appointment-edit-button" id="appointment-edit-button-${this.id}">edit</div>
            <div class="appointment-delete-button" id="appointment-delete-button-${this.id}">delete</div>`
        displayHour.append(this.element)
    }
}