// ! -------------------------WAY-1---------------------
// * WAP to are You Eligible to vote ?
function isEligibleForVote(age){
    const min_age=18

    if(age > min_age) return "you are ✅✅✅ Eligible for Vote"
    else
        return "you are❌❌❌ NOT❌❌❌ Eligible for Vote"

}
console.log( isEligibleForVote(10));

// ! -------------------------WAY-2---------------------

function Vote(age){
    if(age > 18) return true
    return false
}
console.log(Vote(19));

// * WAP to You are  eligible for Driving  ?
function drive(age){
    const min_driving_age = 16;

    if(age>min_driving_age) return "You are ✅ Eligible for driving"
    else
    return "you are ❌🔞Not🔞❌ Eligible for Driving"


}
console.log(drive(17));



