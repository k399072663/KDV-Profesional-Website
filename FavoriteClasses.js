"use strict";

window.onload=(event)=>{
    setup()
};

var favCourse = []

function setup(){
    var favorited = document.querySelectorAll("input")
    favorited.forEach(favorite=>{
        favorite.addEventListener("click",event =>{
            addClass(event);

        })
    })
}

function addClass(e){
    if (!(favCourse.includes(e.target.id))){
        favCourse.push(e.target.id);
        var tr = document.createElement("tr");
        var favoritedcourse = document.getElementById("Course" + e.target.id).innerHTML;
        var currentdate = new Date().toLocaleString();
        favoritedcourse += "<td> Date Added: " + currentdate + "</td>";
        document.getElementById("counter").innerHTML = favCourse.length;
        tr.innerHTML= favoritedcourse;
        document.getElementById("FavCourseTable").appendChild(tr);
        

    }
}






