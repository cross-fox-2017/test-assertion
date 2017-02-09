module.exports={
    add:function(a,b){
      if(Number(a)&& Number(b)){
        return a+b
      }else {
        return "not a number"
      }
    },
    substract:function(a,b){
      if(Number(a)&& Number(b)){
        return a-b
      }else {
        return "not a number"
      }
    },
    multiply:function(a,b){
      if(Number(a)&& Number(b)){
        return a*b
      }else {
        return "not a number"
      }
    },
    divider:function(a,b){
      if(Number(a)&& Number(b)){
        return a/b
      }else {
        return "not a number"
      }
    },
    pangkat:function(a,b){
      if(Number(a) && Number(b)){
        return Math.pow(a,b)
      }else {
        return "not a number"
      }
    },
    akar:function(a){
      if(Number(a)){
        return Math.sqrt(a)
      }else {
        return "not a number"
      }
    }
}
