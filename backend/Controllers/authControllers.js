import User from '../models/UsuarioSchema.js';
import Caregiver from '../models/CuidadoresSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


export const register = async (req, res) => {

    const {email, password, name, role, photo, gender} = req.body


    try {
        let user = null

        if(role==='usuario'){
            user =  User.findOne({email})
        }
        else if(role==='cuidador'){
            user = Caregiver.findOne({email:email})
        }

        // checar se o usuário existe
        if(user){
            return res.status(400).json({message: 'Usuário existente'})
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if(role==='usuario'){
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }
        
        if(role==='cuidador'){
            user = new Caregiver({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }



    } catch (err) {}
};

export const login = async (req, res) => {
    try {
    } catch (err) {}
};

