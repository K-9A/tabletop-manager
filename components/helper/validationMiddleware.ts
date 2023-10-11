import { NextApiRequest, NextApiResponse } from 'next';

//Use the Yup Schema to validate inputs in the API front
const validateWithSchema = (schema, handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await schema.validate(req.body);
        return handler(req, res); // Proceed to the main handler if validation passes
    } catch (error) {
        res.status(400).json({ error: error.message }); // Send error response if validation fails
    }
};

export default validateWithSchema;