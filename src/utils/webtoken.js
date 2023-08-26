import jwt from "jsonwebtoken";

const SECRET_KEY = "lpURj72024";

export const createWebToken = (payload, exp = "1d") => {
  try {
    const token = jwt.sign({ id: payload }, SECRET_KEY, {
      expiresIn: exp,
    });
    console.log({ token });
    return token;
  } catch (error) {
    console.log({ error });
    return error;
  }
};

export const verifyWebToken = async (token) => {
  try {
    const res = await jwt.verify(token, SECRET_KEY);
    console.log({ res });
    return res;
  } catch (error) {
    console.log({ error });
    return error;
  }
};
