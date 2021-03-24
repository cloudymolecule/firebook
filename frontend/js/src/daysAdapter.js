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
                //display errors
            } else {
                console.log(response)
                let day = new Day(response.data.attributes)
                day.attachToDom()
            }
            
        })
        

        
    }
    fetchEditDay(dayId){

    }

    convertTimeTo24(hour, ampm){
        let h = parseInt(hour, 10)
        if (ampm === 'pm'){
            h = h + 12
        }
        return h
    }

    
}