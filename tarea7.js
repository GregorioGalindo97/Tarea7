let edad=20;
if(edad>=18){
    alert('VALIDO');
}
    else{
        alert('NO VALIDO');
    }

let familia=[
    {nombre:'Gregorio', Edad:25, ocupacion:'Empleado'},
    {nombre:'Mariana', Edad:17, ocupacion:'Estudiante'},
    {nombre:'Teresa', Edad:52, ocupacion:'Empleada'},
    {nombre:'Ana', Edad:40, ocupacion:'Maestra'}
];

for (let i= 0; i< familia.length; i++) {
    console.log('Nombre del familiar:'+familia[i].nombre+' Edad:'+ familia[i].Edad+' ¿A que se dedica? '+ familia[i].ocupacion);
}

let edad1=80;
switch ((0<=edad1 && edad1<=10)? 0: (60<=edad1 && edad1<=100)? 1:2){
    case 0:
        console.log('Tiene un descuento de 50%');
        break;
    case 1:
            console.log('Tiene un descuento del 35%');
            break;
    default:
        console.log('Tiene un descuento del 10% en dulceria');
        break;
}