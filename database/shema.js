import mongoose from 'mongoose';

export const User = mongoose.model('user', {
    name: String,
    email: String,
    password: String,
    movimentations: Object
});

export const Session = mongoose.model('session', {
    userId: String,
    token: String
});
/*
movimentation: { 
    value,
    description
    date
}
*/
