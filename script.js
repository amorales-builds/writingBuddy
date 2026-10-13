// var txt = document.getElementById("textarea").value;

// document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
//   const isDarkMode = await window.darkMode.toggle()
//   document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
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

document.getElementById('writing').addEventListener('keyup', async () => {
    
    function countWords(s){
        s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
        s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
        s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
        return s.split(/\s+/).filter(String).length; // split excludes spaces and multiple lines
    }
    document.getElementById('word-number').innerHTML = countWords(document.getElementById("writing").value);

    if (((event.code === 'Space') || (event.key === '.')) && (document.getElementById("wcGoal").value > 0)){
        if ( countWords(document.getElementById("writing").value) == document.getElementById("wcGoal").value){
            alert("Writing goal met!");
        }
    }
})

document.getElementById('copyBtn').addEventListener('click', async () => {
    navigator.clipboard.writeText( document.getElementById("writing").value);
})