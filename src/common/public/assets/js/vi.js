var Vi = Vi || {};

Vi.hasMark = function(str) {
    for (var i = 0; i< str.length; i++) {
        if (Vi.markCharMap[str.charAt(i)] != null) {
            return true;
        }
    }
    return false;
};

Vi.isLessMark = function(less, more) {

    while (true) {
        var lessMarkChar = Vi.markCharMap[more];

        if (less == lessMarkChar) {
            return true;
        }

        if (lessMarkChar==null) {
            return false;
        }
        more = lessMarkChar;
    }
};

Vi.removeMarkChar = function (c) {
    while (true) {
        var lessMarkChar = Vi.markCharMap[c];
        if (lessMarkChar==null) {
            return c;
        }
        c = lessMarkChar;
    }
};
Vi.removeMark = function (str) {
    var ret = "";
    for (var i = 0; i< str.length; i++) {
        ret += Vi.removeMarkChar(str.charAt(i));
    }
    return ret;
};

Vi.markCharMap = {
    "À": "A",
    "Á": "A",
    "Ã": "A",
    "Ả": "A",
    "Ạ": "A",
    "Ă": "A",
    "Â": "A",
    "Ằ": "Ă",
    "Ắ": "Ă",
    "Ẵ": "Ă",
    "Ẳ": "Ă",
    "Ặ": "Ă",
    "Ầ": "Â",
    "Ấ": "Â",
    "Ẫ": "Â",
    "Ẩ": "Â",
    "Ậ": "Â",
    "È": "E",
    "É": "E",
    "Ẽ": "E",
    "Ẻ": "E",
    "Ẹ": "E",
    "Ê": "E",
    "Ề": "Ê",
    "Ế": "Ê",
    "Ễ": "Ê",
    "Ể": "Ê",
    "Ệ": "Ê",
    "Ì": "I",
    "Í": "I",
    "Ĩ": "I",
    "Ỉ": "I",
    "Ị": "I",
    "Ò": "O",
    "Ó": "O",
    "Õ": "O",
    "Ỏ": "O",
    "Ọ": "O",
    "Ơ": "O",
    "Ô": "O",
    "Ồ": "Ô",
    "Ố": "Ô",
    "Ỗ": "Ô",
    "Ổ": "Ô",
    "Ộ": "Ô",
    "Ờ": "Ơ",
    "Ớ": "Ơ",
    "Ỡ": "Ơ",
    "Ở": "Ơ",
    "Ợ": "Ơ",
    "Ù": "U",
    "Ú": "U",
    "Ũ": "U",
    "Ủ": "U",
    "Ụ": "U",
    "Ư": "U",
    "Ừ": "Ư",
    "Ứ": "Ư",
    "Ữ": "Ư",
    "Ử": "Ư",
    "Ự": "Ư",
    "Ỳ": "Y",
    "Ý": "Y",
    "Ỹ": "Y",
    "Ỷ": "Y",
    "Ỵ": "Y",
    "Đ": "D",
    "à": "a",
    "á": "a",
    "ã": "a",
    "ả": "a",
    "ạ": "a",
    "ă": "a",
    "â": "a",
    "ằ": "ă",
    "ắ": "ă",
    "ẵ": "ă",
    "ẳ": "ă",
    "ặ": "ă",
    "ầ": "â",
    "ấ": "â",
    "ẫ": "â",
    "ẩ": "â",
    "ậ": "â",
    "è": "e",
    "é": "e",
    "ẽ": "e",
    "ẻ": "e",
    "ẹ": "e",
    "ê": "e",
    "ề": "ê",
    "ế": "ê",
    "ễ": "ê",
    "ể": "ê",
    "ệ": "ê",
    "ì": "i",
    "í": "i",
    "ĩ": "i",
    "ỉ": "i",
    "ị": "i",
    "ò": "o",
    "ó": "o",
    "õ": "o",
    "ỏ": "o",
    "ọ": "o",
    "ơ": "o",
    "ô": "o",
    "ồ": "ô",
    "ố": "ô",
    "ỗ": "ô",
    "ổ": "ô",
    "ộ": "ô",
    "ờ": "ơ",
    "ớ": "ơ",
    "ỡ": "ơ",
    "ở": "ơ",
    "ợ": "ơ",
    "ù": "u",
    "ú": "u",
    "ũ": "u",
    "ủ": "u",
    "ụ": "u",
    "ư": "u",
    "ừ": "ư",
    "ứ": "ư",
    "ữ": "ư",
    "ử": "ư",
    "ự": "ư",
    "ỳ": "y",
    "ý": "y",
    "ỹ": "y",
    "ỷ": "y",
    "ỵ": "y",
    "đ": "d"
};

Vi.markedCharsLowered = function() {
    var ret = [];
    for (var c in Vi.markCharMap) {
        ret.push(c);
    }
    return ret.join("");
}

try{
    module.exports = Vi
}
catch(e){}