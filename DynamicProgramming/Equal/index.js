/**
 * 
 * Optimize following code by not doing the actual operations but by counting the number of operations required mathematically try looking into divisibility, GCD and LCM of min and max number
 */

function distribute(arr,quantity, exception){
    for(var i in arr){
        console.log('distribute',i, a[i], quantity);
        if(i !== exception) {
            arr[i] += quantity 
        }
    }
    console.log('distribute return',JSON.stringify(arr));
    return arr
}


function minMax(arr) {
    var min =0, max =0;
    for(var i in arr) {
        min = a[min] > a[i] ? i : min;
        max = a[max] < a[i] ? i : max;
    }
    return {min:min, max:max}
}

function determineQuantity(a,min,max) {
  var difference = a[max]-a[min];
  if (difference >= 5) return 5;
  if (difference < 5 && difference >= 2) return 2;
  return 1;
}

var a = [53,361,188,665,786,898,447,562,272,123,229,629,670,848,994,54,822,46,208,17,449,302,466,832,931,778,156,39,31,777,749,436,138,289,453,276,539,901,839,811,24,420,440,46,269,786,101,443,832,661,460,281,964,278,465,247,408,622,638,440,751,739,876,889,380,330,517,919,583,356,83,959,129,875,5,750,662,106,193,494,120,653,128,84,283,593,683,44,567,321,484,318,412,712,559,792,394,77,711,977,785,146,936,914,22,942,664,36,400,857];

function equal(a) {
  var operations = 0;
  
  var result = minMax(a);
  
  while(result.min !== result.max){
    var quantity = determineQuantity(a, result.min, result.max);
   	a =  distribute(a,quantity,result.max);
    result = minMax(a);  
    operations++;
  }
  return operations;
}
console.log(equal(a))

