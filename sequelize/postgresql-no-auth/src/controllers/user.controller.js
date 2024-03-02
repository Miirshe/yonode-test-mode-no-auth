import user_model from "../models/user.model.js";

export const create_user = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Check if the email already exists
        // const existingUser = await user_model.findOne({ where: { email } });
        // if (existingUser) {
        //     return res.status(409).json({
        //         message: "Email already exists",
        //     });
        // }

        const user = await user_model.create({
            name: name,
            email : email
        });

        if (!user) {
            return res.status(404).json({
                message: "User not created",
            });
        }
        return res.status(200).json({
            message: "User created successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating user: " + error.message,
        });
        process.exit(1);
    }
};

export const get_users = async (req, res) => {
    try {

        const user = await user_model.findAll() 
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
