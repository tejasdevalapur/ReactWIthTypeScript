import { IUser } from "../types/IUser";

export class UserService{
    
    private static users:IUser[]=[
        {
            sno:"AAV01",
            name:"Tejas",
            age: 25,
            title: 'Software Engineer',
            Company: 'LSEG'

        },
        {
            sno:"AAV02",
            name:"Tejasd",
            age: 25,
            title: 'Software Engineer',
            Company: 'Amazon'

        },
        {
            sno:"AAV03",
            name:"DTejas",
            age: 25,
            title: 'Software Engineer',
            Company: 'Google'

        }
    ];

    public static getAllUsers(){
        return this.users;
    }
}