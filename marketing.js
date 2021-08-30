window.onscroll = function() {
    var pos = document.documentElement.scrollTop;
    var calc_height = document.documentElement.scrollHeight-
                      document.documentElement.clientHeight;
    var scroll = pos * 100 / calc_height;
    document.getElementById("progress").style.width = scroll + "%";
}