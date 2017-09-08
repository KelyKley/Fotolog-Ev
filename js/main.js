/*getItem ( key ) | setItem ( key , value ) | removeItem ( key )*/

function saveData(){
	var name = document.getElementById("name").value; //valor-nombre del input
	var clave = document.getElementById("clave").value; //valor-comentario del input
	localStorage.setItem(name, clave);

	var div_master = document.getElementById("comentarios");//contenedor de todos los comentarios
	div_master.innerHTML = ""; //para que no se repita todo el contenedor denuevo

	for(var i = 0; i < localStorage.length; i++){
		var name = localStorage.key(i); 
		var clave = localStorage.getItem(name);

		var div_hijo = document.createElement("DIV"); // contenedor de cada comentario
		div_hijo.setAttribute("class", "div-hijo");

		var create_name = document.createElement("h3"); //h3 para que contenga el nombre
		create_name.setAttribute("class", "title");
		var text_name = document.createTextNode(" "+name); 
		create_name.appendChild(text_name);

		var create_coment = document.createElement("P"); //p contenedor de comentario
		var text_coment = document.createTextNode(clave);
		create_coment.appendChild(text_coment);

		div_hijo.appendChild(create_name);
		div_hijo.appendChild(create_coment);

		div_master.appendChild(div_hijo);

		//limpiar input de nombre y comentario 
		document.getElementById("name").value = "";
		document.getElementById("clave").value = "";

	}
}

saveData(); //llamamos la funcion para que al recargar mla pagina sigan ahi

//limpiar comentarios
function clearData(){
	document.getElementById("comentarios").innerHTML = "";
}

//eliminar comentarios
function eliminar(){
	localStorage.clear(); saveData();
}
