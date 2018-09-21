bSearch=function(arr,item){
	var high=arr.length-1,low=0,mid;
	while(low<=high){
		mid=Math.floor((low+high)/2);
		if(arr[mid]==item){
			return mid;
		}
		else if(arr[mid]<item){
			high=mid-1;
		}
		else{
			low=mid+1;
		}
	}
	return -1;
};