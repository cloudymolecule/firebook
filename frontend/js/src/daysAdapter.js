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
        const month = document.getElementById('month').value
        const year = document.getElementById('year').value
        const day = document.getElementById('day').value
        const openHour = document.getElementById('open-hour').value
        const openMinutes = document.getElementById('open-minutes').value
        const openAmpm = document.getElementById('open-ampm').value
        const closeHour = document.getElementById('close-hour').value
        const closeMinutes = document.getElementById('close-minutes').value
        const closeAmpm = document.getElementById('close-ampm').value
        // const barber1 = document.getElementById('barber-1')
        // const barber2 = document.getElementById('barber-2')
        // const barber3 = document.getElementById('barber-3')
        // const barber4 = document.getElementById('barber-4')
        // const barber5 = document.getElementById('barber-5')
        // const barber6 = document.getElementById('barber-6')
        // const barber7 = document.getElementById('barber-7')
        // const barber8 = document.getElementById('barber-8')

        let dayObj = {
            date = convertDate(month, day, year),
            open_hour = convertOpenCloseHour(openHour, openMinutes, openAmpm),
            close_hour = convertOpenCloseHour(closeHour, closeMinutes, closeAmpm)
        }

        function convertDate(month, day, year){
            return `${month} ${day}, ${year}` 
        }

        function convertOpenCloseHour(hour, minutes, ampm){
            let h = parseInt(hour, 10)
            let m = parseInt(minutes, 10)
            if (ampm === 'pm'){
                h = h + 12
            }
            const fullTime = `${h}${m}`
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
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            console.log(response)
        })
        
    }
}