
let login = document.getElementById("log-me-in-form");
let signup = document.getElementById("sign-me-in-form");
let mainPage = document.getElementById("landing-page");
const backLogin = document.getElementById("back-to-login");
const loginBtn = document.getElementById("login-btn");
let logout = document.getElementById("logout");
let moveSlide = document.querySelectorAll(".books");
let mainMove = document.querySelector(".main-row");
let pic = document.getElementById("firstPic");
let email = document.getElementById("email");
let password = document.getElementById("password")
let user = document.getElementById("user-name")
let ppic = document.querySelector("#userProfile")
let uploadedpic = "";
let newUser = document.getElementById("email-signup");
let newPassword = document.getElementById("password-first")
let confirmPassword = document.getElementById("password-signup")


let userCredentials = [
    {
        name: 'donald',
        email: 'donaldbossd@gmail.com',
        password: '123456',
        picPath: 'images/profile.jpg'
    },
    {
        name: 'precious',
        email: 'precious04@gamil.com',
        password: '1234567',
        picPath: 'images/profile.jpg'
    }
]

function createAcc(){
    
    mainPage.style.display = "none";
    login.style.display = "none"
    signup.style.display = "block"
    
}

function backb(){

   
    signup.style.display = "none";
    mainPage.style.display = "none";
    login.style.display = "block";
    
}


backLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    backb()
})


function landingP(){
    

    if(email.value && password.value){
        let username = email.value
        let passcode = password.value
        for(let i = 0; i< userCredentials.length; i++){
            if(userCredentials[i].email == username && userCredentials[i].password == passcode){
                user.textContent = userCredentials[i].name
                picture.src = userCredentials[i].picPath;
                signup.style.display = "none";
                mainPage.style.display = "flex";
                login.style.display = "none";
            }else if(userCredentials[i].email == username&&userCredentials[i].password != passcode){
                alert("enter the correct password")
                i = userCredentials.length;
            }else if(userCredentials[i].email != username&&userCredentials[i].password != passcode){
                alert("the the username does not exist, please sign in instead")
                i = userCredentials.length;
            }
        }
        
    }else{
        alert("please enter correct credentials")
    }
}

logout.addEventListener("click", (e)=>{
            e.preventDefault()

            signup.style.display = "none";
            mainPage.style.display = "none";
            login.style.display = "block";
            
            
        })


        // sign up logic

        let nameholder = document.getElementById("name");
        let file = document.getElementById("userProfile")

        function signupPath(){
        let newName = nameholder.value
        let  userNew = newUser.value
        let  passwordNew = newPassword.value
        let  repassword = confirmPassword.value

        console.log()

        for(let i = 0;i<userCredentials.length;i++){
            if(userNew.trim() == userCredentials[i].email.trim()){
                alert("the user already exist, sign in instead!!")
                i = userCredentials.length;
            }else if(newName && userNew && passwordNew && repassword){

                if(passwordNew === repassword){
                user.textContent = newName
                    let newcredentials = {
                        name: newName,
                        email: userNew,
                        password: passwordNew,
                        picPath: uploadedpic
                    }
    
                    userCredentials.push(newcredentials);
                    
                
                    signup.style.display = "none";
                    mainPage.style.display = "none";
                    login.style.display = "block";
                }else{
                    alert("password dont match")
                }
            }else{
                alert("please fill all text")
            }
    
        }
        
        
  
}
let picture = document.getElementById("loded")

ppic.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        uploadedpic = reader.result;
    });
    reader.readAsDataURL(this.files[0]);
})


// adding images and deatils from the array

let bookDetails = [
    {
        location : 'images/bookcover.jfif',
        title : 'THE LAST FOUR THINGS',
        pageNum : '253',
        numChapters : '16',
        status : 'last read'
    },
    {
        location : 'images/bookcover2.jfif',
        title : 'WHITE OUT',
        pageNum : '153',
        numChapters : '13',
        status : 'last read'
    },
    {
        location : 'images/bookcover3.jpg',
        title : 'WHAT SHE DOESNT KNOW',
        pageNum : '153',
        numChapters : '13',
        status : 'last read'
    },
    {
        location : 'images/bookcover3.jpg',
        title : 'NOTHING BUT THE TRUTH',
        pageNum : '153',
        numChapters : '13',
        status : 'last read'
    },
     {
        location : 'images/bookcover3.jpg',
        title : 'THE SOFT VOICE OF THE SEAPERNT ',
        pageNum : '153',
        numChapters : '13',
        status : 'last read'
    },
    {
        location : 'images/bookcover.jfif',
        title : 'LET THE NATURE SETTLE THE SCORE',
        pageNum : '253',
        numChapters : '16',
        status : 'last read'
    },
    {
    location : 'images/bookcover.jfif',
    title : 'THE LAST FOUR THINGS',
    pageNum : '253',
    numChapters : '16',
    status : 'last read'
},
{
    location : 'images/bookcover3.jpg',
    title : 'WHAT SHE DOESNT KNOW',
    pageNum : '153',
    numChapters : '13',
    status : 'last read'
}
    
]

const mainReadSection = document.getElementById("read-books-section");
let mainRow = document.createElement("div")
mainRow.classList.add('main-row')
// let bigRow = document.createElement("div")
 let bigRow = document.getElementById("scroll")

bookDetails.forEach((items)=>{
    let books = document.createElement("div")
    books.classList.add('books')
    let bookcoverContainer = document.createElement("div")
    bookcoverContainer.classList.add('pic');
    let bookcover = document.createElement("img")
    bookcover.classList.add('book-cover')
    bookcover.src= items.location
   bookcoverContainer.appendChild(bookcover)

    let row = document.createElement("div")
    row.classList.add('book-description')
    let bhead = document.createElement("p")
    bhead.classList.add('book-title')
    bhead.append(document.createTextNode(items.title))
    

    let subRow = document.createElement("div")
    subRow.classList.add('row')

    let pageNum = document.createElement("p")
    pageNum.classList.add('pages')
    pageNum.textContent = items.pageNum;
    let extendText = document.createElement("span")
    extendText.classList.add('pg')
    extendText.textContent = " pages"
    
    pageNum.append(extendText)

    let chapterNum = document.createElement("p")
    chapterNum.classList.add('chapters')
    chapterNum.textContent = items.numChapters;
    let extendChapText = document.createElement("span")
    extendChapText.classList.add('chapt')
    extendChapText.textContent = " chapters"

    chapterNum.append(extendChapText)

    let bookStatus = document.createElement("p")
    bookStatus.classList.add("status")
    bookStatus.textContent = items.status

    subRow.append(pageNum, chapterNum, bookStatus)
    row.append(bhead, subRow)
    books.append(bookcoverContainer, row)

    mainRow.append(books)


    let bookSearch = document.getElementById("searchBooks");

    
    bookSearch.addEventListener("keyup",()=>{
        let text = "";
        
        text = bookSearch.value;

        let bookTitle =  items.title;

        if(bookTitle.toLowerCase().indexOf(text.toLowerCase()) == -1){
           books.classList.add("dontDisplay")
        }else{
            books.classList.remove("dontDisplay")
        }
    

})

   
})
// mainRow.style.transform = 'translateX(600px)'
bigRow.append(mainRow)
mainReadSection.append(bigRow)

// bigRow.append(mainRow)
// bigRow.classList.add('scrollClass')
//     console.log(bigRow);

let nextbtn = document.getElementById("nextCard")
let prevbtn = document.getElementById("prevCard")
let x= 4;
let shiftSize = 305 + bookDetails.length*10
let counter = 0
z = (bookDetails.length) - 4
prevbtn.style.display = "none"
nextbtn.addEventListener("click", ()=>{
    
    if(counter == z){
        
    }else{
        counter++
        x--
    
    }
    
    mainRow.style.transition = "transform 0.4s ease-in-out"
    mainRow.style.transform = 'translateX(' + (-shiftSize * counter) + 'px)' 


    if(counter == z){
        nextbtn.style.display = "none"
    }else{
        nextbtn.style.display = "unset"
    }

    if(x == 4){
        prevbtn.style.display = "none"
    }else{
        prevbtn.style.display = "unset"
    }
})

prevbtn.addEventListener("click", ()=>{
    if(x == 4){
        counter = 0
    }else{
        counter--
        x++
    }
    mainRow.style.transition = "transform 0.4s ease-in-out"
    mainRow.style.transform = 'translateX(' + (-shiftSize * counter) + 'px)'

    if(counter == z){
        nextbtn.style.display = "none"
    }else{
        nextbtn.style.display = "unset"
    }
    
    if(x == 4){
        prevbtn.style.display = "none"
    }else{
        prevbtn.style.display = "unset"
    }
})

let image= Array.from(document.getElementsByTagName("img"))

image.forEach((imag)=>{
  imag.addEventListener("dragstart",(e)=>{
    e.preventDefault()
  })
})

let forgetPassword = document.getElementById("forgetPassword");

forgetPassword.addEventListener("click", ()=>{
    let clint = email.value

    for(let i = 0;i<userCredentials.length;i++){
        if(userCredentials[i].email.toLowerCase() === clint.toLowerCase()){
           let passwordText = document.getElementById("input-password")
           passwordText.textContent = "enter a new password";

            console.log(userCredentials)


           i = userCredentials.length 
        }else if(clint == ""){
            alert("enter the username, to retrive a password for!!!")
            i = userCredentials.length
        }
    }
})


