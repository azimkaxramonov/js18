function start(a, b) {
    if (Array.isArray(a)) {
        console.log(Math.max(...a));
    }
    else if(typeof a === 'number' && typeof b === 'number') {
        console.log(Math.max(a,b));
    }
    else {
        let one = a.a
        let two = a.b
        let oneB = b?.a
        let twoB = b?.b
        if (b) {
            console.log(Math.max(one, two, oneB, twoB));
        }
        console.log(Math.max(one, two));
    }
}
start(1, 2)
start([1, 2, 6])
start({ a: 1, b: 8 })
start({ a: 1, b: 2 }, { a: 11, b: 12 })

let finiBacchi = +prompt()

function Bacchi(n) {
    return n <= 1 ? n : Bacchi(n - 1) + Bacchi(n - 2);
}console.log(Bacchi(finiBacchi))
