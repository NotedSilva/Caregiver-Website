import User from '../Controllers/userController.js';

export const updateUser = async (req, res) => {
    const id = req.params.id;

    try{

        const updateUser = await User.findByIdAndUpdate(id, {$set: req.body}, {new:true});

        res.status(200).json({success:true, message: "Atualização feita com sucesso", data:updateUser});

    }catch (err) {

        res.status(500).json({success:false, message: "Atualização falhou"});

    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try{

        await User.findByDelete(id,);

        res.status(200).json({success:true, message: "Deletado com sucesso"});

    }catch (err) {

        res.status(500).json({success:false, message: "Falha ao deletar"});

    }
};

export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try{

        const user = await User.findById(id,);

        res.status(200).json({success:true, message: "Usuário encontrado", data:user});

    }catch (err) {

        res.status(404).json({success:false, message: "Usuário não encontrado"});

    }
};

export const getAllUser = async (req, res) => {

    try{

        const users = await User.find({});

        res.status(200).json({success:true, message: "Usuários encontrados", data:users});

    }catch (err) {

        res.status(404).json({success:false, message: "Usuários não encontrados"});

    }
};