/* PROCESO: (para los primeros 3 usuarios) suscribirse al newsletter con nombre y correo electronico y recibir una camiseta o un tote bag gratis. Si el ususario escoge una camiseta debe elegir la talla, si escoge el tote no. Tambien debe escoger el lugar de residencia para calcular el tiempo de entrega */

for(i=0; i<=3; i++){
    function pedirDatosUsuario (regalo){
        let nombre = prompt("Name");
        let email = prompt("Email address");

        if(regalo=="tote"){
            console.log("Hola "+nombre+" gracias por suscribirte a mi newsletter! Has escogido una "+regalo+" de regalo");
        }else if(regalo=="camiseta"){
            console.log("Hola "+nombre+" gracias por suscribirte a mi newsletter! Has escogido una "+regalo+" de regalo. Por favor escoge la talla a continuacion");

            let talla = prompt("Escoge tu talla (S,M o L)");
            switch (talla){
                case "S":
                    console.log("Has escogido la talla S");
                    break;
                case "M":
                    console.log("Has escogido la talla M");
                    break;
                case "L":
                    console.log("Has escogido la talla L");
                    break;
                default:
                    console.log("Has escogido una talla no valida");
                    break;
            }
        }
    }

    pedirDatosUsuario (prompt("Escoge 'camiseta' o 'tote'"));

    function lugarDeEnvio (region){
        if(region=="america"){
            console.log("El tiempo estimado de envio son 10 dias");
        }else if(region=="europa"){
            console.log("El tiempo estimado de envio son 20 dias");
        }else if(region=="asia"){
            console.log("El tiempo estimado de envio son 30 dias")
        }
    }

    lugarDeEnvio (prompt("Por favor escoge la region de envio 'america', 'europa' o 'asia'"));
    console.log(i+" usuario(s) registados al newsletter");
}