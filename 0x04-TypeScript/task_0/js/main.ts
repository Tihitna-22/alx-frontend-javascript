interface Student{
    firstName: string;
    lastName:string;
    age:number;
    location:string;
}
const student1: Student = {
    firstName : "tihitna",
    lastName: "sisay",
    age:27,
    location:"addis",
}
const student2: Student = {
    firstName : "Abdi",
    lastName: "Gemechu",
    age:20,
    location:"addis",
}
const studentsList = [student1, student2]

var table = document.createElement('table');
    document.body.appendChild(table);
    
        var tr1 = document.createElement('tr'); //Create 3 <tr> elements assigned to a unique variable BUT need a working alternative for 'tr[i]'
        tr1.innerHTML = studentsList[0].firstName
        table.appendChild(tr1); // Append to <table> node

        
