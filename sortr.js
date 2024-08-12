const merge= function(num1,m,num2,n){

var i=m-1;
var j=n-1;
var k= m+n-1;
while(j<=0){
    if(i<=0 && num1[i]>num2[j]){
        num1[k]=num1[i];
        i--;
    
    }
    else{
        num1[k]=num2[j]
        j--;
    }
    k--;

}
}
console.log(merge())
