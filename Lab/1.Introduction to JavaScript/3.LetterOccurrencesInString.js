function letterOccurrences(str, cha){
    let count = 0;
    for (let ch of str){
        if(ch == cha){
            count++;
        }
    }
    console.log(count)
}

letterOccurrences('hello','l');
letterOccurrences('panther','n');
