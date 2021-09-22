
function crear_Objeto()
{
    var objeto= document.getElementById("NumeritoPro").value;
    var Objetos = [];
    if(objeto == 1){
        alert("Se creara "+ objeto+ " objeto");
    } 
    else if(objeto<0)
    {
        alert("No sea troll mano :v");
    }
    else
    {
        alert("Se crearan "+ objeto+ " objetos");
    }
    if(objeto>0){
        var i=1;  
        
        while (i<= objeto) {

            var MiObjeto = 
            {
                Id: i,
                Nombre: getRandomArbitrary(1, 10000),
                color: getRandomArbitrary(0, 16777215)  
            }
            // console.log(MiObjeto);
            Objetos[i-1] = MiObjeto;
            i++;
        }        
    } 
    console.log(Objetos);
    return Objetos;
}

function getRandomArbitrary(min, max) {

    var a= Math.random() * (max - min) + min;
    var x = Math.trunc(a);
    return x;
    }








