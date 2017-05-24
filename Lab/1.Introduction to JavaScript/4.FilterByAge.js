function filterByAge(minAge, firstPersonName, firstPersonAge, SecondPersonName, SecondPersonAge){
    let person1 = {name:firstPersonName, age:firstPersonAge};
    let person2 = {name:SecondPersonName, age:SecondPersonAge};
    if(person1.age >= minAge) {
        console.log(person1);
    }
    if(person2.age >= minAge) {
        console.log(person2);
    }
}

filterByAge(12, "Ivan", 15, "Asen", 9);