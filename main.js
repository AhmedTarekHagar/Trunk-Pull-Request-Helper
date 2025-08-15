
var workItemTitleHTMLElement = document.getElementById('workItemTitleElement');
var typeHTMLElement = document.getElementById('typeElement');
var areaHTMLElement = document.getElementById('areaElement');
var workItem01HTMLElement = document.getElementById('workItem01Element');

var branchNameHTMLElement = document.getElementById('branchNameElement');
var commitMessageHTMLElement = document.getElementById('commitMessageElement');
var pullRequestTitleHTMLElement = document.getElementById('pullRequestTitleElement');

document.getElementById('generateButtonElement').addEventListener('click', generate);

document.getElementById('branchNameCopyButtonElement').addEventListener('click', copyBranchName);
document.getElementById('commitMessageCopyButtonElement').addEventListener('click', copyCommitMessage);
document.getElementById('pullRequestTitleCopyButtonElement').addEventListener('click', copyPullRequestTitle);

function generate() {
    const workItemTitleOriginalValue = workItemTitleHTMLElement.value.toLowerCase();
    const typeOriginalValue = typeHTMLElement.value.toLowerCase();
    const areaOriginalValue = areaHTMLElement.value.toLowerCase();
    const workItem01OriginalValue = workItem01HTMLElement.value.toLowerCase();

    const workItemTitleValueDashed = workItemTitleOriginalValue.split(" ").join("-");
    const areaValueDashed = areaOriginalValue.split(" ").join("-");

    const branchNameValue = `topics/${typeOriginalValue}(${areaValueDashed})=${workItemTitleValueDashed}#${workItem01OriginalValue}`;
    const commitMessageValue = `${typeOriginalValue}(${areaValueDashed}): ${workItemTitleOriginalValue}#${workItem01OriginalValue}`;
    const pullRequestValue = commitMessageValue;

    branchNameHTMLElement.value = branchNameValue;
    commitMessageHTMLElement.value = commitMessageValue;
    pullRequestTitleHTMLElement.value = pullRequestValue;
}

function copyBranchName() {
    navigator.clipboard.writeText(branchNameHTMLElement.value)
        .then(() => {
            // add toaster
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

function copyCommitMessage() {
    navigator.clipboard.writeText(commitMessageHTMLElement.value)
        .then(() => {
            // add toaster
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

function copyPullRequestTitle() {
    navigator.clipboard.writeText(pullRequestTitleHTMLElement.value)
        .then(() => {
            // add toaster
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}
