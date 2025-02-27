// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

    let fibSeq = []
    fibSeq[0] = 0
    fibSeq[1] = 1
    
    for (let i = 2; i<= n; i++){
        fibSeq[i] = fibSeq[i-2] + fibSeq[i-1]
        
    } return fibSeq[n]
}

module.exports = fib;
