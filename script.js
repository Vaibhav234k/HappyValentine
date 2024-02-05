const gif = document.getElementById("gif");
const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var Name = urlParams.get("name");
if(Name==null){
    Name = "Babe"
}

question.innerHTML = Name + ", will you be my valentine?"

let NoCount = 0;

function onNo(){
    NoCount = NoCount + 1;
    switch (NoCount) {
        case 1:
            gif.src = "/why.gif"
            yesBtn.classList.remove("w-12")
            yesBtn.classList.remove("h-10")
            yesBtn.classList.remove("text-xl")
            yesBtn.classList.add("w-14")
            yesBtn.classList.add("h-12")
            yesBtn.classList.add("text-2xl")
            noBtn.classList.remove("w-12")
            noBtn.classList.remove("h-10")
            noBtn.classList.remove("text-xl")
            noBtn.classList.add("w-10")
            noBtn.classList.add("h-9")
            noBtn.classList.add("text-lg")
            break;
        case 2:
            gif.src = "/on no.gif"
            yesBtn.classList.remove("w-14")
            yesBtn.classList.remove("h-12")
            yesBtn.classList.remove("text-2xl")
            yesBtn.classList.add("w-16")
            yesBtn.classList.add("h-14")
            yesBtn.classList.add("text-3xl")
            noBtn.classList.remove("w-10")
            noBtn.classList.remove("h-9")
            noBtn.classList.remove("text-lg")
            noBtn.classList.add("w-9")
            noBtn.classList.add("h-8")
            noBtn.classList.add("text-md")
            break;
        case 3:
            gif.src = "/no.gif"
            yesBtn.classList.remove("w-16")
            yesBtn.classList.remove("h-14")
            yesBtn.classList.remove("text-3xl")
            yesBtn.classList.add("w-20")
            yesBtn.classList.add("h-16")
            yesBtn.classList.add("text-4xl")
            noBtn.classList.remove("w-9")
            noBtn.classList.remove("h-8")
            noBtn.classList.remove("text-md")
            noBtn.classList.add("w-8")
            noBtn.classList.add("h-7")
            noBtn.classList.add("text-sm")
            break;
        case 4:
            gif.src = "/on nono.gif"
            yesBtn.classList.remove("w-20")
            yesBtn.classList.remove("h-16")
            yesBtn.classList.remove("text-4xl")
            yesBtn.classList.add("w-24")
            yesBtn.classList.add("h-20")
            yesBtn.classList.add("text-5xl")
            noBtn.classList.remove("w-8")
            noBtn.classList.remove("h-7")
            noBtn.classList.remove("text-sm")
            noBtn.classList.add("w-7")
            noBtn.classList.add("h-6")
            noBtn.classList.add("text-xs")
            break;
        case 5:
            gif.src = "/on nonono.gif"
            yesBtn.classList.remove("w-24")
            yesBtn.classList.remove("h-20")
            yesBtn.classList.remove("text-5xl")
            yesBtn.classList.add("w-28")
            yesBtn.classList.add("h-24")
            yesBtn.classList.add("text-6xl")
            noBtn.hidden = true
            break;
        default:
            break;
    }
    console.log(NoCount);
}