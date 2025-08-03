document.querySelector("button").onclick = function(){
    document.querySelector("textarea").select();
    document.execCommand('copy');
}

// function getElement(id) {
//     return document.getElementById(id);
// }
debugger
var workItemTitle = document.getElementById('workItemTitle');
var type = document.getElementById('type');
var area = document.getElementById('area');
var workItem01 = document.getElementById('workItem01');

var branchName = document.getElementById('branchName').value;
var commitMessage = document.getElementById('commitMessage').value;
var pullRequestTitle = document.getElementById('pullRequestTitle').value;

document.getElementById('generate').addEventListener('click', generate);

function generate() {
    debugger
    const workItemTitleValue = workItemTitle.value;
    // const typevalue = this.type.value;
    // const areavalue = this.area.value;
    // const workItem01value = this.workItem01.value;

    const workItemTitleDashed = workItemTitleValue.split(" ").join("-");
    debugger
}