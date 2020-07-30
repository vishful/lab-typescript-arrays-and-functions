import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {

    constructor() {}

    public arrayMultiply(myArray: number[]) : Array<Number> {
        var multiples;

        for (var i = 0; i < myArray.length; i++) {
          if (myArray[i] % 5 == 0) {
            multiples : myArray[i];
          }
          else if (myArray[i] % 10 == 0) {
            multiples : myArray[i];
          }
        }
      
        return multiples;
    }

    public arraySeparate(myArray: any) : Array<String> {
        var count:number=0;
        for(var i=0;i<myArray.length;i++){
            if(typeof myArray[i]=="string"){
                count++;
                return myArray[i];
            }
        }
    }

    /*public arraySplit(str:string) : Array<number>{
        /*var count:number=0;
        for(var i=0;i<myArray.length;i++){
            if(typeof myArray[i]=="number"){
                count++;
                return myArray[i];
          
    }*/

    public arraySort(myArray:any) : Array<string>{
        var size=myArray.length;
        for(var i = 0; i<size-1; i++) {
            for (var j = i+1; j<myArray.length; j++) {
               if(myArray[i].compareTo(myArray[j])>0) {
                  var temp = myArray[i];
                  myArray[i] = myArray[j];
                  myArray[j] = temp;
               }
            }
           return myArray;
    }

    public arrayReplace(myArray:any):Array<number>{
        var multiples;

        for (var i = 0; i < myArray.length; i++) {
          if (myArray[i] % 3 == 0) {
            myArray[i]=5;
          }
          return myArray;
}

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let array = new ArrayComponent();

console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));

    }

    }
