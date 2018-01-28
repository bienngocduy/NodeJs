var S = require('string');
str = ' I am / my_name   is-D'
// between(left, right) - trích xuất 1 chuỗi ở giữa
console.log(S(str).between('my', 'is').s)
//camelize() - xóa khoảng trắng, gạch chân, gạch nối, chuyển string về chuẩn camelCase
console.log(S(str).camelize().s)
//capitalize() - viết hoa ký tự đầu tiên của chuôi
console.log(S(str).capitalize().s)
//chompLeft(prefix) - Removes prefix from start of string.
console.log(S(str).chompLeft('my').s)
//chompRight(suffix) - Removes suffix from end of string.
console.log(S(str).chompRight('D').s)
//collapseWhitespace() - chuyển nhiều space --> 1 space
console.log(S(str).collapseWhitespace().s)
//contains(ss) - return true nếu chuỗi có ss
console.log(S(str).contains('').s)
//count(substring) - trả về số lượng chuỗi con trong chuỗi
console.log(S(str).count('am').s)
//dasherize() - đảo ngược của camelize(), và phân cách giữa các từ = dấu -
console.log(S(str).dasherize().s)
//decodeHTMLEntities()- decode html sang string
//endsWith(ss) - trả về true nếu cuối chuỗi là ss
//escapeHTML() - Escapes the html.
//humanize() - Transforms the input into a human friendly form.
console.log(S(str).humanize().s)






