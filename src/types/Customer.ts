class Customer {
    customer_id: number = 0;
    customer_name: string = "";
    customer_avatar: string = "";
    customer_phone: string = "";
    customer_email: string = "";
    customer_address: string = "";

    constructor(data?: Partial<Customer>) {
        Object.assign(this, data);
    }
}