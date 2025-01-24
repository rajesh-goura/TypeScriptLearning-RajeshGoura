let myString: string = "Hello my Name is Rajesh Goura";

const convertToUppercase = (str:string):string =>{
    const newstr=str.toUpperCase();
    return newstr;
};

const convertToLowercase = (str:string):string =>{
    const newstr =str.toLowerCase();
    return newstr;
}

const findLength = (str:string):number =>{
    return str.length;
}

const reverse = (str: string):string =>{
    let txt:string ="";
    let left:number=0;
    let right:number=str.length-1;
    while(left<=right){
        txt+=str[right];
        right--;
    }
    return txt;
}

const reverseWords = (str: string):string =>{
    let s1: string[]= str.split(" ");
    let txt:string ="";
    let left:number=0;
    let right:number=s1.length-1;
    while(left<=right){
        txt+=s1[right]+" ";
        right--;
    }
    return txt;
}

const occurence = (str:string, word:string):number => {
    let s1: string[]= str.split(" ");
    let left:number=0;
    let right:number=s1.length-1;
    let count:number=0;
    while(left<=right){
        if(s1[left]==word){
            count++;
            left++;
        }
        left++;
    }
    return count;
}

const rep = (str:string,word:string,replace:string):string=>{
    return str.replace(word,replace);
}


console.log(convertToUppercase(myString));
console.log(convertToLowercase(myString));
console.log(findLength(myString));
console.log(reverse(myString));
console.log(reverseWords(myString));
console.log(occurence(myString,"my"));
console.log(rep(myString,"Goura","Cage"));