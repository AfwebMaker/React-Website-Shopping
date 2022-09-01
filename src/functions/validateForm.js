export const validate = data => {
    const errors = {}

    if(!data.userName.trim()){
        errors.userName = "نام کاربری ضروری می باشد."
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