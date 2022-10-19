//1. Write a TypeScript program to list the properties of a TypeScript object
type a ={
    name:string
    Rollno:number
    sclass:string
}
var students:a = {
    name: "Ahsan",
    Rollno: 200478,
    sclass: "BSCS",
}
console.log(students);

//2. Write a TypeScript program to get the length of a TypeScript object.  
var employ:a = {
    name: "Ahsan",
    Rollno: 200478,
    sclass: "BS",
}
var length = Object.keys(employ).length;
console.log(length);

//3. Write a TypeScript program to delete the rollno property from the following object.
interface type {
    type: string;
    Rolno?: number;
    class: string;
}
var animal:type ={
    type: "dog",
    Rolno: 15,
    class: "VIII",
};
delete animal.Rolno
console.log(animal);

//4. Write a TypeScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
interface z {
    author:string,
    title:string,
    readingstatus:boolean,
}
var library:z[] =[
    {
    author:"bill gates",
    title:"the road a head",
    readingstatus:true,
},
{
    author:"elon musk",
    title:"civics",
    readingstatus:true,
},
{
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games', 
    readingstatus: false,
},
];
console.log(library[0]);

//5. Write a Bubble Sort algorithm in TypeScript. 
var arr:number[] = [1,3,7,2,5,-2];
var sort:number[] = arr.sort();
console.log(sort);
//end
//6. Write a TypeScript program which returns a subset of a string.  
var str:string = "dog";
for(var i=0; i<=str.length;i++){
   console.log(str.substring(i));
}

//7. Write a TypeScript program to create a Clock.
var clock:Date = new Date();
var hour = clock.getHours();
var minuite = clock.getMinutes();
var seconds = clock.getSeconds();
console.log(hour,":",minuite,":",seconds);

//8. Write a TypeScript program to sort an array of TypeScript objects. 
interface k {
    title: string;
    authors:string;
    libraryID:number;
}
var institute:k[] = [ 
    {
        title:  'The Road Ahead',
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
    }];
    institute.sort((s1, s2)=>s1.libraryID - s2.libraryID);
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
    function Student(name:string):void {
        this.name = name;
        var b = new Student("ali");
        console.log(b);
      }
      //Student.prototype.rollno = true;
    //12. Write a TypeScript function to convert an object into a list of `[key, value]` pairs. 

    
    var obj1 = {
        "1":5,
        "2":56,
        "3":100,
    }
    var result = Object.keys(obj1);
    console.log(result);
    
    //13. Write a TypeScript function to check whether an object contains given property.
    interface h {
        work: string;
    };
    var hero:h = {
        work: "programing",
    };
    console.log(hero.hasOwnProperty('work'));
    //14. Write a TypeScript function to retrieve all the values of an object's properties.
    interface eo {
        language:string;
        designedby:string;
        year:string;
    } 
    var exampleObject1 = [{
        language: "C++",
        designedby: "Bjarne Stroustrup",
        year: "1979"
      }];
    var tilo = exampleObject1.map(x =>x.language);
    console.log(tilo);
