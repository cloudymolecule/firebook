class Day{
    static all = []
    constructor({num_day, month, year, open_hour, open_minutes, open_ampm, close_hour, close_minutes, close_ampm, id}){
        this.num_day = num_day
        this.month = month
        this.year = year
        this.open_hour = open_hour
        this.open_minutes = open_minutes
        this.open_ampm = open_ampm
        this.close_hour = close_hour
        this.close_minutes = close_minutes
        this.close_ampm = close_ampm
        this.id = id
        this.element = document.createElement('div')
        this.element.id = `day-${this.id}`
        
        Day.all.push(this)
    }

    attachToDom(){
        const displayDay = document.getElementById('display-day')
        this.element.classList.add("each-day")
        this.element.innerHTML = `
            <h3 class="day-date" id="day-date-${this.id}">${this.month} ${this.num_day}, ${this.year}</h3>
            <div class="day-edit-button" id="day-edit-button-${this.id}">edit</div>
            <div class="day-delete-button" id="day-delete-button-${this.id}">delete</div>`
        displayDay.append(this.element)
    }

    addEventListeners(){
        const date = document.getElementById(`day-date-${this.id}`)
        const edit = document.getElementById(`day-edit-button-${this.id}`)
        const del = document.getElementById(`day-delete-button-${this.id}`)
        date.addEventListener('click', this.apptDay)
        edit.addEventListener('click', this.openEditDay)
        del.addEventListener('click', this.deleteDay)
    }

    apptDay = (x) => {
        const createEditDay = document.getElementById('create-edit-day')
        const bookAppt = document.getElementById('book-appt')
        createEditDay.style.display = 'none'
        bookAppt.style.display = 'grid'
        
    }

    openEditDay = (x) => {
        // fetchEditDay(this.id)
        const createEditDay = document.getElementById('create-edit-day')
        const bookAppt = document.getElementById('book-appt')

        let specificDay = this.getDayById(this.id)
        // specificDay = this.deconvertFrom24Hours(specificDay)
        createEditDay.style.display = 'grid'
        bookAppt.style.display = 'none'
        
        const dayF = document.getElementById('day')
        const monthF = document.getElementById('month')
        const yearF = document.getElementById('year')
        const openHourF = document.getElementById('open-hour')
        const openMinutesF = document.getElementById('open-minutes')
        const openAmpmF = document.getElementById('open-ampm')
        const closeHourF = document.getElementById('close-hour')
        const closeMinutesF = document.getElementById('close-minutes')
        const closeAmpmF = document.getElementById('close-ampm')
        
        
        console.log(specificDay)
        dayF.value = specificDay.num_day
        monthF.value = specificDay.month
        yearF.value = specificDay.year
        openHourF.value = this.deconvertFrom24Hours(specificDay.open_hour, specificDay.open_ampm)
        openMinutesF.value = specificDay.open_minutes
        openAmpmF.value = specificDay.open_ampm
        closeHourF.value = this.deconvertFrom24Hours(specificDay.close_hour, specificDay.close_ampm)
        closeMinutesF.value = specificDay.close_minutes
        closeAmpmF.value = specificDay.close_ampm

        
    }

    deleteDay = (x) => {
        console.log(`day-${this.id} delete`)
    }

    getDayById(id){
        for (let i = 0; i < Day.all.length; i++){
            if (Day.all[i].id === id) {
                return Day.all[i]
            }
        }
    }

    deconvertFrom24Hours(hour, ampm){
        let res
        if (ampm === 'pm') {
            res = hour - 12
        } else {
            res = hour
        }
        console.log(res)
        return res
    }

}

 