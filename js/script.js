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


function generateResult()
{
    var name = document.getElementById("name").value;
    var math = document.getElementById("math").value;
    var science = document.getElementById("science").value;
    var computer = document.getElementById("computer").value;


    var mk1 = parseInt(math);
    var mk2 = parseInt(science);
    var mk3 = parseInt(computer);

    if(name == "")
    {
        alert("Please Enter Name!")
    }
    else if(math == "" || science == "" || computer =="")
    {
        alert("Please Enter Marks for all 3 subjects!")
    }
    else{
        var total = mk1+mk2+mk3;
        var perc = total/300 * 100;
        var max = 0;
        if(mk1 >= mk2 && mk1 >= mk3)
        {
            max = mk1;
        }
        else if(mk2 >= mk3 && mk2>= mk1)
        {
            max = mk2;
        }
        else{
            max = mk3;
        }
        
        document.getElementById("total").innerHTML = total;
        document.getElementById("perc").innerHTML = perc;
        document.getElementById("max").innerHTML = max;

    }
}