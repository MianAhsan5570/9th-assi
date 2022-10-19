var students = {
    name: "Ahsan",
    Rollno: 200478,
    sclass: "BSCS"
};
console.log(students);
//2. Write a TypeScript program to get the length of a TypeScript object.  
var employ = {
    name: "Ahsan",
    Rollno: 200478,
    sclass: "BS"
};
var length = Object.keys(employ).length;
console.log(length);
var animal = {
    type: "dog",
    Rolno: 15,
    "class": "VIII"
};
delete animal.Rolno;
console.log(animal);
var library = [
    {
        author: "bill gates",
        title: "the road a head",
        readingstatus: true
    },
    {
        author: "elon musk",
        title: "civics",
        readingstatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingstatus: false
    },
];
console.log(library[0]);
//5. Write a Bubble Sort algorithm in TypeScript. 
var arr = [1, 3, 7, 2, 5, -2];
var sort = arr.sort();
console.log(sort);
//end
//6. Write a TypeScript program which returns a subset of a string.  
var str = "dog";
for (var i = 0; i <= str.length; i++) {
    console.log(str.substring(i));
}
//7. Write a TypeScript program to create a Clock.
var clock = new Date();
var hour = clock.getHours();
var minuite = clock.getMinutes();
var seconds = clock.getSeconds();
console.log(hour, ":", minuite, ":", seconds);
var institute = [
    {
        title: 'The Road Ahead',
        authors: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        authors: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        authors: 'Suzanne Collins',
        libraryID: 3245
    }
];
institute.sort(function (s1, s2) { return s1.libraryID - s2.libraryID; });
console.log(institute);
//9.  Write a TypeScript function to print all the methods in an TypeScript object.
function all_properties(obj) {
    return Object.getOwnPropertyNames(obj);
}
console.log(all_properties(Math));
//10. Write a TypeScript function to parse an URL. 
var url = new URL("https://github.com/techloset/mad-batch1/blob/master/Assignments/assignment09/assignment09Programs.txt");
console.log(url.host);
//11. Write a TypeScript function to retrieve all the names of object's own and inherited properties.
function Student(name) {
    this.name = name;
    var b = new Student("ali");
    console.log(b);
}
//Student.prototype.rollno = true;
//12. Write a TypeScript function to convert an object into a list of `[key, value]` pairs. 
var obj1 = {
    "1": 5,
    "2": 56,
    "3": 100
};
var result = Object.keys(obj1);
console.log(result);
;
var hero = {
    work: "programing"
};
console.log(hero.hasOwnProperty('work'));
var exampleObject1 = [{
        language: "C++",
        designedby: "Bjarne Stroustrup",
        year: "1979"
    }];
var tilo = exampleObject1.map(function (x) { return x.language; });
console.log(tilo);
