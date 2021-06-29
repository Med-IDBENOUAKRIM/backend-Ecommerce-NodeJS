const mongoose = require('mongoose')
const uuid = require('uuid')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 25,
        trim: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 35,
        trim: true,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
    },
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    }


}, { timestamps: true })

userSchema.virtual('password')
.set(function(password){
     this._password = password;
     this.salt = uuid.v1()
     this.hashed_password = this.cryptPassword(password)
})

userSchema.methods = {

    authenticate: function(text){
        return this.cryptPassword(text) === this.hashed_password;
    },

    cryptPassword: function(password) {
        if(!password){ return '' }

        try {
            return crypto.createHmac('sha1', this.salt)
                    .update(password).digest('hex')
        } catch (err) {
            return ''
        }
    }
}

module.exports = mongoose.model('User', userSchema)