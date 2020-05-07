Java.perform(function () {
    var MessageDigest = Java.use('java.security.MessageDigest');

    var mdupdate = MessageDigest.update.overload('[B');
    mdupdate.implementation = function (a1: any) {
        var result = mdupdate.call(this, a1);
        var a1s = "";
        for (var i = 0; i < a1.length; i++) {
            a1s += String.fromCharCode(a1[i])
        }
        console.log('java.security.MessageDigest.update(' + a1s + '); => ' + result);
        return result;
    };
    var mddigest = MessageDigest.digest.overload();
    mddigest.implementation = function (a1: any) {
        var result = mddigest.call(this, a1);
        console.log('java.security.MessageDigest.digest(' +  '); => ' + JSON.stringify(result));
        return result;
    };
    console.log('[+] functions() hooked');
    
});