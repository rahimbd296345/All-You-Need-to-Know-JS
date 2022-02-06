let arr = [4, 5, 1, 0, 8]

arr.forEach(function (a){
    console.log(a)
})


function cbf(a) {
    console.log(a);
}
arr.forEach(cbf)

function caller() {
    return function(name){
        return 'Caller Calling You ' + name
    }
}

let x = caller()
let y = x('Abdur Rahim')
y

let z = x('Shatota Corporation')
z

let a = caller()('Shatotacorporation.com')
a