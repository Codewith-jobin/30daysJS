var num=[1,3,5,18,88,89];
num.forEach((element,index)=>{
    if(element>=80){
        console.log({index},"  , ",{element})
    }
})
const islar=(element)=> element > 80;
console.log(islar)
const index=num.findIndex(islar)
const numbi=num.find(islar)


console.log(index,numbi )
