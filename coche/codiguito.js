$(document).on("ready", inicio);
function inicio () 
{
	$("#comprar").on("click", comprar);
	$("#contactar").on("click", contactar);
	$("#dialogComprar").on("click", cerrarDialog);
	$("#dialogContactar").on("click", cerrarDialog);
	$("#personalizar").on("click", transicionpersonalizar);

}
function cerrarDialog(){
	var cambioDialogo = 
	{ 
		display: "none"
	};
	$("#dialogComprar").css(cambioDialogo)
	$("#dialogContactar").css(cambioDialogo)
}
function comprar(){
	cerrarDialog()
	var cambioDialogo = 
	{ 
		display: "block"
	};

	$("#dialogComprar").css(cambioDialogo)
}
function contactar(){
	var cambioDialogo = 
	{ 
		display: "block",
	};
	
	$("#dialogContactar").css(cambioDialogo)
}
function transicionpersonalizar ()
{
	cerrarDialog()
	$("#personalizar").html("Informacion");
	$("#personalizar").attr("id","informacion");

	//Objeto Javascript: JSON
	var cambiosHistoria = 
	{ 
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: 0
	};
	var cambiosPerson =
	{
		height: "auto",
		opacity: 1,
		width: "40%"
	};

	$("#historia").css(cambiosHistoria);
	$("#personalizacion").css(cambiosPerson);
	$("#color div").on("click", cambiarColorCoche);
	$("#llantas figure").on("click", cambiarColorLlanta);
	$("#techo figure").on("click", cambiarColorTecho);

	$("#informacion").on("click", transicioninformacion);
}
function transicioninformacion ()
{
	cerrarDialog()
	$("#informacion").html("Personalizar");
	$("#informacion").attr("id","personalizar");
	//Objeto Javascript: JSON
	var cambiosPerson = 
	{ 
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: 0
	};
	var cambiosHistoria =
	{
		height: "auto",
		opacity: 1,
		width: "40%"
	};

	$("#historia").css(cambiosHistoria);
	$("#personalizacion").css(cambiosPerson);

	$("#personalizar").on("click", transicionpersonalizar);
}

function cambiarColorCoche (datos) 
{
	var col = datos.currentTarget.id;
	$("#imgcoche").attr("src", "c"+ col +".jpg")
	$("#colorcoche").html(col);
}
function cambiarColorTecho (datos) 
{
	var opciontecho = datos.currentTarget.id;
	$("#imgtecho").attr("src", opciontecho+".png")
	if(opciontecho == "techoblanco") opciontecho = "Blanco";
	if(opciontecho == "techonegro") opciontecho = "Negro";
	$("#colortecho").html(opciontecho);
}
function cambiarColorLlanta (datos) 
{
	var opcionllanta = datos.currentTarget.id;
	$("#imgllanta").attr("src", opcionllanta+".png")
	if(opcionllanta == "llantas1") opcionllanta = "Baratas";
	if(opcionllanta == "llantas2") opcionllanta = "Caras";
	$("#colorllanta").html(opcionllanta);
}