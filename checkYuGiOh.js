let output = [];

function checkYuGiOh(num){
let count = 1;

    for(count = 1; count <=num; count++) {
    if (count % 2 === 0 && count % 3 === 0 && count % 5 === 0 ){
         output.push("yu-gi-oh");
    } else if (count % 2 === 0 && count % 3 ===0){
        output.push("yu-gi");
    } else if (count % 2 === 0 && count % 5 === 0){
        output.push("yu-oh");
    } else if (count % 3 === 0 && count % 5 === 0){
        output.push("gi-oh");
    } else if (count % 2 === 0){
        output.push("yu");
    } else if (count % 3 === 0){
        output.push("gi");
    } else if (count % 5 ===0){
        output.push("oh");
    } else if (count % 2 !== 0 && count % 3 !== 0 && count % 5 !== 0 ){
        output.push(count);
    } else{
        "invalid input";
    }

}
    return output;
}
checkYuGiOh();