cSort=function(){
			arg=arguments;
			var arr1=[],arr2=[],arr3=[];

			for(var i=0;i<arg.length;i++){
				arr1.push(arg[i]);
			}
			arr2=arr1.sort().slice(); //
			arr1.reverse();//arr1sorted
			for(var j=0;j<arr2.length;j++){
				arr3.push(arr2[j],"\'"+arr1[j]+"\'");
			}
			return arr3;
		};