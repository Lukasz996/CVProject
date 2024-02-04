function switchMode() {
    let moon = document.getElementById ("moon");
    if(moon.className=="moon"){
    moon.className="sun";
    document.body.style.backgroundColor = "#141D26";
    document.body.style.color = "#fff";
    }
    else {
    moon.className ="moon";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    }
    }




    // ------------ html ---------------

    /* -----------------Dark Mode------------ */
/* .night-toggle {
	width: 33px;
	height: 33px;
	right: 20px;
	top: 20px;
	position: absolute;
}
.night-toggle:hover {
	cursor: pointer;
}
.moon {
	background-color: transparent;
	box-shadow: -6px 1px 0 3px #275e8e;
	border-left: 3px solid #27476d;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	margin-left: 8px;
	margin-top: 0px;
	transition: 2s;
}
.sun {
	background-color: #fdd462;
	box-shadow: 2px 0px 0px 1px #d19c29;
	border-radius: 50%;
	width: 26px;
	height: 26px;
	transition: 2s;
} */
