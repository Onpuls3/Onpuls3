const edad = prompt ("¿Que edad tenes?");
if(edad >= 18){
    alert ("Sos mayor de edad");
} else {
    alert ("No sos mayor de edad");
}

switch (new Date().getDay()){
    case 0:
        day = "Domingo";
        alert(day);
        break;
    case 1:
        day = "Lunes";
        alert(day);
        break;
    case 2:
        day = "Martes";
        alert(day);
        break;
    case 3: 
        day = "Miercoles";
        alert(day);
        break;
    case 4:
        day = "Hoy es Jueves";
        alert(day);
        break;
    case 5:
        day = "Viernes";
        alert(day);
        break;
    case 6:
        day = "Sabado";
        alert(day);
        break;
}