class DaysAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/days'
    }

    fetchDays(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            if (response.data) {
                response.data.forEach(element => {
                    let day = new Day(element.attributes)
                    day.attachToDom()
                    day.addEventListeners('day')
                })
            }
        })
    }

    fetchDay(id){
        fetch(this.baseUrl + `/${id}`)
        .then(res => res.json())
        .then(response => {
            if (response.data) {
                let halfOrange = document.querySelectorAll('.turn-orange')
                halfOrange.forEach(element => {
                    element.classList.remove('turn-orange')
                    element.classList.add('book-time') 
                })  
                response.data.attributes.appointments.forEach(element => {
                    let appointment = new Appointment(element)
                    appointment.checkForAppt()
                })
            }
        })
    }

    fetchPostDays(){
        const num_day = document.getElementById('day').value
        const month = document.getElementById('month').value
        const year = document.getElementById('year').value
        const open_hour = this.convertTimeTo24(document.getElementById('open-hour').value, document.getElementById('open-ampm').value)
        const open_minutes = document.getElementById('open-minutes').value
        const open_ampm = document.getElementById('open-ampm').value
        const close_hour = this.convertTimeTo24(document.getElementById('close-hour').value, document.getElementById('close-ampm').value)
        const close_minutes = document.getElementById('close-minutes').value
        const close_ampm = document.getElementById('close-ampm').value

        let dayObj = {num_day, month, year, open_hour, open_minutes, open_ampm, close_hour, close_minutes, close_ampm}
        
        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dayObj)
        }
        fetch(this.baseUrl, configObj)
        .then(res => res.json())
        .then(response => {
            if (response.errors) {
                alert(response.errors)
            } else {
                const createEditDay = document.getElementById('create-edit-day')
                createEditDay.reset()
                createEditDay.style.display = 'none'
                let day = new Day(response.data.attributes)
                day.attachToDom()
                day.addEventListeners('day')
            }
            
        })
        

        
    }

    fetchPatchDay(dayId){
        const num_day = document.getElementById('day').value
        const month = document.getElementById('month').value
        const year = document.getElementById('year').value
        const open_hour = this.convertTimeTo24(document.getElementById('open-hour').value, document.getElementById('open-ampm').value)
        const open_minutes = document.getElementById('open-minutes').value
        const open_ampm = document.getElementById('open-ampm').value
        const close_hour = this.convertTimeTo24(document.getElementById('close-hour').value, document.getElementById('close-ampm').value)
        const close_minutes = document.getElementById('close-minutes').value
        const close_ampm = document.getElementById('close-ampm').value
        const createEditDay = document.getElementById('create-edit-day')

        let dayObj = {num_day, month, year, open_hour, open_minutes, open_ampm, close_hour, close_minutes, close_ampm}
        let configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dayObj)
        }
        fetch(`${this.baseUrl}/${dayId}`, configObj)
        .then(res => res.json())
        .then(response => {
            if (response.errors) {
                alert(response.errors)
            } else {
                Day.all = Day.all.filter(function(day){
                    return day.id !== response.id
                })
                let day = new Day(response)
                createEditDay.style.display = 'none'
                day.attachToDom()
                day.deleteInDom(response.id)
                day.addEventListeners('day')
            }
        })
    }

    deleteDay(dayId){
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        fetch(`${this.baseUrl}/${dayId}`, configObj)
        .then(response => {
            const displayHour = document.getElementById('display-hour')
            displayHour.innerHTML= ""
            Day.all = Day.all.filter(d => d.id != dayId)
            let dayElem = document.getElementById(`day-${dayId}`)
            dayElem.remove()
        })
    }

    convertTimeTo24(hour, ampm){
        let h = parseInt(hour, 10)
        if (ampm === 'PM'){
            h = h + 12
        }
        return h
    }

    
}