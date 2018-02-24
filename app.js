function findSum(){ 

    var num_args = arguments.length; //no. of arguments passed

    var i, sum=0;

    for (i=0;i<num_args;i++) 
        sum+= arguments[i];
    return sum;
    
    }
    
    //calling augSum(0 with different parameters)
    console.log ("sum of 1+2+3 ="+findSum(1,2,3));
    console.log("sum of 1+2+3+4+5+6+7+8+9+10 = "+findSum(1,2,3,4,5,6,7,8,9,10));