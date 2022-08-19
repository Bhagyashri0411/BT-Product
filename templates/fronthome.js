function openserverdiv() {
    document.getElementById('openservermodel').style.display = "block";
}
function closeserverdiv() {
    document.getElementById('openservermodel').style.display = "none";
}


function startsubdata() {
    console.log('hii');
    var projecttext = $('#projecttextfield').val();
    var projectmail = $('#projectmailfield').val();
    var projectmobile = $('#projectmobilefield').val();
    var projectname = $('#projectnamefield').val();
    var projectmes = $('#projectmesfield').val();

    if (projecttext == '', projectmail == '', projectmobile == '', projectname == '', projectmes == '') {
        document.getElementById('startmess').innerText = "Please Enter The Values";
        document.getElementById('startmesshow').style.display = 'block';
    }
    else {
        var myData = { 'id': null, 'com_name': projecttext, 'mail': projectmail, 'mob_no': projectmobile, 'project_name': projectname, 'project_discription': projectmes}

        $.ajax({
            type: "post",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(myData),
            url: "http://localhost:8090/start/insertdata",
            success: function (msg) {
                if (msg == "Inserted Sucessfully") {
                    document.getElementById('startmess').innerText = "Successful";
                    document.getElementById('startmesshow').style.display = 'block';
                    // document.getElementById('openmodel').style.display = "none";
                    document.getElementById('resetourdata').reset();

                }
                else {
                    document.getElementById('startmess').innerText = "Sucessfull Failed";
                }
            }
        })

    }

    $
}