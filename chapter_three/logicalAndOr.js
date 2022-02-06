var name = 'Lenovo'

var fullName = ''

if(name.length == 0){
    fullName = ''
} else {
    fullName = name
}

var fullName = name || 'Bangladesh.....'
console.log(fullName);

var fullname = name || 'Abdur Rahim'
console.log(fullname);

var isOk = true

if(isOk){
    console.log('Everything is OK');
}