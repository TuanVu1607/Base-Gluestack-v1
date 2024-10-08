class User {
    user_id: number = 0;
    user_name: string = "";
    user_avatar: string = "";
    user_phone: string = "";
    user_email: string = "";
    user_address: string = "";
    
    constructor(data?: Partial<User>) {
        Object.assign(this, data);
    }
}