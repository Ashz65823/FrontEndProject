function Student(r, n, m1, m2, m3) {
    this.rollNo = r;
    this.name = n;
    this.mark1 = m1;
    this.mark2 = m2;
    this.mark3 = m3;

    this.computeTotalMarks = () => this.mark1 + this.mark2 + this.mark3;
    this.computeAverage = () => this.computeTotalMarks() / 3;
}
var stud1 = new Student(1, "Swetha", 50, 70, 80);
console.log(stud1.computeTotalMarks());
console.log(stud1.computeAverage());