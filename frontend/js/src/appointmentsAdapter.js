class AppoitmentsAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/appoitments'
    }

    fetchPostAppointments(){
        const time = document.getElementsByClassName('selected-time')[0].value
        const client = document.getElementById('book-client').value
        const barber = document.getElementById('book-barber').value

        let appointmentObj = {time, client, barber}

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
                console.log(response.errors)
            } else {
                console.log(response)
                // let appointment = new Appointment(response.data.attributes)
                // day.attachToDom()
                // day.addEventListeners('day')
            }
            
        })
        

        
    }
}