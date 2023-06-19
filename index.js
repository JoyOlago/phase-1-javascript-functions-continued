let activity;

function saturdayFun(activity = "roller-skate"){
        return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun(activity))


function mondayWork(activity = "go to the office"){
        return `This Monday, I will ${activity}.`
    }
    console.log(mondayWork())

    let initialization;
    let word;

    function wrapAdjective(initialization ='*'){
        return function(adjective = special) {
            return `You are ${initialization}${word}${initialization}!`
        }
    }
    console.log(wrapAdjective(initialization))
