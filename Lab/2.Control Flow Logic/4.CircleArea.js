function circleArea(radius) {
    let area = Math.PI * radius * radius;
    console.log(area)
    let areaRound = Math.round(area * 100) /100;
    console.log(areaRound);
}

circleArea(5);