exports.userSignUpValidator = (req, res, next) => {

    req.check('name', 'name is important')
        .notEmpty()

    req.check('email', 'Email is required!')
        .notEmpty()
        .isEmail()
        .withMessage('Email should to respect email format');

    req.check('password', 'password is required!')
        .notEmpty()
        .isLength({min: 6, max: 12})
        .withMessage('password must be between 6 and 12')

    
    const errors = req.validationErrors();
    if(errors){
        return res.status(400).json({error: errors[0].msg})
    }
    next()
}