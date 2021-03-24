class Day{
    static all = []
    constructor({date, open_hour, close_hour}){
        this.date = date
        this.open_hour = open_hour
        this.close_hour = close_hour

        Day.all.push(this)
    }

    attachToDom(){
        displayDay.innerHTML = displayDay.innerHTML + `
        <div class="each-day">
            <h3 class="day-date">${this.date}</h3>
            <div class="day-edit-button">edit</div>
            <div class="day-delete-button">delete</div>
        </div>`
        
    }
}

const displayDay = document.getElementById('display-day')   