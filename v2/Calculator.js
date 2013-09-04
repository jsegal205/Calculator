e='';
ops=['+','-','*','/'];

function addtoWindow(code) {
	w=getWindow();
	w.innerHTML=w.innerHTML+code;
	e=e+code;
}

function addOpstoWindow(code){
	if (isOpLastChar()){
		w=getWindow();
		w.innerHTML=w.innerHTML+code;
		e=e+code;
	}
}

function clearWindow() {
	w=document.getElementById('window');
	w.innerHTML = '&nbsp';
	e='';
}

function doMath(){
	try{
		if(e!='' && isOpLastChar()){
			w=getWindow();
			w.innerHTML = eval(e);
			e=w.innerHTML;
		}
	}
	catch(err){
		alert(err);
	}
}

function isOpLastChar() {
	for (var i=0;i<ops.length;i++){
		if(w.innerHTML.substring(w.innerHTML.length-1)==ops[i]) {
			return false;
		}
	}
	return true;
}

function getWindow() {
	return document.getElementById('window');
}
