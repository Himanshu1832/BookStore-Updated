export type RegisterFormValues = {
    name: string;
    username: string;
    email: string;
    password: string;
    college_name: string;
    course: string;
    branch: string;
    m_no: string;
    sem: string;
}

export type AddBookFormValues = {
    title: string;
    desc: string;
    img: string;
    date:any;
    uid:number;
    mrp:number;
    price:number;
    college_name: string;
    course: string;
    branch: string;
    sem: string;
    edition: string;
}

export type LoginFormValues = {
    username: string;
    // email: string;
    password: string;
    
}
export type AddCartValues = {
    bookId: number;
    userId: string;
    
}