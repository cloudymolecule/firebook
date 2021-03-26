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

    deleteInDom(id){
        const eachDay = document.getElementById(`day-${id}`)
        eachDay.remove()
    }

    addEventListeners(type){
        if (type === 'day') {
            const date = document.getElementById(`day-date-${this.id}`)
            const edit = document.getElementById(`day-edit-button-${this.id}`)
            const del = document.getElementById(`day-delete-button-${this.id}`)
            date.addEventListener('click', this.apptDay)
            edit.addEventListener('click', this.openEditDay)
            del.addEventListener('click', this.deleteDay)
        }
        if (type === 'hour') {
            const halfHours = document.getElementsByClassName('book-time')
            Array.from(halfHours).forEach((el) => {
                el.addEventListener('click', this.test)
            })
        }
    }

    test(){
        let selectedElements = document.getElementsByClassName('selected')
        if (selectedElements) {
            Array.from(selectedElements).forEach((el) => {
                el.classList.remove('selected')
            })
        }
        this.classList.add('selected')



        // this.classList.remove("deselected")

         //     console.log('hi')
            //     item.classList.remove('.deselected')
            //     document.querySelector(".selected").classList.remove('selected')
            //     item.classList.add('.selected')
            // })
    }
    apptDay = () => {
        const createEditDay = document.getElementById('create-edit-day')
        const bookAppt = document.getElementById('book-appt')
        createEditDay.style.display = 'none'
        bookAppt.style.display = 'grid'
        this.createAndAppendHalfHourDivs()
    }

    openEditDay = () => {
        const createEditDay = document.getElementById('create-edit-day')
        const bookAppt = document.getElementById('book-appt')
        const createEditBttn = document.querySelector(`create-edit-button-${this.id}`)
        let specificDay = Day.getDayById(this.id)
        createEditButton.id = this.id
        console.log(specificDay)
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
        
        dayF.value = specificDay.num_day
        monthF.value = specificDay.month
        yearF.value = specificDay.year
        openHourF.value = this.deconvertFrom24Hours(specificDay.open_hour, specificDay.open_ampm)
        openMinutesF.value = specificDay.open_minutes
        openAmpmF.value = specificDay.open_ampm
        closeHourF.value = this.deconvertFrom24Hours(specificDay.close_hour, specificDay.close_ampm)
        closeMinutesF.value = specificDay.close_minutes
        closeAmpmF.value = specificDay.close_ampm
        createEditButton.innerText = 'Update'
    }

    deleteDay = () => {
        daysAdapter.deleteDay(this.id)
    }

    static getDayById(id){
        return Day.all.find(day => day.id == id)
    }

    deconvertFrom24Hours(hour, ampm){
        let res
        if (ampm === 'pm') {
            res = hour - 12
        } else {
            res = hour
        }
        return res
    }

    createAndAppendHalfHourDivs(){
        const bookHours = document.getElementById('book-hours')
        bookHours.innerHTML = ""
        let halfHours = (this.close_hour - this.open_hour) * 2
        let thirtyOpen = (this.open_minutes).toString()
        let thirtyClose = (this.close_minutes).toString()
        let initialAmpm = this.open_ampm
        if (this.open_minutes === 30 && this.close_minutes === 0) {halfHours -= 1}
        if (this.close_minutes === 30 && this.open_minutes === 0) {halfHours += 1}
        let startHour = this.deconvertFrom24Hours(this.open_hour, this.open_ampm)
        
        for (let i = 0; i < halfHours; i++) {
            let displayHour
            if (startHour > 12) {displayHour = startHour - 12} else {displayHour = startHour}
            if (thirtyOpen === '0') {
                thirtyOpen = '00'
            }
            let ampmTrue


            let hH = `<div class="book-time" day-id="${this.id}" id="book-time-${i+1}">${displayHour}:${thirtyOpen} ${initialAmpm}</div>`
            bookHours.innerHTML = bookHours.innerHTML + hH
            if (thirtyOpen === '30') {
                thirtyOpen = '00'
                startHour += 1
                if (startHour >= 12) {
                    initialAmpm = 'pm'
                } else if (startHour <= 11) {
                    initialAmpm = 'am'
                }
            } else {
                thirtyOpen = '30'
            }
        
            // const item = document.getElementById(`book-time-${i+1}`)
            // item.addEventListener('click', function(e) {
                
            //     console.log('hi')
            //     item.classList.remove('.deselected')
            //     document.querySelector(".selected").classList.remove('selected')
            //     item.classList.add('.selected')
            // })
            
        }
        this.addEventListeners('hour')
        
    }
}

