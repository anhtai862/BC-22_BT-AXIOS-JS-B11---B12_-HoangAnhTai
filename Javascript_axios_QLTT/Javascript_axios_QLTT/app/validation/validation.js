function Validation (){
    this.checkEmpty = function (value,errorID,msg) {
        if (value === "") {
            document.getElementById(errorID).innerHTML = msg ;
            document.getElementById(errorID).style.display ="block";
            return false
        }
        document.getElementById(errorID).innerHTML = msg ;
        document.getElementById(errorID).style.display="none";
        return true 
    }

    this.selectTypeofUser = function (value,errorID,msg) {
        if (value === "Chọn loại người dùng") {
            document.getElementById(errorID).innerHTML = msg ;
            document.getElementById(errorID).style.display ="block";
            return false
        }
        document.getElementById(errorID).innerHTML = msg ;
        document.getElementById(errorID).style.display="none";
        return true 
    }

    this.selectLanguage = function (value,errorID,msg) {
        if (value === "Chọn ngôn ngữ") {
            document.getElementById(errorID).innerHTML = msg ;
            document.getElementById(errorID).style.display ="block";
            return false
        }
        document.getElementById(errorID).innerHTML = msg ;
        document.getElementById(errorID).style.display="none";
        return true 
    }
    this.checkStringCharacter = function(value,errorID,msg){
        var letter ="^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$" ;
        if(value.match(letter)){
            document.getElementById(errorID).innerHTML = "" ;
            document.getElementById(errorID).style.display="none";
            return true
        }
        document.getElementById(errorID).innerHTML = msg ;
        document.getElementById(errorID).style.display="block";
        return false
    }
    this.checkTraEmail = function(value,errorID,msg){
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if (value.match(letter)){
            document.getElementById(errorID).innerHTML = "" ;
            document.getElementById(errorID).style.display="none";
            return true
        }
        document.getElementById(errorID).innerHTML = msg ;
        document.getElementById(errorID).style.display="block";
        return false
    }
    this.checkPassWord = function(value,errorID,msg){
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/ ;
        if (value.match(letter)){
            document.getElementById(errorID).innerHTML = "" ;
            document.getElementById(errorID).style.display="none";
            return true
        }
        document.getElementById(errorID).innerHTML = msg ;
        document.getElementById(errorID).style.display="block";
        return false
    }
    this.characterLength = function(value,errorID,msg,min,max){
        if(value.trim().length >= min && value.trim().length <= max){
            // hợp lệ
            document.getElementById(errorID).innerHTML = "" ;
            document.getElementById(errorID).style.display="none";
            return true
        }
        // không hợp lệ
        document.getElementById(errorID).innerHTML = msg ;
        document.getElementById(errorID).style.display="block";
        return false
    }
    this.checkUsername = function (status,errorID,msg) {
        if (status == 0) {
            document.getElementById(errorID).innerHTML = msg ;
            document.getElementById(errorID).style.display ="block";
            return false
        }
        document.getElementById(errorID).innerHTML = msg ;
        document.getElementById(errorID).style.display="none";
        return true 
    }
    
}


