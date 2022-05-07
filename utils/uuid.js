import { v4 as uuidv4, validate } from "uuid";

export const generateToken = () => {
    return uuidv4();
}

export const validateToken = (token) => {
    const validation = validate(token);
    return validation;
}