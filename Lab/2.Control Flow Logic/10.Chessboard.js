function chessboard(size) {
    let html = '<div class="chessboard">\n';
    for (var row = 0; row < size; row++) {
        html += "   <div>\n";
        let color = (row % 2 ==0) ? "black" : "white";
        for (var col = 0; col < size; col++) {
            html += `    <span class="${color}"></span>\n`;
            color = (color == "white") ? "black" : "white";
        }
        html += "   </div>\n"
    }
    html += "</div>";
    console.log(html);
}

chessboard(3);