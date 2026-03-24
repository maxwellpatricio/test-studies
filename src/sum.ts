export function sum(num: number, num2: number){
    const result = num + num2;

    if(isNaN(result)){
        return 0
    }

    return result;
}