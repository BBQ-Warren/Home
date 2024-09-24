function searchBaidu() {
    var searchString = document.getElementById("searchBox").value;
    // window.location.href = "https://www.baidu.com/s?wd=" + searchString;
    window.open("https://www.baidu.com/s?wd=" + searchString);
}
  
function searchGithub() {
    var searchString = document.getElementById("searchBox").value;
    // window.location.href = "https://github.com/search?q=" + searchString;
    window.open("https://github.com/search?q=" + searchString);
}

function searchBing() {
    var searchString = document.getElementById("searchBox").value;
    // window.location.href = "https://www.bing.com/search?q=" + searchString;
    window.open("https://www.bing.com/search?q=" + searchString);
}

function searchGoogle() {
    var searchString = document.getElementById("searchBox").value;
    // window.location.href = "https://www.google.com/search?q=" + searchString;
    window.open("https://www.google.com/search?q=" + searchString);
}