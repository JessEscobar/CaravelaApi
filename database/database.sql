CREATE DATABASE prueba1030569305;

CREATE TABLE public.clientes
(
    id SERIAL,
    id_fiscal numeric NOT NULL,
    password varchar(20),
    empresa varchar(20), 
    correo varchar(100),
    telefono numeric,
    direccion varchar(200) ,
    contacto varchar(100) ,
    telefono_contacto numeric,
    mail_contacto varchar(100) ,
    pais varchar(50) ,
    activo boolean,
    fecha_creacion date,
    fecha_inactivo date NULL,
    CONSTRAINT clientes_pkey PRIMARY KEY (id, id_fiscal)
)

CREATE TABLE public.facturas
(
    id SERIAL,
    id_fiscal numeric NOT NULL,
    Fecha_Factura date,
    Valor_Factura double precision,
    moneda varchar(20),
    Estado_Factura varchar(20),
    Pais_factura varchar(20),
    CONSTRAINT facturas_pkey PRIMARY KEY (id, id_fiscal)
)
insert into facturas(id_fiscal,fecha_factura,valor_factura,moneda,estado_factura,pais_factura) VALUES(5199822,'2020-05-12',120000,'pesos','pendiente','colombia')
insert into facturas(id_fiscal,fecha_factura,valor_factura,moneda,estado_factura,pais_factura) VALUES(5199822,'2020-06-22',2220000,'pesos','pagada','venezuela')
insert into facturas(id_fiscal,fecha_factura,valor_factura,moneda,estado_factura,pais_factura) VALUES(1030569305,'2019-01-22',55000000,'pesos','pagada','colombia')
insert into facturas(id_fiscal,fecha_factura,valor_factura,moneda,estado_factura,pais_factura) VALUES(1030569305,'2020-12-22',155000000,'pesos','pendiente','colombia')
insert into facturas(id_fiscal,fecha_factura,valor_factura,moneda,estado_factura,pais_factura) VALUES(10305639305,'2020-12-22',155000000,'pesos','pendiente','colombia')