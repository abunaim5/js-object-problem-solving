// Display the physics marks as output
const student = {
    name: "Hamim Skaep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        mark: 30,
    }
};
// console.log(student);
// console.log(student.physics.mark);
const phyMark = student.physics['mark'];
console.log(phyMark);