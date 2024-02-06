import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (const validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ message: "ERROR", errors: errors.array() });
    };
};
export const loginValidator = [
    body("email").trim().isEmail().withMessage("Valid Email is required"),
    body("password").trim().isLength({ min: 6 }).withMessage("minimum password length is 6")
];
export const signupValidator = [
    body("name").trim().notEmpty().withMessage("Name is required"),
    ...loginValidator
];
//# sourceMappingURL=validators.js.map