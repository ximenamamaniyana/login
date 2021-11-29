<?php
class Conexion{
    public static function Conectar(){
        define('servidor','sql304.eshost.com.ar');
        define('nombre_bd','eshos_30341553_login_2019');
        define('usuario','eshos_30341553');
        define('password','123456');
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
        try{
            $conexion = new PDO("mysql:host=".servidor.";dbname=".nombre_bd, usuario, password, $opciones);
            return $conexion;
        }catch (Exception $e){
            die("El error de conexion es :".$e->getMessage());
        }
    }
}
?>