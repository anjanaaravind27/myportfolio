

function funcname() {
    let details = {
        name: document.getElementById("name").value,
        email: document.getElementById("mail").value,
        message: document.getElementById("msg").value,
    };

    const serviceID = "service_onsglav";
    const templateID = "template_svyfmso";

    emailjs.send(serviceID, templateID, details)
    .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("msg").value = "";
        console.log(res);
        alert("Your message was sent successfully!");
    })
    .catch(err => console.log(err));
}
