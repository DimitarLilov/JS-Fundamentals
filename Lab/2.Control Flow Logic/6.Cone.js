function cone(radius, height) {
    let volume = Math.PI * radius * radius * height / 3;
    console.log("volume = " + volume);
    let s = Math.sqrt(radius * radius + height * height);
    let area  = Math.PI * radius * (radius + s);
    console.log("area = " + area);
}

cone(3, 5);
cone(3.3, 7.8);