class AppointmentsAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/appointments'
    }
    fetchPostAppointments(){
        const day_id = document.querySelector('.selected-day #day-id').value
        const time = this.isThereATime()
        const client = document.getElementById('book-client').value
        const barber = document.getElementById('book-barber').value
        
        let appointmentObj = {time, client, barber, day_id}

        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(appointmentObj)
        }
        
        fetch(this.baseUrl, configObj)
        .then(res => res.json())
        .then(response => {
            if (response.errors) {
                alert(response.errors)
            } else {
                let appointment = new Appointment(response.data.attributes)
                appointment.checkForAppt()
                appointment.attachToDom()
                appointment.addEventListeners()
                
            }
        })
    }

    fetchPatchAppointment(apptId){
        const saveUpdateButton = document.getElementById('appt-save-update')
        const day_id = document.querySelector('.selected-day #day-id').value
        const time = this.isThereATime()
        const client = document.getElementById('book-client').value
        const barber = document.getElementById('book-barber').value
        
        let appointmentObj = {time, client, barber, day_id}

        let configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(appointmentObj)
        }
        
        fetch(`${this.baseUrl}/${apptId}`, configObj)
        .then(res => res.json())
        .then(response => {
            if (response.errors) {
                alert(response.errors)
            } else {
                let appointment = new Appointment(response)
                saveUpdateButton.innerText = "Save"
                appointment.deleteInDom(response.id)
                appointment.attachToDom()
                appointment.addEventListeners()
            }
        })
    }

    deleteAppointment(apptId){
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        
        fetch(`${this.baseUrl}/${apptId}`, configObj)
        .then(response => {
            let apptElem = document.getElementById(`appointment-${apptId}`)
            Appointment.All = Appointment.All.filter(function(appointment) {
                return appointment.id !== apptId
            })
            apptElem.remove()
        })
    }

    isThereATime(){
        let time = document.getElementsByClassName('selected-time')[0]
        if (!time) {
            return ""
        } else {
            return time.innerText
        }
    }
}