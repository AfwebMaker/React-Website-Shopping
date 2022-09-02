export const validate = data => {
    const errors = {}

    if(!data.userName.trim()){
        errors.userName = "نام کاربری ضروری می باشد."
    } else if (!/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(data.tel)) {
        errors.userName = "نام کاربری نامعتبر است."
    } else {
        delete errors.userName
    }

    if(!data.tel){
        errors.tel = " موبایل ضروری می باشد."
    } else if(!/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig.test(data.tel)){
        errors.tel = "شماره موبایل نامعتبر است."
    } else {
        delete errors.tel
    }

    if(!data.password){
        errors.password = "پسورد ضروری است."
    } else if(data.password.length < 8){
        errors.password = "رمز شما کوچک تر از هشت کاراکتر می باشد."
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(data.password)) {
        errors.password = "رمز شما نامعتبر می باشد."
    } else {
        delete errors.password
    }

    return errors
}


export const validateSignIn = data => {
    const errors = {}

    // جای بررسی بیشتر دارد
    if (!data.types) {
        errors.types = "لطفا این قسمت را خالی نگذارید "
    } else if (/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig.test(data.types) 
    && /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(data.types) && /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(data.types) ) {
        errors.types = "نام کاربری یا موبایل یا ایمیل نادرست است."
    } else {
        delete errors.types 
    }
    // 

    if(!data.password){
        errors.password = "پسورد ضروری است."
    } else if(data.password.length < 8){
        errors.password = "رمز شما کوچک تر از هشت کاراکتر می باشد."
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(data.password)) {
        errors.password = "رمز شما نامعتبر می باشد."
    } else {
        delete errors.password
    }

    return errors
}