const bcrypt = require('bcrypt');

const hashUsersPassword = async (pass) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(pass, salt);
        return hashedPassword;
    } catch(err){
        console.log(err);
    }
}

const validateUsersPassword = async (passwordFromClient, passwordFromDB) => {
    try {
        if(await bcrypt.compare(passwordFromClient, passwordFromDB)){
            return true;
        } else {
            return false;
        }
    } catch(err){
        console.log(err);
    }
}

module.exports = {
    hashUsersPassword,
    validateUsersPassword
};