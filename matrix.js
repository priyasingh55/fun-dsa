function createMatrix(n){
    let output=[];
    for(let i=0;i<n;i++){
        let row=[];
        for(let j=0;j<n;j++){
            row.push(i+''+j+' ');
        }
        output.push(row);
    }
    return output;
}
console.log(createMatrix(5));