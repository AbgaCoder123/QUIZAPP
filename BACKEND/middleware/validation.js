const joi = require("joi");

// <=================================== VALIDATE STEP ONE ========================================>
const StepOne_schema = joi.object({
  email: joi
    .string()
    .required()
    .email({
      maxDomainSegments: 2,
      tlds: { allow: ["com", "net", "uk"] },
    })
    .messages({
      "string.empty": "Email is required",
      "string.email": "Email is invalid",
    }),
  password: joi
    .string()
    .required()
    .min(6)
    .regex(/(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/)
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base": `Password must contain: small letters, capitals letters and number`,
      "string.min": "Password must be at least 6 characters",
    }),
});
const ValidateStepOne = (req, res, next) => {
  const { error } = StepOne_schema.validate(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  } else {
    return next();
  }
};

// <=================================== VALIDATE STEP TWO ========================================>

const StepTwo_schema = joi.object({
  fullname: joi
    .string()
    .required()
    .trim()
    .min(3)
    .max(50)
    .regex(/^[A-Za-z\s]+$/)
    .messages({
      "string.empty": "Fullname is required",
      "string.pattern.base": "Fullname is invalid",
      "string.min": "Fullname is invalid",
      "string.max": "Fullname is too long",
    }),
  username: joi
    .string()
    .required()
    .trim()
    .min(3)
    .max(19)
    .regex(/^[A-Za-z][A-Za-z0-9_]*[0-9]$/)
    .messages({
      "string.empty": "Username is required",
      "string.pattern.base": "Invalid Username",
      "string.min": "Username is too short",
      "string.max": "Username is too long",
    }),
});
const ValidateStepTwo = (req, res, next) => {
  const { error } = StepTwo_schema.validate(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  } else {
    return next();
  }
};

// <=================================== VALIDATE LOGIN ========================================>

const LOGIN_schema = joi
  .object({
    user: joi
      .alternatives()
      .try(
        joi
          .string()
          .required()
          .email({
            maxDomainSegments: 2,
            tlds: { allow: ["com", "net", "uk"] },
          }),
        joi
          .string()
          .required()
          .trim()
          .min(3)
          .max(19)
          .regex(/^[A-Za-z][A-Za-z0-9_]*[0-9]$/)
      )
      .messages({
        "alternatives.match": "Invalid username or email",
      }),
    password: joi
      .string()
      .required()
      .min(6)
      .regex(/(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/)
      .messages({
        "string.empty": "Password is required",
        "string.pattern.base": `Password must contain: small letters, capitals letters and number`,
        "string.min": "Password must be at least 6 characters",
      }),
  })
  .or("user");
const ValidateLogin = (req, res, next) => {
  const { error } = LOGIN_schema.validate(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  } else {
    return next();
  }
};
module.exports = { ValidateStepOne, ValidateLogin, ValidateStepTwo };
