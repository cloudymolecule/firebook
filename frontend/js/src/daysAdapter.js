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
                    day.addEventListeners()
                })
            }
        })
    }
    fetchPostDays(){
        const monthF = document.getElementById('month').value
        const yearF = document.getElementById('year').value
        const dayF = document.getElementById('day').value
        const openHourF = document.getElementById('open-hour').value
        const openMinutesF = document.getElementById('open-minutes').value
        const openAmpmF = document.getElementById('open-ampm').value
        const closeHourF = document.getElementById('close-hour').value
        const closeMinutesF = document.getElementById('close-minutes').value
        const closeAmpmF = document.getElementById('close-ampm').value

        let date = this.convertDate(monthF, dayF, yearF)
        let open_hour = this.convertOpenCloseHour(openHourF, openMinutesF, openAmpmF)
        let close_hour = this.convertOpenCloseHour(closeHourF, closeMinutesF, closeAmpmF)
        let dayObj = {date, open_hour, close_hour}

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
                //display errors
            } else {
                console.log(response)
                let day = new Day(response.data.attributes)
                day.attachToDom()
            }
            
        })
        

        
    }
    convertDate(month, day, year){
        return `${month} ${day}, ${year}` 
    }

    convertOpenCloseHour(hour, minutes, ampm){
        let h = parseInt(hour, 10)
        // let m = parseInt(minutes, 10)
        if (ampm === 'pm'){
            h = h + 12
        }
        if (minutes === "30") {
            minutes = 1
        } else {
            minutes = 0
        }
        const fullTime = `${h}${minutes}`
        return parseInt(fullTime, 10)
    }

    
}