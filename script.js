
let alertNoteE = document.getElementById("alertNote");
let textareaGridE = document.getElementById("textareaGrid");
let wcGoalE = document.getElementById("wcGoal");
let workTitleE = document.getElementById("workTitle");
let titleInputE = document.getElementById("titleInput");
let hideBtnE = document.getElementById("hideBtn");
let monmonE = document.getElementById("animation");
let writingE = document.getElementById("writing");
let wPercentE = document.getElementById("word-percent");
let wSize = document.getElementById("letterSizeInput");
let wWeight = document.getElementById("letterWeightInput");
let enterBtnE = document.getElementById("enterBtn");


const frames = document.getElementById("animation").children;
const frameCount = frames.length;


// function fontSize() {
//     if (wSize > 1){
//         fSize.style.fontSize = wSize.value + 'px';
//     }
// }

// function myFunction(selectTag) {
//     var listValue = selectTag.options[selectTag.selectedIndex].text;
//     fSize.style.fontSize = listValue;
// }

function countWords(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    return s.split(/\s+/).filter(String).length; // split excludes spaces and multiple lines
}

let x = 1;

function animationCycle(a){
    frames[2].style.display = "none";
    if(a > 1){
        a = 0;
        frames[ a + 1 ].style.display = "none";
        frames[a].style.display = "block";
    } 
    else{
        frames[ a - 1 ].style.display = "none";
        frames[a].style.display = "block";
    }
    x++;
    if (x > 2){
        x = 1;
    }

}

function animationSleep(){
    frames[0].style.display = "none";
    frames[1].style.display = "none";
    frames[2].style.display = "block";
}

const myTimeOut = setTimeout(animationSleep(), 5000);

// function stopFunction(){
//     clearTimeout(myTimeOut);
// }


/////////////////////////////////

wSize.addEventListener('input', async () => {    
    if ((wSize.value >= 12) && (wSize.value <= 80)){
        writingE.style.fontSize = wSize.value + 'px';
    }
})

// wWeight.addEventListener('input', async () => {    
//     if ((wWeight.value >= 200) && (wWeight.value <= 1000)){
//         writingE.style.fontWeight = wWeight.value;
//     }
// })

wWeight.addEventListener('input', async () => {    
    if (wWeight.value == 'light'){
        writingE.style.fontWeight = 300;
    }else if (wWeight.value == 'bold'){
        writingE.style.fontWeight = 600;
    }else if (wWeight.value == 'bolder'){
        writingE.style.fontWeight = 900;
    }
})



writingE.addEventListener('keydown', async () => {
    animationCycle(x);    
})

textareaGridE.addEventListener('mouseleave', async () => {
    animationSleep();   
})

monmonE.addEventListener('mouseleave', async () => {
    animationSleep();   
})

monmonE.addEventListener('click', async () => {    
    animationCycle(x);
})


// monmonE.addEventListener('mouseover', async () => {

//     frames[0].style.display = "block";
//     frames[1].style.display = "none";
//     frames[2].style.display = "none";

//     // const frames = document.getElementById("animation").children;
//     // const frameCount = frames.length;
//     // let i = 0;
//     // setInterval(function () { 
//     //     frames[i % frameCount].style.display = "none";
//     //     frames[++i % frameCount].style.display = "block";
//     // }, 300);
// })

// monmonE.addEventListener('mouseout', async () => {
//     animationSleep();  
// })

    

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Light Pink' : 'Dark Lavander'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'System'
})

document.getElementById('quit').addEventListener('click', async () => {
    window.opener = self;
    window.close();
})

writingE.addEventListener('keyup', async () => {

    document.getElementById('word-number').innerHTML = countWords(writingE.value);          

    if (wcGoalE.value > 0) {
        
        let percentage = Math.round((countWords(writingE.value) / wcGoalE.value) * 100);
        if (hideBtnE.style.display == 'none'){
            document.getElementById('word-percent').innerHTML= percentage + '%';
        }

        if ((event.code === 'Space') || (event.key === '.')){
            if ( countWords(writingE.value) == wcGoalE.value){
                // alert("Writing goal met!");
                alertNoteE.style.display = 'block';
                textareaGridE.style.border = '3px solid #07faa1';
                if (hideBtnE.style.display == 'none'&& wcGoalE.style.display == 'none'&& document.getElementById("lblGoal").style.display == 'none'){                    
                    hideBtnE.style.display = 'inline-block';
                    wcGoalE.style.display = 'inline-block';
                    document.getElementById("lblGoal").style.display = 'inline-block';    
                }
            }
        } 

        if ( (wcGoalE.style.background !== '#04AA6D') && (countWords(writingE.value) >= wcGoalE.value)) {
            wcGoalE.style.background = '#04AA6D';
        }
        else if ((wcGoalE.style.background === '#04AA6D') && (countWords(writingE.value) < wcGoalE.value)) {
            wcGoalE.style.background = 'red';
        }
    }
})

document.getElementById("copyBtn").addEventListener('click', async () => {
    navigator.clipboard.writeText(writingE.value);
})

let savedTitle = workTitleE.textContent;

workTitleE.addEventListener('click', async () => {

    workTitleE.style.display = 'none';
    titleInputE.style.display = 'inline-block';
    if (workTitleE.textContent != ""){
        titleInputE.value = "";
    }
})

titleInputE.addEventListener('keyup', async () => {
    if (event.key === 'Enter'){       
        //alert(document.getElementById("workTitle").textContent) 
        workTitleE.textContent = titleInputE.value;
        titleInputE.style.display = 'none';
        workTitleE.style.display = 'inline-block';
        if (titleInputE.value == ""){
            workTitleE.textContent = savedTitle;
        }else{
            savedTitle = titleInputE.value;
        }
    }
})


hideBtnE.addEventListener('click', async () => {

    document.getElementById("goalGrid").style.display = 'none'; 
    document.getElementById("lblGoal").style.display = 'none';    

    if (wcGoalE.value > 0) {       
        wPercentE.style.display = 'inline-block';
        document.getElementById('word-goal').style.visibility='visible';
        document.getElementById('word-goal').innerHTML = " / " + wcGoalE.value;
    }
})