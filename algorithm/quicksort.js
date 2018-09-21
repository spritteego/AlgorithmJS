qSort=function(arr){
	var small=[],large=[],final=[];
	var pivot=arr[Math.floor(arr.length/2)];
	//选取中位数作为基准值pivot
	if(arr.length<=1){
		return arr; 
	}
	for(var i=0;i<arr.length;i++){
		if(i==Math.floor(arr.length/2)){
			continue;
		}
	     if(arr[i]<=pivot){
			small.push(arr[i]);//pivot不能加到子数组中..
		}
		
		if(arr[i]>pivot){
			large.push(arr[i]);
		}	
	}
	return final.concat(qSort(small),pivot,qSort(large));
	
};
arr1=[1,52,5,21,5464,612,8764];
console.log(qSort(arr1));
alert(qSort(arr1));