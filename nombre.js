mensagem = prompt("Por favor, ingresa tu nombre",'');
	if (mensagem==null) {
		document.write("¡Bienveido a mi pagina!")
	}else{
		if (mensagem=='') {
			document.write("<b><div align = center font face=arial size=2 color=#000000>¡Bienvenido a mi pagina!</font></b>")
		}else{
			document.write("<b><div align = center font face=arial size=2 color=#000000>Hola " +mensagem+", ... </font></b>");
			}
		}