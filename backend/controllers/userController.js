const users = require('../Models/userschema')

// Register
exports.register = async (req, res) => {
    console.log("Register request received");
    console.log(req.body);

    // const file = req.file.filename
    const { email,password } = req.body

    if (!email || !password) {
        res.status(403).json("All inputs are required")
    }

    try {
        const preUser = await users.findOne({ email })
        console.log("PreUser", preUser);
        if (preUser) {
            res.status(406).json("Employee already registered")
        } else {
            console.log("inside else case");
            const newUser = new users({
                email,password
            })
            console.log("new user created");

            await newUser.save()
            console.log("New user", newUser);
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

// Register
exports.login = async (req, res) => {
    console.log("login request received");
    console.log(req.body);

    // const file = req.file.filename
    const { email,password } = req.body

    if (!email || !password) {
        res.status(403).json("All inputs are required")
    }

    try {
        const preUser = await users.findOne({ email })
        console.log("PreUser", preUser);
        if (preUser.password===password) {
            res.status(200).json('login successfully')
        } else {

            res.status(406).json('please register')
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.addimage = async (req, res) => {
    console.log('uploads');
}