import axios from 'axios';

export class usersService{
        private static serverURL:string="https://jsonplaceholder.typicode.com/";

        public static getAllusers(){
            let dataURL:string=`${this.serverURL}users`;
            return axios.get(dataURL);
        }
}