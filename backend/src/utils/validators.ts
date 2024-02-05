import { Request, Response, NextFunction } from "express";
import { ValidationChain, body, validationResult } from "express-validator";


export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (const validation of validations) {
      const result = await validation.run(req);
      console.log("🚀 ~ return ~ result:", result)
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    console.log("🚀 ~ return ~ errors:", errors)
    if (errors.isEmpty()) {
      return next();
    }
    return res.status(422).json({ message: "ERROR", errors: errors.array() })
  }
}

export const signupValidator = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").trim().isEmail().withMessage("Valid Email is required"),
  body("password").trim().isLength({ min: 6 }).withMessage("minimum password length is 6")
]