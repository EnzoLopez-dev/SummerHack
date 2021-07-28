var pantallaCarga = new bootstrap.Modal(document.getElementById('pantallaCarga'), {})
let pantallaVacio = document.getElementById('pantallaVacio')
let pantallaLista = document.getElementById('pantallaLista')
let pantallaListaCompra = document.getElementById('pantallaListaCompra')
let pantallaDetalle = document.getElementById('pantallaDetalle')
let guardar = document.getElementById('pantallaCargaAdd').addEventListener('click', function(){
	let producto = document.getElementById('pantallaCargaProducto').value
	let icono = document.getElementById('pantallaCargaIcono').value
	let descripcion = document.getElementById('pantallaCargaDescripcion').value
	if(producto != '' && icono != '' && descripcion != ''){
		document.getElementById('pantallaCargaProducto').value = ""
		document.getElementById('pantallaCargaIcono').value = ""
		document.getElementById('pantallaCargaDescripcion').value = ""
		let modelo = ` <li class="list-group-item pantallaListado__list" data-articulo="${producto}" data-icono="${icono}" data-descripcion="${descripcion}"><img src="${icono}" alt="${producto}" class="pantallaLista__icono"> ${producto} </li>`
		console.log("ouch", producto, icono, descripcion)
		pantallaListaCompra.innerHTML += modelo
		pantallaCarga.hide()
		pantallaVacio.style.display = 'none'
		pantallaLista.style.display = 'block'
	}
	else{
		alert('Debes completar todos los campos amigue')
	}
	
})

let pantallaListaCompraClick = document.getElementById('pantallaListaCompra').addEventListener('click', function(e){
	document.getElementById('pantallaDetalleIcono').src = e.target.getAttribute('data-icono')
	document.getElementById('pantallaDetalleArticulo').innerHTML = e.target.getAttribute('data-articulo')
	document.getElementById('pantallaDetalleDescripcion').innerHTML = e.target.getAttribute('data-descripcion')
	pantallaLista.style.display = 'none'
	pantallaDetalle.style.display = 'block'
})

let pantallaDetalleCerrar = document.getElementById('pantallaDetalleCerrar').addEventListener('click', ()=>{
	pantallaLista.style.display = 'block'
	pantallaDetalle.style.display = 'none'
})

/*Versión Desktop*/
let guardarDesktop = document.getElementById('desktopAdd').addEventListener('click',function(){
	let productoDesktop = document.getElementById('desktopProducto').value
	let iconoDesktop = document.getElementById('desktopIcono').value
	let descripcionDesktop = document.getElementById('desktopDescripcion').value
	document.getElementById('desktopProducto').value = ""
	document.getElementById('desktopIcono').value = ""
	document.getElementById('desktopDescripcion').value = ""
	if(productoDesktop != '' && iconoDesktop != '' && descripcionDesktop != ''){
		document.getElementById('desktopProducto').value = ""
		document.getElementById('desktopIcono').value = ""
		document.getElementById('desktopDescripcion').value = ""
		let modeloDesktop = ` <li class="list-group-item pantallaListado__list" data-articulo="${productoDesktop}" data-icono="${iconoDesktop}" data-descripcion="${descripcionDesktop}"><img src="${iconoDesktop}" alt="${productoDesktop}" class="pantallaLista__icono"> ${productoDesktop} </li>`
		pantallaListaCompra.innerHTML += modeloDesktop
		pantallaCarga.hide()
		pantallaVacio.style.display = 'none'
		pantallaLista.style.display = 'block'
	}
	else{
		alert('Debes completar todos los campos')
	}
	
})

let pantallaDetalleCerrarDesktop = document.getElementById('pantallaDetalleCerrar').addEventListener('click', ()=>{
	pantallaLista.style.display = 'block'
	pantallaDetalle.style.display = 'none'
})