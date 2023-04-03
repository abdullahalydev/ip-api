function bodyValidation() {
    return new Promise((resolve, reject) => {
        var failed = false;

        for (let i = 0; i < arguments.length; i++) {
            const argument = arguments[i];
            if (!argument) {
                failed = true;
                resolve(false);
                break;
            };
        }
        
        if (!failed) { 
            resolve(true)
        }
    }) 
}

module.exports = bodyValidation;