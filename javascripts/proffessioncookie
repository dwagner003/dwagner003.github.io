 <script>
function setCookie(proffession,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = proffession+"="+cvalue+"; "+expires;
}
function getCookie(proffession) {
    var work = proffession + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(work) == 0) {
            return c.substring(work.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var user=getCookie("usertype");
    if (user != "") {
        alert("Welcome back you are a currently viewing as a " + user);
    } else {
       user = prompt("Please enter your current profession in the soccer world :","");
       if (user != "" && user != null) {
           setCookie("usertype", user, 30);
       }
    }
}
</script> 
