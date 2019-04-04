function printTriangle(countOfLines){
    let array = [1];
    for(let x = 1; x < countOfLines; x++){
        let line = [];
        line[0]=1;
        line[x]=1;
        for(let i = 1; i<x;i++){
            line[i]=array[x-1][i-1]+array[x-1][i];
        }
        array[x]=line;
    }
    logTriangle(array,countOfLines);
}

function addSpaces(countOfSpaces){
    let concat = ""; 
    for(let i = 0; i<countOfSpaces; i++){
        concat += "  ";
    }
    return concat;
}

function logTriangle(arr,countOfLines){
    let count = arr[countOfLines-1].toString().length;
    count = (count-6)/2;
    let result = addSpaces(count);
    result+= "" + arr[0];
    arr.forEach(function(item, currentLine, arr) {
        for(let i = 0; i < item.length;i++){
            result += item[i] + "  ";
        }
        spaces = addSpaces(countOfLines-currentLine);
        result+="\n"+spaces;
    });

    console.log(result);
}

printTriangle(10);
