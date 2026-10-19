
let alertNoteE = document.getElementById("alertNote");
let textareaGridE = document.getElementById("textareaGrid");
let wcGoalE = document.getElementById("wcGoal");
let workTitleE = document.getElementById("workTitle");
let titleInputE = document.getElementById("titleInput");
let hideBtnE = document.getElementById("hideBtn");
let monmonE = document.getElementById("animation");
let writingE = document.getElementById("writing");
let wPercentE = document.getElementById("word-percent");
let enterBtnE = document.getElementById("enterBtn");
let wSize = document.getElementById("letterSizeInput");
let wWeight = document.getElementById("letterWeightInput");
let wFont = document.getElementById("letterFontInput");
let wParagraph = document.getElementById("letterParagraphInput");
let workMenuE = document.getElementById("workMenu");
let workInfoE = document.getElementById("workInfo");
let topGenreE = document.getElementById("topGenre");
let topTypeE = document.getElementById("topType");
let saveBtnE = document.getElementById("saveBtn");


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



/////////////////////////////////



wSize.addEventListener('input', async () => {    
    if ((wSize.value >= 12) && (wSize.value <= 80)){
        writingE.style.fontSize = wSize.value + 'px';
    }
})

wWeight.addEventListener('input', async () => {    
    if (wWeight.value == 'light'){
        writingE.style.fontWeight = 300;
    }else if (wWeight.value == 'bold'){
        writingE.style.fontWeight = 600;
    }else if (wWeight.value == 'bolder'){
        writingE.style.fontWeight = 900;
    }else{
        writingE.style.fontWeight = wWeight.value;
    }
})

wFont.addEventListener('input', async () => {    
    if (wFont.value == 'Arial'){
        writingE.style.fontFamily = "Arial, Helvetica, sans-serif";
    }else if (wFont.value == 'Gill Sans'){
        writingE.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    }else if (wFont.value == 'Monospace'){
        writingE.style.fontFamily = "monospace";
    }else if (wFont.value == 'Times New Roman'){
        writingE.style.fontFamily = "Georgia,'Times New Roman', Times, serif";
    }else if (wFont.value == 'Segoe UI'){
        writingE.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    }else{
        writingE.style.fontFamily = wFont.value;
    }
})

wParagraph.addEventListener('input', async () => {    
    if (wParagraph.value == 'Center'){
        writingE.style.textAlign = 'center';
    }else if (wParagraph.value == 'Justify'){
        writingE.style.textAlign = 'justify';
    }else if (wParagraph.value == 'Left'){
        writingE.style.textAlign = 'start';
    }else if (wParagraph.value == 'Right'){
        writingE.style.textAlign = 'end';
    }else{
        writingE.style.textAlign = wParagraph.value;
    }
})


wSize.addEventListener('click', async () => {    
    if (wSize.value != ''){
        wSize.value = '';
    }
})

wWeight.addEventListener('click', async () => {    
    if (wWeight.value != ''){
        wWeight.value = '';
    }
})

wFont.addEventListener('click', async () => {    
    if (wFont.value != ''){
        wFont.value = '';
    }
})

wParagraph.addEventListener('click', async () => {    
    if (wParagraph.value != ''){
        wParagraph.value = '';
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

    // Pages by number of words

    let page = countWords(writingE.value);  
    let pageMax = 250;
    
    if (page % pageMax == 0){
        writingE.value = writingE.value + "\n";
        // writingE.fillText(line, x, y);
    }
    
})

document.getElementById("copyBtn").addEventListener('click', async () => {
    navigator.clipboard.writeText(writingE.value);
})

document.getElementById("pasteBtn").addEventListener('click', async () => {    
    writingE.value = await navigator.clipboard.readText();
})

let savedTitle = workTitleE.textContent;
let savedGenre = topGenreE.textContent;
let savedType = topTypeE.textContent;

// workTitleE.addEventListener('click', async () => {

//     workTitleE.style.display = 'none';
//     titleInputE.style.display = 'inline-block';
//     if (workTitleE.textContent != ""){
//         titleInputE.value = "";
//     }
// })

// titleInputE.addEventListener('keyup', async () => {
//     if (event.key === 'Enter'){       
//         //alert(document.getElementById("workTitle").textContent) 
//         workTitleE.textContent = titleInputE.value;
//         titleInputE.style.display = 'none';
//         workTitleE.style.display = 'inline-block';
//         if (titleInputE.value == ""){
//             workTitleE.textContent = savedTitle;
//         }else{
//             savedTitle = titleInputE.value;
//         }
//     }
// })

hideBtnE.addEventListener('click', async () => {

    document.getElementById("goalGrid").style.display = 'none'; 
    document.getElementById("lblGoal").style.display = 'none';    

    if (wcGoalE.value > 0) {       
        wPercentE.style.display = 'inline-block';
        document.getElementById('word-goal').style.visibility='visible';
        document.getElementById('word-goal').innerHTML = " / " + wcGoalE.value;
    }
})

function buttonClose(){
    if(workMenuE.style.opacity != "1"){
        workMenuE.style.opacity = "1";
        workMenuE.style.width = "3vh";
        workMenuE.style.marginLeft = "130%";
        workMenuE.innerHTML = "x";
        workInfoE.style.display = "block";
        // workTitleE.style.display = 'none';
        document.getElementById('topBuddyInfo').style.visibility='hidden';

    } 
    else{
        workMenuE.style.opacity =""; 
        workMenuE.style.width = "";
        workMenuE.style.marginLeft = "";
        workMenuE.innerHTML = "menu";   
        if(workInfoE.style.display != "none"){
            workInfoE.style.display = "none";
        }    

        if((savedGenre != "") || (savedType != "")){
            document.getElementById('topBuddyInfo').style.visibility='visible';
            document.getElementById('emDash').style.visibility='hidden';
            if((savedGenre != "") && (savedType != "")){
                document.getElementById('emDash').style.visibility='visible';
            }
        }
    }
}

workMenuE.addEventListener('click', async () => {
    buttonClose();    
})

saveBtnE.addEventListener('click', async () => {      
        if (document.getElementById("wTitle").value == ""){
            workTitleE.textContent = savedTitle;
        }else{
            workTitleE.textContent = document.getElementById("wTitle").value;
            savedTitle = document.getElementById("wTitle").value;
        }

        if (document.getElementById("wGenre").value == ""){
            topGenreE.textContent = savedGenre;
        }else{
            topGenreE.textContent = document.getElementById("wGenre").value;
            savedGenre = document.getElementById("wGenre").value;
        }
        
        if (document.getElementById("wType").value == ""){
            topTypeE.textContent = savedType;
        }else{
            topTypeE.textContent = document.getElementById("wType").value;
            savedType = document.getElementById("wType").value;
        }

    buttonClose();  //when save/submit true delete this and fix other stuff
})

