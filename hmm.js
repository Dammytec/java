// objective - countup from 0 - 100
let limit = 100

for(let counter = 0; counter <= limit; counter++){
    console.log(counter);
}


// objection - countdown from 100 - 0
let base_limit = 0

for(let counter = 100; counter >= base_limit; counter--){
    console.log(counter);
}


let counter = 100;


// array - data type - reference data type
// array act as a temporary database 
// store all types of data base -
  let array = Array (); 
    //  array constuctor 
    let array1 = [
        "string", 
        2000, [1, 2, 3, 4],
        { name: 'kenny', color: 'black' },
        true
    ];
    
    // array literal
    const users = [
        {
            username : 'bolaji sumaru',
            email : 'bolaji@gmail.com',
            password : 'IAmGay',
            address : 'yaba left',
            phoneNumber : '089990977773'
        },
        {
            username : 'roheem',
            email : 'bolaji@gmail.com',
            password : 'IAmGay',
            address : 'yaba left',
            phoneNumber : '089990977773'
        },
        {
            username : ' sumaru',
            email : 'bolaji@gmail.com',
            password : 'IAmGay',
            address : 'yaba left',
            phoneNumber : null
        }
    ];
     let array_limit = '';
     for(let i = 0; i < users.length; i++){
        console.log(users[i].username);
     }



     const companies= [
        {name: "Company One", category: "Finance", start: 1981, end: 2004},
        {name: "Company Two", category: "Retail", start: 1992, end: 2008},
        {name: "Company Three", category: "Auto", start: 1999, end: 2007},
        {name: "Company Four", category: "Retail", start: 1989, end: 2010},
        {name: "Company Five", category: "Technology", start: 2009, end: 2014},
        {name: "Company Six", category: "Finance", start: 1987, end: 2010},
        {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
        {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
        {name: "Company Nine", category: "Retail", start: 1981, end: 1989}


         


     ];

        
      for (let index = 0; index < companies.length; index++) {
        // console.log(companies[index].name, companies[index].category, companies[index].start);

    //   only print out the names of companies with the category of finance
       
    const year = 10

   if (companies[index].category === 'Finance'){
    // console.log(companies[index].name)
   }


   


   if (companies[index].end && companies[index].start >10 ){
    //    console.log(companies[index].end - companies[index].start)
   }else{
    // console.log(companies[index].end - companies[index].start)
   }


   if ( companies[index].start < 2000) {
    //  console.log(companies[index].start)
   }


   if(companies[index].start > 2000){
    // console.log(companies[index].start)

   }
    
 

//    companies that lasted for ten years or more than ten years
   

}

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]
// only print out the numbers with zero reminder when divided by 2 


var  make = 2
