class DaysAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/days'
    }
    fetchDays(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then()
    }
}