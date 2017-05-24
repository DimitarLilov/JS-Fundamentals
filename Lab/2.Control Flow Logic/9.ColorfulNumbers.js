function colorfulNumbers(number) {
    let html = "<ul>\n";
    for (var i = 0; i < number; i++) {
        if(i % 2 == 0){
            html += "   <li><span style='color:green'>" + (i+1) +"</span></li>\n";
        }
        else{
            html += "   <li><span style='color:blue'>" + (i+1) +"</span></li>\n";
        }
    }
    html += "</ul>\n";
    console.log(html);
}

colorfulNumbers(10);