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
        const barber1 = document.getElementById('barber-1').value
        const barber2 = document.getElementById('barber-2').value
        const barber3 = document.getElementById('barber-3').value
        const barber4 = document.getElementById('barber-4').value
        const barber5 = document.getElementById('barber-5').value
        const barber6 = document.getElementById('barber-6').value
        const barber7 = document.getElementById('barber-7').value
        const barber8 = document.getElementById('barber-8').value
        
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

        const bar = [barber1, barber2, barber3, barber4, barber5, barber6, barber7, barber8]
        let barbs = ""
        for (let i = 0; i < bar.length; i++) {
            if (bar[i] !== ""){
                if (barbs === ""){
                    barbs = bar[i]
                } else {
                    barbs = `${barbs}, ${bar[i]}`
                }
            }
        }
        let date = convertDate(monthF, dayF, yearF)
        let open_hour = convertOpenCloseHour(openHourF, openMinutesF, openAmpmF)
        let close_hour = convertOpenCloseHour(closeHourF, closeMinutesF, closeAmpmF)
        let barbers = barbs
        let dayObj = {date, open_hour, close_hour, barbers}

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
            }
            
        })


        
    }
}