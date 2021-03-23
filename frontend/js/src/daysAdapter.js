class DaysAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/days'
    }
    fetchDays(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            //this works 
        })
    }
    fetchPostDays(dayId){
        const monthF = document.getElementById('month').value
        const yearF = document.getElementById('year').value
        const dayF = document.getElementById('day').value
        const openHourF = document.getElementById('open-hour').value
        const openMinutesF = document.getElementById('open-minutes').value
        const openAmpmF = document.getElementById('open-ampm').value
        const closeHourF = document.getElementById('close-hour').value
        const closeMinutesF = document.getElementById('close-minutes').value
        const closeAmpmF = document.getElementById('close-ampm').value
        // const barber1 = document.getElementById('barber-1')
        // const barber2 = document.getElementById('barber-2')
        // const barber3 = document.getElementById('barber-3')
        // const barber4 = document.getElementById('barber-4')
        // const barber5 = document.getElementById('barber-5')
        // const barber6 = document.getElementById('barber-6')
        // const barber7 = document.getElementById('barber-7')
        // const barber8 = document.getElementById('barber-8')
        
        let date = convertDate(monthF, dayF, yearF)
        let open_hour = convertOpenCloseHour(openHourF, openMinutesF, openAmpmF)
        let close_hour = convertOpenCloseHour(closeHourF, closeMinutesF, closeAmpmF)

        let dayObj = {date, open_hour, close_hour}

        function convertDate(month, day, year){
            return `${month} ${day}, ${year}` 
        }

        function convertOpenCloseHour(hour, minutes, ampm){
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
            console.log(response)
            
        })
        
    }
}