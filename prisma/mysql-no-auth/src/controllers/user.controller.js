import { prisma } from "../config/initial.config.js";

export const create_user = async (req, res) => {
    try {
        const { name , email } = req.body;
        const user = await prisma.user.create({
            data : {
                name : name,
                email : email
            }
        })
        
        if(!user){
            return res.status(404).json({
                message : "user not created "
            })
        }
        return res.status(200).json({
            message : "user  created successfully"
        })
        
    } catch (error) {

        res.status(500).json({
            message : "Error creating user: " + error.message
        })
        process.exit(1);
    }
};

export const get_users = async (req, res) => {
    try {

        const user = await prisma.user.findMany();
        
        if(user.length === 0){
            return res.status(404).json({
                message : "No  Found Users "
            })
        }
        return res.status(200).json({
           data : user
        })
        
    } catch (error) {

        res.status(500).json({
            message : "Error Failed  user: " + error.message
        })
        process.exit(1);
    }
};
