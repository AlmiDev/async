
console.log ('begin')

getMember((member) => {
    console.log(member)
    getArticles(member, (articles) => {
        console.log(articles)
    })
})

//getMember()

console.log('end')


// next représentant la fonction prise en paramètre

function getMember (next) {
    setTimeout( () => {
        next('Member 1')
    }, 4000)
}

/* gestion de l'asynchrone,
-> via des callback
-> des promise (promesses)
-> async / await -> specifique ES6

*/

function getArticles (member, next) {
    setTimeout (() => {
        next([1, 2, 3])
    }, 1500)
}