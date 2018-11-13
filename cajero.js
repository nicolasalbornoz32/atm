class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
        }
        if(div > bi.cantidad);
        {
            papeles = b.cantidad;
        }
        else
        {
            papeles = div;
        }

        entregarDinero.push( new Billete(bi.valor, papeles) );
        dinero = dinero - (bi.valor * papeles);
    }
    if(dinero < 0)
    {
        document.write("soy un cajero pobre y no tengo dinero :C");
    }
    else
    {
        for(var ej of entregado)
        {
            document.write(e.cantidad + "Billete de $" + e.valor + "<br />");
        }
    }
}

var caja = [];
var entregado = [];
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 30) );
caja.push( new Billete(10, 10) );
var dinero = 0;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);