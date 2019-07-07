var userNameArr = new Array("Mohamed", "Hisham");
var emailArr = new Array("Mohamed@hotmail.com", "Hisham@yahoo.com");
var passwordArr = new Array("Mohamed10", "Hisham10");
function LogIn(userName, pass) {
    sessionStorage.setItem("islogged", "false");
    i = 0;
    for (i = 0 ; !(userName.value == userNameArr[i] && pass.value == passwordArr[i]) && i < userNameArr.length  ; i++);
    if (i < userNameArr.length) {
        sessionStorage.setItem("currentuserName", userName.value);
        sessionStorage.setItem("islogged", "true");
    }
    else {
        window.alert("Invalid email or password");
        document.getElementById("header").appendChild(invalidpass);
    }
    logged();
    location.reload();

}


function logOut() {
    
    sessionStorage.setItem("islogged", "false");
    logged();
    document.getElementById("register").innerHTML = " <label class='logintxt'>User Name:</label><input type='text' id='Usertxtbox'><br /><br /><label class='logintxt'>Password: </label><input type='password' id='passtxtbox'><br /><br /><button class='login' onclick='LogIn(getElementById('Usertxtbox'), getElementById('passtxtbox'))'>Log in</button><a href='SignUp.html'>sign up</a> ";  
    window.alert("log out");
    location.reload();
}
function commentBoxUpdate() {

    if (sessionStorage.getItem("islogged") != "true" || sessionStorage.getItem("islogged") =="false") {
        document.getElementById("commentText").disabled = true;
        document.getElementById("commentText").innerHTML = "log in to comment";
        document.getElementById("postComment").disabled = true;
    }
    if (sessionStorage.getItem("islogged") == "true") {
        document.getElementById("commentText").disabled = false;
        document.getElementById("postComment").disabled = false;
    }
}
function logged() {
    
    if (sessionStorage.getItem("islogged") == "true") {

        document.getElementById("register").innerHTML = " ";
        var welcome = document.createElement("h3");
        welcome.className = "welcome";
        welcome.innerHTML = "welcome " + sessionStorage.getItem("currentuserName");
        var settings = document.createElement("a");
        settings.className = "accountSettings";
        settings.innerHTML = "Settings";
        settings.href = "AccountSettings.html";
        var logout = document.createElement("button");
        logout.className = "logout";
        logout.innerHTML = "Log Out";
        logout.onclick = function () { logOut(); };
        document.getElementById("register").appendChild(welcome);
        document.getElementById("register").appendChild(settings);
        document.getElementById("register").appendChild(logout);
    }
}
function pollResultLocal(divp) {
    localStorage.setItem("poll3", undefined);
    if (localStorage.getItem("poll3") == undefined) {
        pollResult(divp);
        localStorage.setItem("poll3", true);
    }
    else
        window.alert("you have voted");
}
function pollResult(divp) {
    var totalvotes = 1 ;
    var chil = divp.children;
    var choices = new Array();
    var checkboxes = chil[1];
    var optionsValue = new Array();
    var i = 0;
    var result = "";
    for (i = 0 ; checkboxes[i+1]!== undefined  ; i++) {
        optionsValue[i] = 0;
        choices[i] = checkboxes[i].nextSibling;
        if (checkboxes[i].checked)
            optionsValue[i]++;
    }
    optionsValue[0]++;
	totalvotes++;
	for (i = 0 ; checkboxes[i + 1] !== undefined  ; i++) {
	    var percentage = (optionsValue[i] / totalvotes) * 100;
	    var voteDiv = document.createElement("div");
	    voteDiv.className = "voteresult";
	    var bar = document.createElement("div");
	    bar.className = "resultBar";
	    bar.style.width = (percentage * 160) / 100 + "px";
	    var info = document.createElement("div");
	    info.className = "resultinfo";
	    info.innerHTML = choices[i].textContent;
	    var percentageP = document.createElement("p");
	    percentageP.className = "percentage";
	    percentageP.innerHTML = percentage + "%";
	    info.appendChild(percentageP);
	    voteDiv.appendChild(bar);
	    voteDiv.appendChild(info);
	    voteDiv.appendChild(document.createElement("br"));
	    result += voteDiv.outerHTML;
	}
	result+= "Total Votes: "+totalvotes ;
    chil[1].innerHTML = result ;

}

function newComment(container, content) {
    
        var commentByH = document.createElement("h3");
        commentByH.className = "comment";
        commentByH.innerHTML = "By: " + sessionStorage.getItem("currentuserName");
        var commentBydiv = document.createElement("div")
        commentBydiv.appendChild(commentByH);
        commentBydiv.className = "commentby";
        var comment = document.createElement("h3");
        comment.className = "comment";
        comment.innerHTML = content.value;
        var bigDiv = document.createElement("div");
        bigDiv.appendChild(commentBydiv);
        bigDiv.appendChild(comment);
        container.appendChild(bigDiv);
        content.value = "";
}

function validateForm(form) { 
    if (form.passtxt.value.length < 6) {
            alert("Error: Password must contain at least six characters!");
            //form.passtxt.focus();
            return false;
        }
    else if (form.passtxt.value != form.cnfrmpasstxt.value) {
        alert("Error: Password doesn't match!");
        //form.passtxt.focus();
        return false;
    }
}

var currentPicInfo = 0;
var numbersArr = new Array("27", "10","2");
var infoArr0 = "Since his debut in Aug 2013, no Man City player has made more assists in all comps than Jesus Navas (27 - level with D.Silva).";
var infoArr1 = "Odion Ighalo is the first Watford player to reach double figures for goals in a single Premier League season (10).";
var infoArr2 = "Bournemouth are only the second team to beat Chelsea & Man Utd in consecutive Premier League matches (after Everton in Feb 2010).";
var infoArr = new Array(infoArr0, infoArr1, infoArr2);
var infoNum = 3;
function numbersSlider(type) {
    if (type == "Next") {
        if (currentPicInfo == (infoNum - 1))
            currentPicInfo = 0;
        else
            currentPicInfo++;
    }
    else if (type == "Prev") {
        if (currentPicInfo == 0)
            currentPicInfo = (infoNum - 1);
        else
            currentPicInfo--;
    }

    document.getElementById("bigNumber").innerHTML = numbersArr[currentPicInfo];
    var bigNum = document.getElementById("bigNumber");
    document.getElementById("numbersInfo").innerHTML = "";
    document.getElementById("numbersInfo").appendChild(bigNum);
    document.getElementById("numbersInfo").innerHTML += infoArr[currentPicInfo];
    document.getElementById("imgSlider").src = "Statistics/" + currentPicInfo + ".jpg";
}



function teamColorOver( link , teamDiv , divColor , linkColor) {
    link.style.color = linkColor;
    teamDiv.style.backgroundColor = divColor;
}
function teamColorOut(link, teamDiv) {
    link.style.color = "#006";
    teamDiv.style.backgroundColor = "white";
}
function teamBGOver(link, teamDiv, divBG, linkColor) {
    link.style.color = linkColor;
    teamDiv.style.backgroundImage = "url(TeamsBG/" + divBG + ")";
}
function teamBGOut(link, teamDiv) {
    link.style.color = "#006";
    teamDiv.style.backgroundImage = "";
}