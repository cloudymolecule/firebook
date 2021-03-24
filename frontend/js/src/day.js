class Day{
    static all = []
    constructor({date, open_hour, close_hour, barbers}){
        this.date = date
        this.open_hour = open_hour
        this.close_hour = close_hour
        this.barbers = barbers

        Day.all.push(this)
    }

    attachToDom(){
        displayDay.innerHTML = displayDay.innerHTML + `
        <div>${this.date}</div>
        `
        
    }
}

const displayDay = document.getElementById('display-day')   