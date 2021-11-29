$('#formLogin').submit(function(e){
    e.preventDefault();
    var usuario = $.trim($("#usuario").val());
    var password = $.trim($("#password").val());

    if(usuario.length == "" || password == ""){
        Swal.fire({
            type:'warning',
            title:'Debe ingresar un usuario y/o password',

        });
        return false;
    }else{
        $.ajax({
            url:"bd/login.php",
            type:"POST",
            datatype: "json",
            data: {usuario:usuario, password:password},
            success:function(data){
                if(data == "null"){
                    Swla.fire({
                        type:'error',
                        titles:'Usuario y/o password incorrecta',

                    });
                }else{
                    Swla.fire({
                        type:'success',
                        titles:'!Conexion exitosa¡',
                        confirmBottonColor:'#3085d6',
                        confirmBottonText:'Ingresar',
                    }).the((result) =>{
                        if(result.value){
                            window.location.href = "vistas/pag_inicio.php";
                        }
                    })

                }
            }

        });
        
    }
});
