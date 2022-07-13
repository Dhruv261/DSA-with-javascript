function naiveSearch(string,pattern){
  var count = 0;
  for(var i=0;i<string.length; i++){
    for(var j=0;j<pattern.length;j++){
      if(pattern[j]!==string[i+j]){
        break;
      }
      if(j === pattern.length - 1){
        count++;
      }
    }
  }
  console.log(count)
}


naiveSearch("lorie loled", "lol")