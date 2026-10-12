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

document.getElementById('word-count').addEventListener('click', async () => {
    // s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    // s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    // s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    const wordCount = document.getElementById("writing").value.split(' ').length;
    document.getElementById('word-number').innerHTML = wordCount;
})

// function WordCount(str) {
//     return str.split(' ')
//         .filter(function(n) { return n != '' })
//         .length;
// }
// console.log(WordCount(txt));