class Day{
    static all = []
    constructor({date, open_hour, close_hour, id}){
        this.date = date
        this.open_hour = open_hour
        this.close_hour = close_hour
        this.id = id
        this.element = document.createElement('div')
        this.element.id = `day-${this.id}`

        Day.all.push(this)
    }

    attachToDom(){
        const displayDay = document.getElementById('display-day')
        this.element.classList.add("each-day")
        this.element.innerHTML = `
            <h3 class="day-date">${this.date}</h3>
            <div class="day-edit-button" id="day-edit-button-${this.id}">edit</div>
            <div class="day-delete-button" id="day-delete-button-${this.id}">delete</div>`
        // displayDay.innerHTML = displayDay.innerHTML + this.element
        displayDay.append(this.element)
    }

    addEventListeners(){
        this.element.addEventListener('click', this.openForm)
    }

    openForm = (x) => {
        console.log(`hi from day-${this.id}`)
    }
}

 