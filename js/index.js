function mostrarOpcionesDePago(costoTotal) 
{
    console.log('** Opciones de Pago **');

    let pagoEnEfectivo = (costoTotal * 12) * 0.85;
    console.log('Pago anual en efectivo (15% de descuento): $' + pagoEnEfectivo.toFixed(2));

    let costoAnual = costoTotal;
    let totalAnualAPagar = 0;
    console.log('Pago en 12 cuotas:');
    for (let mes = 1; mes <= 12; mes++) 
    {
        costoAnual *= 1.20;
        totalAnualAPagar += costoAnual;
        console.log('Cuota ' + mes + ' :$' + costoAnual.toFixed(2));
    }

    console.log('Total a pagar en cuotas: $' + totalAnualAPagar.toFixed(2));
}

function iniciarCotizacion() 
{
    console.log('Bienvenido al Cotizador de Obra Social');
    console.log('En la siguiente ventana emergente ingrese el número de personas por la cual desea cotizar.');
    console.log('Menores de 1 a 18 años: U$D 20 | Mayores de 18 años en adelante: U$D 60 ');

    let cantidadPersonas = parseInt(prompt("Ingrese el número de personas en el plan familiar:"));
    let costoTotal = 0;

    if (cantidadPersonas === 1) 
    {
        let edad = parseInt(prompt('Ingrese la edad de la única persona en el plan familiar:'));
        if (edad < 18) 
        {
            console.log('No se puede cotizar a una única persona menor de edad sin un mayor en la cotización.');
            return;
        }
    }

    for (let i = 0; i < cantidadPersonas; i++) 
    {
        let edad = parseInt(prompt('Ingrese la edad de la persona ' + (i + 1)));
        
        if(edad >= 18) costoTotal += 60;
        else costoTotal += 20;    
    }

    console.log('Cuota Pura: ' + (costoTotal * 12));
    
    // Llamar a la función para mostrar opciones de pago
    mostrarOpcionesDePago(costoTotal);

    alert("Tu cotización tiene una vigencia de 15 días.");
}
