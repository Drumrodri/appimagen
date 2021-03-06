import {Request,Response} from 'express';
import pool from '../database';

class UsuariosController{
    index(req:Request,res:Response){
        res.json({'message':'Estás Usuarios'});
    }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO usuarios SET ?', [req.body]);
        res.json({'message':'El usuario ha sido creado'});
    }
    public async read(req:Request,res:Response){
        const usuarios=await pool.query('SELECT * FROM usuarios', [req.body]);
        res.json(usuarios);
    }
    public async update(req:Request,res:Response){
        
        await pool.query('UPDATE usuarios set ? WHERE id=?', [req.params.id]);
       
    }
    public async delete(req:Request,res:Response){

        await pool.query('DELETE FROM usuarios WHERE id=?', [req.params.id]);
       
    }
    public async readone(req:Request,res:Response){
        
        const usuarios=await pool.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
       res.json(usuarios);
    }


}
export const usuariosController=new UsuariosController;