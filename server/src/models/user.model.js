const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');


const reqString = {type: String, required: true}

const userSchema = new Schema({
    firstName: reqString,
    lastName: reqString,
    email: reqString,
    password: reqString,
    gender: reqString,
    dateOfBirth: reqString,
},{
    versionKey: false,
    timestamps: true
})

userSchema.pre('save', async function (next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,8);
    }
    return next();
})


userSchema.methods.checkPassword = async function (password) {
    return bcrypt.compare(password, this.password).then((res) => res);
}

module.exports = model('user',userSchema);