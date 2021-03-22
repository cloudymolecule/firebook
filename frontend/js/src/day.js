class Day{
    static all = []
    
    constructor({date, open_hour, close_hour}){
        this.date = date
        this.open_hour = open_hour
        this.close_hour = close_hour

        Day.all.push(this)
    }
    
}