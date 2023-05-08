var num1 = 20
var num2 = 70


function somarTudo(){
    var time1 = new Date()
    var time2 = new Date()

    time1.setHours(0)
    time1.setMinutes(20)
    time1.setSeconds(70)

    time2.setHours(0)
    time2.setMinutes(45)
    time2.setSeconds(30)

    var result = new Date()
    result.setHours(time1.getHours()+time2.getHours())
    result.setMinutes(time1.getMinutes()+time2.getMinutes())
    result.setSeconds(time1.getSeconds()+time2.getSeconds())

    if(result.getSeconds>59){
        result.setSeconds(result.getSeconds()-60)
        result.setMinutes(result.getMinutes()+1)
    }

    var hours = result.getHours()
    var minutes = result.getMinutes()
    var segundos = result.getSeconds()

    var timeString=(hours<10?"0"+hours:hours)+":"+(minutes<10?"0"+minutes:minutes)+":"+(segundos<10?"0"+segundos:segundos)
    console.log(timeString)
}