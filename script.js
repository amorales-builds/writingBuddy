
let alertNoteE = document.getElementById("alertNote");
let textareaGridE = document.getElementById("textareaGrid");
let wcGoalE = document.getElementById("wcGoal");
let workTitleE = document.getElementById("workTitle");
let titleInputE = document.getElementById("titleInput");
let hideBtnE = document.getElementById("hideBtn");
let goalGridE = document.getElementById("goalGrid");
let monmonE = document.getElementById("monAnimation");
let swmE = document.getElementById("swordAnimation");
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


const monsterBud = document.getElementById("monAnimation").children;
const monCount = monsterBud.length;
const swordsmanBud = document.getElementById("swordAnimation").children;
const swmCount = swordsmanBud.length;



function countWords(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    return s.split(/\s+/).filter(String).length; // split excludes spaces and multiple lines
}

// let count = 0;

// function countWordsPerPage(s,n){
//     if ((count) <= n){
//         s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
//         s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
//         s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
//         count = s.split(/\s+/).filter(String).length; // split excludes spaces and multiple lines
//         return count;
//     }
//     else{
//         let pg = count - n;
//         if (count >= n){
//             count = 0;
//         }
//         return pg;
//     }
// }

let x = 1;

function monAnimationCycle(a){
    monsterBud[2].style.display = "none";
    if(a > 1){
        a = 0;
        monsterBud[ a + 1 ].style.display = "none";
        monsterBud[a].style.display = "block";
    } 
    else{
        monsterBud[ a - 1 ].style.display = "none";
        monsterBud[a].style.display = "block";
    }
    x++;
    if (x > 2){
        x = 1;
    }

}

function swmAnimationCycle(a){
    swordsmanBud[2].style.display = "none";
    if(a > 1){
        a = 0;
        swordsmanBud[ a + 1 ].style.display = "none";
        swordsmanBud[a].style.display = "block";
    } 
    else{
        swordsmanBud[ a - 1 ].style.display = "none";
        swordsmanBud[a].style.display = "block";
    }
    x++;
    if (x > 2){
        x = 1;
    }

}

function monAnimationSleep(){
    monsterBud[0].style.display = "none";
    monsterBud[1].style.display = "none";
    monsterBud[2].style.display = "block";
}


function swmAnimationSleep(){
    swordsmanBud[0].style.display = "none";
    swordsmanBud[1].style.display = "none";
    swordsmanBud[2].style.display = "block";
}


const monTimeOut = setTimeout(monAnimationSleep(), 5000);
const swmTimeOut = setTimeout(swmAnimationSleep(), 5000);



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

// document.getElementById("buddyCharacterBtn").addEventListener('click', async () => {
//     if(monmonE.style.display =='none'){
//         swmE.style.display = 'none';
//         monmonE.style.display = '';
//         // monAnimationCycle(x); 
//         // document.getElementById("buddyCharacterBtn").style.opacity = '0.5';
//     } else{
//         swmE.style.display = '';
//         monmonE.style.display = 'none';
//         // swmAnimationCycle(x);
//         // document.getElementById("buddyCharacterBtn").style.opacity = '0.5';
//     }
// })

document.getElementById("buddyCharacterBtn").addEventListener('click', async () => {
    if(document.getElementById("buddyShop").style.display == 'none'){
        document.getElementById("buddyShop").style.display = '';
        document.getElementById("topBuddyGrid").style.display = 'none';
    }else{
        document.getElementById("buddyShop").style.display = 'none';
        document.getElementById("topBuddyGrid").style.display = '';
    }
    // alert(document.getElementsByName('buddySelection').value);
})

// document.getElementById("buddyShop").addEventListener('click', async () => {
//     if(document.getElementById('mons').checked == true){
//         swmE.style.display = 'none';
//         monmonE.style.display = 'inline-block';
//     } 
//     if (document.getElementById('swords').checked == true) {
//         swmE.style.display = 'inline-block';
//         monmonE.style.display = 'none';
//     }
// })

function allBuddiesDisabled(){    
    swmE.style.display = 'none';    
    monmonE.style.display = 'none';
}

function monsBuddyChosen(){
    allBuddiesDisabled();
    monmonE.style.display = 'inline-block';
}

function swmBuddyChosen(){    
    allBuddiesDisabled();
    swmE.style.display = 'inline-block';
}

// document.getElementByName("buddySelection").addEventListener('change', async () => {
//     alert("hi");
// })

// document.getElementById("buddyCharacterBtn").addEventListener('click', async () => {
//     document.getElementById('mons').checked = false;
// })


function buddySleep(){    
    monAnimationSleep();  
    swmAnimationSleep();   
}

function buddyAnimation(){
    if(monmonE.style.display !='none'){
        monAnimationCycle(x);         
        
    } 
    if(swmE.style.display !='none'){
        swmAnimationCycle(x); 
    }
}

writingE.addEventListener('keydown', async () => {
    buddyAnimation()
})

textareaGridE.addEventListener('mouseleave', async () => {
    buddySleep()  
})

document.getElementById('buddyArea').addEventListener('mouseleave', async () => {
    buddySleep() 
})

document.getElementById('buddyArea').addEventListener('click', async () => {    
    buddyAnimation()
})



// monmonE.addEventListener('mouseover', async () => {

//     monsterBud[0].style.display = "block";
//     monsterBud[1].style.display = "none";
//     monsterBud[2].style.display = "none";

//     // const monsterBud = document.getElementById("monAnimation").children;
//     // const monCount = monsterBud.length;
//     // let i = 0;
//     // setInterval(function () { 
//     //     monsterBud[i % monCount].style.display = "none";
//     //     monsterBud[++i % monCount].style.display = "block";
//     // }, 300);
// })

// monmonE.addEventListener('mouseout', async () => {
//     monAnimationSleep();  
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

function whatAreWeCounting(x){

        if (wcGoalE.value > 0) { 
            
            let percentage = Math.round((x / wcGoalE.value) * 100);

            if (goalGridE.style.display == 'none'){
                document.getElementById('word-percent').innerHTML= percentage + '%';
                document.getElementById('word-meter').value = percentage;
                if(percentage >= 100){
                    document.getElementById('word-meter').style.accentColor =' #04AA6D';
                }
            }

            if ((event.code === 'Space') || (event.key === '.')){
                if (x == wcGoalE.value){
                    // alert("Writing goal met!");
                    alertNoteE.style.display = 'block';
                    textareaGridE.style.border = '3px solid #07faa1';
                    if (goalGridE.style.display == 'none'){                    
                        goalGridE.style.display = '';                        
                    }
                }
            } 

            if ( (wcGoalE.style.background !== '#04AA6D') && (x >= wcGoalE.value)) {
                wcGoalE.style.background = '#04AA6D';
            }
            else if ((wcGoalE.style.background === '#04AA6D') && (x < wcGoalE.value)) {
                wcGoalE.style.background = 'red';
            }
        }
}


let pagesNumberNL = 1;

writingE.addEventListener('keyup', async () => {

    // alert(document.getElementById('goalOutput').textContent);

    if (document.getElementById("goalSelection").value == 'Words'){

        let wordNumber = countWords(writingE.value);

        document.getElementById('word-number').innerHTML = wordNumber; 

        whatAreWeCounting(wordNumber);
    }

    // alert(document.getElementById("lblCount").textContent);

    if (document.getElementById("goalSelection").value == 'Pages'){
    
        // Pages by number of words

        let page = countWords(writingE.value);  
        let pageMax = 5; //in Docs it's around 500, Word is around 550 (at 12pt) ((some sources say ~400))
        let pagesNumber = (Math.trunc(page / pageMax)) + 1;

        if ((page % pageMax == 0) && ((event.code === 'Space') || (event.key === '.'))){
            writingE.value = writingE.value + "\n" + "\n";
            // writingE.fillText(line, x, y);
        }        
        
        if ((event.code === 'Space') || (event.key === '.')){
            whatAreWeCounting(pagesNumber);
        } 

        document.getElementById('word-number').innerHTML = pagesNumber; 


        // if ((countWordsPerPage(writingE.value,5) >= pageMax) && (event.key === '.')){
        //     writingE.value = writingE.value + "\n" + "\n";
        //     pagesNumberNL = pagesNumberNL + 1;
        //     // writingE.fillText(line, x, y);
        //     whatAreWeCounting(pagesNumberNL);
        // }

        // document.getElementById('word-number').innerHTML = pagesNumberNL; 

        // alert(countWordsPerPage(writingE.value,5));

    }
})

document.getElementById("goalGrid").addEventListener('click', async () => {   
    if (document.getElementById("goalSelection").value == 'Pages'){ 
        document.getElementById("lblCount").textContent = 'Page';
    }
    if (document.getElementById("goalSelection").value == 'Words'){
        document.getElementById("lblCount").textContent = 'Word';
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

    if (wcGoalE.value > 0) {       
        wPercentE.style.display = 'inline-block';
        document.getElementById('word-goal').style.visibility='visible';
        document.getElementById('word-goal').innerHTML = " / " + wcGoalE.value;
        document.getElementById('word-meter').style.display='inline-block';
    }
})

function buttonClose(){
    if(workMenuE.style.opacity != "1"){
        workMenuE.style.opacity = "1";
        workMenuE.style.width = "3vh";
        workMenuE.style.marginLeft = "218%";
        workMenuE.innerHTML = "x";
        workInfoE.style.display = "block";
        // workTitleE.style.display = 'none';
        document.getElementById('topBuddyInfo').style.visibility ='hidden';
        document.getElementById('buddySettings').style.display = 'none';

    } 
    else{
        workMenuE.style.opacity =""; 
        workMenuE.style.width = "";
        workMenuE.style.marginLeft = "";
        workMenuE.innerHTML = "menu";   
        if(workInfoE.style.display != "none"){
            workInfoE.style.display = "none";
        }    

        document.getElementById('buddySettings').style.display = '';

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

/////

// let timer;
// let minutes = 15;
// let seconds = 0;
// let isPaused = false;
// let enteredTime = null;

// function startTimer() {
//     timer = setInterval(updateTimer, 1000);
// }

// function updateTimer() {
//     const timerElement =
//         document.getElementById('timer');
//         timerElement.textContent = 
//         formatTime(minutes, seconds);

//     if (minutes === 0 && seconds === 0) {
//         clearInterval(timer);
//         alert('Time is up! Take a break.');
//     } else if (!isPaused) {
//         if (seconds > 0) {
//             seconds--;
//         } else {
//             seconds = 59;
//             minutes--;
//         }
//     }
// }

// function formatTime(minutes, seconds) {
//     return 
//     `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
// }

// function togglePauseResume() {
//     const pauseResumeButton =
//         document.querySelector('.control-buttons button');
//     isPaused = !isPaused;

//     if (isPaused) {
//         clearInterval(timer);
//         pauseResumeButton.textContent = 'Resume';
//     } else {
//         startTimer();
//         pauseResumeButton.textContent = 'Pause';
//     }
// }

// function restartTimer() {
//     clearInterval(timer);
//     minutes = enteredTime || 15;
//     seconds = 0;
//     isPaused = false;
//     const timerElement =
//         document.getElementById('timer');
//     timerElement.textContent =
//         formatTime(minutes, seconds);
//     const pauseResumeButton =
//         document.querySelector('.control-buttons button');
//     pauseResumeButton.textContent = 'Pause';
//     startTimer();
// }

// function chooseTime() {
//     const newTime = prompt('Enter new time in minutes:');
//     if (!isNaN(newTime) && newTime > 0) {
//         enteredTime = parseInt(newTime);
//         minutes = enteredTime;
//         seconds = 0;
//         isPaused = false;
//         const timerElement =
//             document.getElementById('timer');
//         timerElement.textContent =
//             formatTime(minutes, seconds);
//         clearInterval(timer);
//         const pauseResumeButton =
//             document.querySelector('.control-buttons button');
//         pauseResumeButton.textContent = 'Pause';
//         startTimer();
//     } else {
//         alert('Invalid input. Please enter'+
//             ' a valid number greater than 0.');
//     }
// }

// startTimer();
