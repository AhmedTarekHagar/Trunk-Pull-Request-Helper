
var workItemTitleHTMLElement = document.getElementById('workItemTitleElement');
var typeHTMLElement = document.getElementById('typeElement');
var areaHTMLElement = document.getElementById('areaElement');
var workItem01HTMLElement = document.getElementById('workItem01Element');

var branchNameHTMLElement = document.getElementById('branchNameElement');
var commitMessageHTMLElement = document.getElementById('commitMessageElement');
var pullRequestTitleHTMLElement = document.getElementById('pullRequestTitleElement');

var branchNameCopyButtonHTMLElement = document.getElementById('branchNameCopyButtonElement');
var commitMessageCopyButtonHTMLElement = document.getElementById('commitMessageCopyButtonElement');
var pullRequestTitleCopyButtonHTMLElement = document.getElementById('pullRequestTitleCopyButtonElement')

function generate() {
    const workItemTitleOriginalValue = workItemTitleHTMLElement.value.toLowerCase();
    const typeOriginalValue = typeHTMLElement.value.toLowerCase();
    const areaOriginalValue = toKebabCase(areaHTMLElement.value).toLowerCase();
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

function copyHTMLElementValue(HTMLElement) {
    navigator.clipboard.writeText(HTMLElement.value)
        .then(() => {
            // add toaster
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

function copyWithFeedback(element, buttonElement) {
    navigator.clipboard.writeText(element.value)
        .then(() => {
            buttonElement.classList.replace("fa-regular", "fa-solid");
            buttonElement.classList.replace("fa-copy", "fa-check");
            setTimeout(() => {
                buttonElement.classList.replace("fa-solid", "fa-regular");
                buttonElement.classList.replace("fa-check", "fa-copy");
            }, 1000);
        });
}

document.getElementById('generateButtonElement').addEventListener('click', generate);

branchNameCopyButtonHTMLElement.addEventListener('click', () => copyHTMLElementValue(branchNameHTMLElement));
commitMessageCopyButtonHTMLElement.addEventListener('click', () => copyHTMLElementValue(commitMessageHTMLElement));
pullRequestTitleCopyButtonHTMLElement.addEventListener('click', () => copyHTMLElementValue(pullRequestTitleHTMLElement));

branchNameCopyButtonHTMLElement
    .addEventListener('click', () => copyWithFeedback(branchNameHTMLElement, branchNameCopyButtonHTMLElement));
commitMessageCopyButtonHTMLElement
    .addEventListener('click', () => copyWithFeedback(commitMessageHTMLElement, commitMessageCopyButtonHTMLElement));
pullRequestTitleCopyButtonHTMLElement
    .addEventListener('click', () => copyWithFeedback(pullRequestTitleHTMLElement, pullRequestTitleCopyButtonHTMLElement));

function toKebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // insert dash between lowercase/number and uppercase
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2'); // handle consecutive uppercase letters properly
}