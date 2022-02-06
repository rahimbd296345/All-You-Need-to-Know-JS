function something(greet, name) {
    function sayHi() {
        console.log(greet, name)
    }
    sayHi()
}
something('Good Night', 'Abdur Rahim')

function something(greet, name) {
    function getFirstName() {
        if (name) {
            return name.split(' ')[0]
        }
    }
    let message = greet + ' ' + getFirstName()
    console.log(message)
}

something('Good Night', 'Abdur Rahim')

function something(greet, name) {
    function getFirstName() {
        if (name) {
            return name.split(' ')[0]
        } else {
            return ' '
        }
    }
    let message = greet + ' ' + getFirstName()
    console.log(message)
}
something('Good Morning')