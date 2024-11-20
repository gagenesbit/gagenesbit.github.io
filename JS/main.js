var webDescription= "Proficiency in HTML, CSS, JavaScript and additional experience with PHP and HTMX. With a specialization in hypermedia systems and the advantages that they provide."

var DBDescription="I have experience working with relational and non-relational database technologies, SQL, and database design. I have worked with databases using python and java in a variety of contexts."

var securityDescription="I have experience investigating and learning how cybersecurity vulnerabilities are exploited. Then I took that knowlege and implemented security measures in my own projects. I am currently working as a graduate students reasearch assistant in the MSU Cybersecurity lab."

var gitDescritpion="Highly proficient using Git and GitHub to manage versions of a codebase. This allows for a heavily collaborative workflow in which my teams were able to deliver quality software before deadlines."
function changeDescription(option) {

    var textBox = document.getElementById("skillDescription");

    var optionText = option.innerHTML;
    switch (optionText) {
        case "Web Development":
            textBox.innerHTML = webDescription;
            
            break;
        case "Database Management":
            textBox.innerHTML = DBDescription;
            break;
        case "CyberSecurity":
            textBox.innerHTML = securityDescription;
            break;
        case "Version Control":
            textBox.innerHTML = gitDescritpion;
            break;
    }
    removeSelectionStyling()
    option.id="selectedSkill"
}

function removeSelectionStyling(){

    items=document.getElementsByClassName("skillListItem")
    Array.from(items).forEach(element => {
        if(element.id==="selectedSkill"){
            element.id=''
        }
    });
}
