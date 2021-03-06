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

    static addFormButtons() {
        const addDayButton = document.getElementById('add-day-button')
        const createEditButton = document.getElementById('create-edit-button')
        const displayHour = document.getElementById('display-hour')
        const welcome = document.getElementById('welcome')
        const createEditDay = document.getElementById('create-edit-day')
        const bookAppt = document.getElementById('book-appt')
        const createEditButtonId = document.getElementById('create-edit-button-id')
        
        addDayButton.addEventListener('click', () => {
            displayHour.innerHTML = ""
            createEditButton.innerText = 'Create'
            createEditDay.reset()
            welcome.style.display = 'none'        
            bookAppt.style.display = 'none'
            createEditDay.style.display = 'grid'
        })
        createEditButton.addEventListener('click', () => {
            if (createEditButton.innerText === 'Create') {
                daysAdapter.fetchPostDays()
            } else {
                daysAdapter.fetchPatchDay(createEditButtonId.value)
            }
        })
    }

    attachToDom(){
        const displayDay = document.getElementById('display-day')
        this.element.classList.add("each-day")
        this.element.innerHTML = `
            <input type="hidden" id="day-id" value="${this.id}">
            <p class="day-date" id="day-date-${this.id}">${this.month} ${this.num_day}, ${this.year}</p>
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
            
            const selDays = document.getElementsByClassName('each-day')
            Array.from(selDays).forEach((el) => {
                el.addEventListener('click', this.selectDay)
            })
        }
        if (type === 'hour') {
            let halfTimes = document.querySelectorAll('.book-time')

            halfTimes.forEach(ht => {
                Appointment.All.forEach(appt => {
                    if (ht.innerText === appt.time) {
                        ht.classList.remove('book-time')
                        ht.classList.add('turn-orange')
                    }
                })
            })
        
            const halfHours = document.getElementsByClassName('book-time')
            const halfHours2 = document.getElementsByClassName('turn-orange')
            Array.from(halfHours).forEach((el) => {
                el.addEventListener('click', this.selectHalfHour)
                
            })
            Array.from(halfHours2).forEach((el) => {
                el.addEventListener('click', this.selectHalfHour)
                
            })
        }
    }

    selectDay(){
        let selectedElements = document.getElementsByClassName('selected-day')
        if (selectedElements) {
            Array.from(selectedElements).forEach((el) => {
                el.classList.remove('selected-day')
            })
        }
        this.classList.add('selected-day')
    }

    selectHalfHour(){
        const apptSaveUpdate = document.getElementById('appt-save-update')
        apptSaveUpdate.innerText = 'Save'
        let selectedElements = document.getElementsByClassName('selected-time')
        if (selectedElements) {
            Array.from(selectedElements).forEach((el) => {
                el.classList.remove('selected-time')
                
            })
        }
        this.classList.add('selected-time')
        Appointment.displayHalfHours(this.innerText)
    }
    apptDay = () => {
        const welcome = document.getElementById('welcome')
        const createEditDay = document.getElementById('create-edit-day')
        const bookAppt = document.getElementById('book-appt')
        const displayHour = document.getElementById('display-hour')
        const bookBarber = document.getElementById('book-barber')
        const bookClient = document.getElementById('book-client')
        const apptSaveUpdate = document.getElementById('appt-save-update')
        bookBarber.value = ""
        bookClient.value = ""
        apptSaveUpdate.innerText = 'Save'
        displayHour.innerHTML = ""
        welcome.style.display = 'none'
        createEditDay.style.display = 'none'
        bookAppt.style.display = 'grid'
        this.createAndAppendHalfHourDivs()
        Appointment.All = []
        daysAdapter.fetchDay(this.id)
    }

    openEditDay = () => {
        const welcome = document.getElementById('welcome')
        const createEditButton = document.getElementById('create-edit-button')
        const dayEditButton = document.getElementById(`day-edit-button-${this.id}`)
        if (dayEditButton.innerText !== 'Confirm') {
            const displayHour = document.getElementById('display-hour')
            const createEditDay = document.getElementById('create-edit-day')
            const bookAppt = document.getElementById('book-appt')
            const createEditButtonId = document.getElementById('create-edit-button-id')
            
            createEditButtonId.value = this.id
            displayHour.innerHTML = ""
            let specificDay = Day.getDayById(this.id)
            createEditButtonId.value = this.id
            welcome.style.display = 'none'
            bookAppt.style.display = 'none'
            createEditDay.style.display = 'grid'
            
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
    }

    deleteDay = () => {
        const displayHour = document.getElementById('display-hour')
        const bookAppt = document.getElementById('book-appt')
        const dayEditButton = document.getElementById(`day-edit-button-${this.id}`)
        const deleteButton = document.getElementById(`day-delete-button-${this.id}`)
        
        if (deleteButton.innerText === 'YES') {
            daysAdapter.deleteDay(this.id)
            displayHour.style.display =  'none'
            bookAppt.style.display = 'none'
        }
        dayEditButton.innerText = 'Confirm'
        deleteButton.innerText = 'YES'
        setTimeout(() => {
            dayEditButton.innerText = 'edit'
            deleteButton.innerText = 'delete'
        }, 3000)
    }

    static getDayById(id){
        return Day.all.find(day => day.id == id)
    }

    deconvertFrom24Hours(hour, ampm){
        let res
        if (ampm === 'PM') {
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
        if ((this.close_hour - this.open_hour) >= 11) {halfHours = halfHours * 2 + 2}

        let thirtyOpen = (this.open_minutes).toString()
        if (thirtyOpen === '0') {thirtyOpen = '00'}
        
        let thirtyClose = (this.close_minutes).toString()
        if (thirtyClose === '0') {thirtyClose = '00'}
        
        let initialAmpm = this.open_ampm

        if (this.open_minutes === 30 && this.close_minutes === 0) {halfHours -= 1}
        if (this.close_minutes === 30 && this.open_minutes === 0) {halfHours += 1}

        let startHour = this.open_hour
        if (startHour > 12) {startHour -= 12}
        
        for (let i = 0; i < halfHours; i++) {
            let displayHour
            displayHour = startHour
            
            if (startHour === 24) {startHour = 12}
            if (displayHour >= 12) {displayHour -= 12}
            if (displayHour === 0) {
                displayHour = 12
            }

            let hH = `<div class="book-time" id="book-time-${i+1}">${displayHour}:${thirtyOpen} ${initialAmpm}</div>`
            bookHours.innerHTML = bookHours.innerHTML + hH

            if (thirtyOpen === '30') {
                thirtyOpen = '00'
                startHour += 1
                if (displayHour === 11 && initialAmpm === 'AM') {
                    initialAmpm = 'PM'
                } else if (displayHour === 11 && initialAmpm === 'PM') {
                    initialAmpm = 'AM'
                }
            } else {
                thirtyOpen = '30'
            }            
        }
        this.addEventListeners('hour')
    }
}