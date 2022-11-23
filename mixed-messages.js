function motivationalMessages(){
    let messages = ['A', 'B', 'C', 'D', 'E'];
    let i = Math.floor(Math.random()*messages.length);
    let randomMessage = messages[i];
    return randomMessage;
}
console.log(motivationalMessages())
