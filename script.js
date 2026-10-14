
let alertNoteE = document.getElementById("alertNote");
let textareaGridE = document.getElementById("textareaGrid");
let wcGoalE = document.getElementById("wcGoal");
let workTitleE = document.getElementById("workTitle");
let titleInputE = document.getElementById("titleInput");
let enterBtnE = document.getElementById("enterBtn");
let writingE = document.getElementById("writing");
let monmonE = document.getElementById("monmon");

const frames = document.getElementById("animation").children;
const frameCount = frames.length;

function countWords(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    return s.split(/\s+/).filter(String).length; // split excludes spaces and multiple lines
}

let x = 1;

function animationCycle(a){
    if(a > 1){
        a = 0;
        frames[ a + 1 ].style.display = "none";
        frames[a].style.display = "block";
    } 
    else{
        frames[ a - 1 ].style.display = "none";
        frames[a].style.display = "block";
    }
}

//////////////////////////////////

// const frames = document.getElementById("animation").children;
// const frameCount = frames.length;
// let i = 0;
// setInterval(function () { 
//     frames[i % frameCount].style.display = "none";
//     frames[++i % frameCount].style.display = "block";
// }, 300);

/////////////////////////////////

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

    animationCycle(x);
    alert(x);
    x++;

    // let i = 0;
    // setInterval(function () { 
    //     frames[i % frameCount].style.display = "none";
    //     frames[++i % frameCount].style.display = "block";
    // }, 300);

    // if (i=0){
    //     frames[i % frameCount].style.display = "none";
    // } else{
    //     frames[++i % frameCount].style.display = "none";
    // }

    // if (monmonE.style.content == "url(images/monmon2.png)"){
    //     monmonE.style.content = "url(images/monmon1.png)";
    // }
    
    // monmonE.style.content = "url(images/monmon2.png)";

    // if ((monmonE.style.content !== "url(images/monmon1.png)") && monmonE.style.content !== "url(images/monmon2.png)"){
    //     // monmonE.style.content = "url(images/monmon2.png)";
    //     if((monmonE.style.content !== "url(images/monmon1.png)")){
    //         monmonE.style.content = "url(images/monmon1.png)";
    //     } 
    //     else if ((monmonE.style.content !== "url(images/monmon2.png)")){
    //         monmonE.style.content = "url(images/monmon2.png)";
    //     }
    // }

    // if((monmonE.style.content === "url(images/monmon1.png)")){
    //     monmonE.style.content = "url(images/monmon2.png)";
    // } 
    // else if ((monmonE.style.content === "url(images/monmon2.png)")){
    //     monmonE.style.content = "url(images/monmon1.png)";
    // }

    

    document.getElementById('word-number').innerHTML = countWords(writingE.value);          

    if (wcGoalE.value > 0) {
        
        let percentage = Math.round((countWords(writingE.value) / wcGoalE.value) * 100);
        if (enterBtnE.style.display == 'none'){
            document.getElementById('word-percent').innerHTML= percentage + '%';
        }

        if ((event.code === 'Space') || (event.key === '.')){
            if ( countWords(writingE.value) == wcGoalE.value){
                // alert("Writing goal met!");
                alertNoteE.style.display = 'block';
                textareaGridE.style.border = '3px solid #07faa1';
                if (enterBtnE.style.display == 'none'&& wcGoalE.style.display == 'none'&& document.getElementById("lblGoal").style.display == 'none'){                    
                    enterBtnE.style.display = 'inline-block';
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

workTitleE.addEventListener('click', async () => {
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


enterBtnE.addEventListener('click', async () => {

    enterBtnE.style.display = 'none';
    wcGoalE.style.display = 'none';
    document.getElementById("lblGoal").style.display = 'none';    

    if (wcGoalE.value > 0) {       
        document.getElementById('word-goal').style.visibility='visible';
        document.getElementById('word-goal').innerHTML = " / " + wcGoalE.value;
    }
})