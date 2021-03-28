class Appointment{
    static All = []
    constructor({time, client, barber}){
        this.time = time
        this.client = client
        this.barber = barber

        Appointment.All.push(this)
    }
}