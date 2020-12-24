const {Pool} = require('pg');


const config = {
    host: 'bdtestdesarrollador.postgres.database.azure.com',
    user: 'adminbddesarrollocr@bdtestdesarrollador',     
    password: 'MM9ZHY6idYJ0i',
    database: 'prueba1030569305',
    port: 5432,
    ssl: true               
};

const pool = new Pool(config);

const getClientes =async(req,res)=>{            
    try{
        const id_fiscal=req.params.id_fiscal;
        const response=await pool.query ('SELECT * FROM clientes WHERE id_fiscal=$1',[id_fiscal]);
        console.log({Entidad: response.rows},{msg:'exitoso'});
        res.status(200).json({entidad:response.rows});        
    }catch(e){
        console.log(e);
        res.status(400).json({msg:'error'});
    }
};

const getFacturas = async(req,res)=>{
    try{
        const id_fiscal = req.params.id_fiscal;
        const response = await pool.query ('SELECT id as FacturaNumero,id_fiscal,fecha_factura,valor_factura,moneda,estado_factura,pais_factura FROM facturas WHERE id_fiscal=$1',[id_fiscal]);
        console.log(response.rows);
        res.status(200).json(response.rows);

    }catch(e){
        console.log(e);
        res.send({"estado":"error"}); 
    }
};

const putClientes = async(req,res)=>{
    const {id_fiscal,password,empresa,correo,telefono,direccion,contacto,telefono_contacto,mail_contacto,pais,activo,fecha_creacion,fecha_inactivo} = req.body;
    const validar = await pool.query('select id_fiscal from clientes where id_fiscal=$1',[id_fiscal]); 
    const count = validar.rowCount;
    const fechaCreacion = Date();
    try{
    if (count==0){
        await pool.query('INSERT INTO clientes(id_fiscal,password,empresa,correo,telefono,direccion,contacto,telefono_contacto,mail_contacto,pais,activo,fecha_creacion,fecha_inactivo) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)',[id_fiscal,password,empresa,correo,telefono,direccion,contacto,telefono_contacto,mail_contacto,pais,activo,fecha_creacion,null]);
        res.send({"estado":"Ok"});
    }
    res.send({"estado":"error"});    
    }
    catch(e){
        res.send({"estado":e});   
    }
};

const putFacturas = async(req,res)=>{
    const {id_fiscal,fecha_factura,valor_factura,moneda,estado_factura,pais_factura} = req.body;
    if (count==0){
        await pool.query('insert into facturas(id_fiscal,fecha_factura,valor_factura,moneda,estado_factura,pais_factura) VALUES($1,$2,$3,$4,$5,$6)',[id_fiscal,fecha_factura,valor_factura,moneda,estado_factura,pais_factura]);
        res.send({"estado":"Ok"});
    }
    res.send({"estado":"error"});    
};
module.exports = {
    getClientes,
    putClientes,
    getFacturas,
    putFacturas
};                                      