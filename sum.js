//String S
//choose two adjacent digits in S and replace them with their sum, but only if the sum is not greater than 9

function Solution(S) {
    let numS = S.split('').map(item => Number(item));
    function solve(numS){
        for (let i=0;i<numS.length-1;i++){
            if((numS[i]+ numS[i+1]<=9)){
                numS[i] = numS[i]+numS[i+1]
                numS.splice(i+1, 1)
                return solve(numS)

            }
        }
        return numS
    }
    
    return solve(numS).join('');
}

console.log(Solution("32581")); //  output: "559"
//console.log(Solution("1119812")); // output: "3992"
//console.log(Solution("226228")); // output: "4828"
