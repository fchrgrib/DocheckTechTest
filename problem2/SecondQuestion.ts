
function Q2(arr: number[][]) {
    for (let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr[0].length;j++){
            process.stdout.write(`${arr[i][j].toString()} `)
        }
        console.log()
    }
    printSpiral(arr, arr.length, arr[0].length, 0)
}

function printSpiral(arr: number[][], lengthRow:number, lengthColumn:number, sum:number){

    if (sum === (arr.length*arr[0].length)) return;
    let check = 0
    check+=sum
    try{
        for (let i = arr[0].length-lengthColumn; i < (arr[0].length)-(arr[0].length-lengthColumn); i++) {
            console.log(arr[arr.length-lengthRow][i])
            check++
        }
    }catch (e) {
        return
    }
    try{
        for (let i = arr.length-lengthRow+1; i < (arr.length)-(arr.length-lengthRow); i++) {
            console.log(arr[i][(arr[0].length)-(arr[0].length-lengthColumn) - 1])
            check++
        }
    }catch (e) {
        return
    }
    try{
        for (let i = (arr[0].length)-(arr[0].length-lengthColumn) - 2; i >= (arr[0].length-lengthColumn); i--) {
            console.log(arr[(arr.length)-(arr.length-lengthRow) - 1][i])
            check++
        }
    }catch (e) {
        return
    }
    try{
        for (let i = (arr.length)-(arr.length-lengthRow) - 2;i >= 1 + (arr.length-lengthRow);i--){
            console.log(arr[i][arr[0].length-lengthColumn])
            check++
        }
    }catch (e) {
        return
    }
    printSpiral(arr, lengthRow-1, lengthColumn-1, check)
}

const arr :number[][] = [
    [1,2,3,4,5,6,7],
    [8,9,10,11,12,13,14],
    [15,16,17,18,19,20,21],
    [22,23,24,25,26,27,28],
    [29,30,31,32,33,34,35],
    [36,37,38,39,40,41,42]]

Q2(arr)