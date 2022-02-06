function name(firstName, lastName, gendar) {
    let output
    if (gender === 'male'){
        output = 'Mr. ' + firstName + ' ' + lastName
    } else if (gendar === 'female'){
        output = 'Ms. ' + firstName + ' ' + lastName
    }
    return output
}
let fullname = name('Abdur', 'Rahim', 'male')
console.log(fullname)

function example() {
    return {
        name: 'Abdur Rahim',
        skill: ['Java', 'JavaScript'],
        print: function (){
            console.log(this.name, this.skill)
        }
    }
}
let obj = example()
obj.print()