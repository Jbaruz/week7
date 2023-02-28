// WEEK 6 1st
// require modules for the user model 
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let user = mongoose.Schema 
(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        // password:
        // {
        //     type: String,
        //     default: '',
        //     trim: true,
        //     required: 'password is required'
        // },

        email:
        {
            type: String,
            default: '',
            trim: true,
            required: 'email addres is required'
        },
        displayName:
        {
            type: String,
            default: '',
            trim: true,
            required: 'display name is required'
        },
        created:
        {
            type: Date,
            default: Date.now
        },
        updated:
        {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "users"
    }
);

    // confugure options for use model
    let options = ({missingPasswordError: 'wrong/Missing password'});
    user.plugin(passportLocalMongoose, options);
    module.exports.User = mongoose.model('user', user);
