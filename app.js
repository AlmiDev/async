console.log ('begin')
getMember()

console.log('end')

function getMember() {
    setTimeout( () => {
        console.log('Member 1')
    }, 1500)
}