document.write('<pre>');


var treeHeight = prompt("tree height","im a number");
if(treeHeight %2 == 0){
	treeHeight++;
}


var spaces = ((treeHeight-1));
var stars = 1;
  for (var i=0; i<treeHeight; i++){

			//print spaces
      for(var j=0; j < spaces; j++){
				document.write(' ');
      }
      for (var k=0; k<stars; k++){
      	document.write('*');
      }
      for(var v=0; v < spaces; v++){
      	document.write(' ');
      }
      document.write('</br>')
      stars+=2;
      spaces--;

  }
