function viewcourse()
{

    var e = document.getElementById("courseSelect");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;

    // alert(text);
    if (text == "MERN")
    {
        window.open("./course/mern.html", width="50%", height="30%");
    }
    else if(text == "MEAN")
    {
        window.open("./course/mean.html", width="50%", height="30%");
    }
    else 
    {
        window.open("./course/mevn.html", width="50%", height="30%");
    }
}