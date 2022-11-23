function motivationalMessages(){
    let part1 = ['A ', 'This ', 'Going for a '];
     let part2 = ['run ', '5k ', 'speed run '];
      let part3 = ['will make your day!', 'will pump you up for the day!', 'will wake you up for sure!'];
    let i = Math.floor(Math.random()*part1.length);
        let j = Math.floor(Math.random()*part2.length);
    let k = Math.floor(Math.random()*part3.length);

    let randomMessage = part1[i] + part2[j] + part3[k];
    return randomMessage;
}
console.log(motivationalMessages())
