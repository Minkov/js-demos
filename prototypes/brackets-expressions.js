n = 6
n / 2 expressions


solve(exp) ->
   // ()()
   // (())

    (exp)
    ()exp
    exp() 

const generateExpressions = (exp) => {
    if( n === exp.length) {
        // use the exp
        return;
    }

    generateExpressions(exp + '()');
    generateExpressions('()' + exp);
    generateExpressions('(' + exp + ')');
}

generateExpressions('');

// ()()()()()()()()()
// ()()()()()()()()()
// (()()()()()()()())

  
