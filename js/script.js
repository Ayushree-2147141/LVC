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

function openInstructions()
{
    window.open("./instructions.html", width="50%", height="30%");
}

function openPortal()
{
    window.open('./onlineexam.html', width="50%", height="50%");
}

function generateOnlineResult()
{
    var total = 0;
    if(document.getElementById('option11').checked && document.getElementById('option22').checked)
    {
        total = 4
    }
    else if(document.getElementById('option11').checked || document.getElementById('option22').checked)
    {
        total = 2;
    }
    else
    {
        total = 0
    }
    alert("Marks awarded : "+total);
   
}


function subscribe()
{
    // prompt('Enter your email id to subscribe!');
    prompt('Enter your name!');
    var country = prompt('Enter your country!');
    if (country == "India" || country == 'india')
    {
        window.open('./discount.html', width = "50%", height = "50%");
    }
    else
    {
        alert('oops! no dicount for you!');
    }
}

function formsubmit()
{
    var username = form1.username.value;
    var userEmail = form1.useremail.value;
    var designation = form1.userdesignation.value;

    if (username == "")
    {
        alert("Please enter your name!");
        form1.username.focus();
        return false;
    }
    else if(userEmail == "")
    {
        alert("Please enter your email");
        form1.useremail.focus();
        return false;

    }
    else if(designation == "")
    {
        alert("Please enter your designation")
        form1.designation.focus();
        return false;
    }
    
    else
    {
        alert("Lets go " + username)
        return true;
    }

}
