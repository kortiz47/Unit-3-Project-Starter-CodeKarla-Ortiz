let title = document.querySelector(".title");
let storyBeginning = document.querySelector(".story-opening");
let programsButton = document.querySelector(".option-one");
let meetingsButton = document.querySelector(".option-two");
let programsScreen = document.querySelector(".option-one-screen");
let meetingsScreen = document.querySelector(".option-two-screen");
let ICA = document.querySelector(".ICA");
let GAL = document.querySelector(".Galileo");
let programsEnd = document.querySelector(".option-one-end");
let meetingsTwoEnd = document.querySelector(".option-two-end");
let meetingsImage=document.querySelector(".meetings");

programsButton.onclick = function() {
    programsScreen.style.display = "block";
    programsButton.style.display = "none";
    storyBeginning.style.display="none";
    title.style.display="none";
    meetingsButton.style.display="none";
    console.log(title);
};

meetingsButton.onclick = function() {
    meetingsScreen.style.display = "block";
    programsButton.style.display = "none";
    storyBeginning.style.display="none";
    title.style.display="none";
    meetingsButton.style.display="none";
};

ICA.onclick = function() {
    programsScreen.style.display = "none";
    programsEnd.style.display = "block";
};

GAL.onclick = function() {
    programsScreen.style.display = "none";
    programsEnd.style.display = "block";
};

meetingsImage.onclick=function(){
	meetingsScreen.style.display="none";
    meetingsTwoEnd.style.display="block";
};
