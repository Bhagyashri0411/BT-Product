function opendiv() {
    document.getElementById('openmodel').style.display = "block";
}
function closediv() {
    document.getElementById('openmodel').style.display = "none";
}


function usersubdata() {
    console.log('hii');
    var usertext = $('#usertextfield').val();
    var usermail = $('#usermailfield').val();
    var usermobile = $('#usermobilefield').val();
    var usermes = $('#usermesfield').val();

    if (usertext == '', usermail == '', usermobile == '', usermes == '') {
        document.getElementById('messages').innerText = "Please Enter The Values";
        document.getElementById('messhow').style.display = 'block';
    }
    else {
        var myData = { 'id': null, 'user_name': usertext, 'mail': usermail, 'mob_no': usermobile, 'message': usermes }

        $.ajax({
            type: "post",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(myData),
            url: "http://localhost:8090/dash/postData",
            success: function (msg) {
                if (msg == "Inserted Sucessfully") {
                    document.getElementById('messages').innerText = "Successful";
                    document.getElementById('messhow').style.display = 'block';
                    // document.getElementById('openmodel').style.display = "none";
                    document.getElementById('resetourdata').reset();

                }
                else {
                    document.getElementById('messages').innerText = "Sucessfull Failed";
                }
            }
        })

    }

    $
}