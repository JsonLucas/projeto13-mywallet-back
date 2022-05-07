import mongoose from 'mongoose';

export const User = mongoose.model('user', {
    name: String,
    email: String,
    password: String
});

export const Movimentation = mongoose.model('movimentation', {
    userId: String,
    type: Number,
    value: Number,
    description: String,
    date: String,
    balance: Number
})

export const Session = mongoose.model('session', {
    userId: String,
    token: String
});
