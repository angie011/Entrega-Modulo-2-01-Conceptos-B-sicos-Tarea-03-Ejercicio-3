let valorHora = 0;
let cantidadHoras = 0;
let cobro = 0;
let cobroFormato = 0;

valorHora = Number(prompt('Ingrese valor de la hora:'));
cantidadHoras = Number(prompt('Ingrese cantidad de horas parqueo:'));

if(cantidadHoras==0){
    alert('Debe ingresar un valor diferente de cero (0)');
}else{
    if (cantidadHoras<1){
        cantidadHoras = 1;
        cobro = valorHora*cantidadHoras;
    }
    else{
        cobro = valorHora*cantidadHoras;
    }
    
    cobroFormato = cobro.toLocaleString("en-ES",{
    style:"currency",
    currency:"COP"
});
alert(`El cobro del parqueo es de ${cobroFormato}`);
}








