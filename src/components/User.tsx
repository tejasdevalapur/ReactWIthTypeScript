import React, { useEffect, useState } from 'react';
import {IUser} from './../types/Users';
import {usersService} from './../services/UsersService'
import { AxiosResponse } from 'axios';

interface IProps{};

interface IState{
    loading:boolean;
    users:IUser[];
    errormessage:string;
};
const User:React.FC<IProps> = () => {

    let [state,setState]=useState<IState>({
        loading:false,
        users:[] as IUser[],
        errormessage:''

    })

    useEffect(()=>{
        setState({...state,loading:true});
        usersService.getAllusers().then((response:AxiosResponse<any>)=>{
                setState({
                    ...state,
                    loading:false,
                    users:response.data
                })
        }).catch((error)=>{
            setState({
                ...state,
                loading:false,
                errormessage:error.message
            })
        });
    },[]);

    let {loading,users,errormessage}= state;
  return (
    <React.Fragment>
        <table className='table table-striped repsonsive text-center table-hover '>
            <thead className='bg-dark text-white' >
                <tr>
                    <th>SNo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody >
                   {
                    users.length>0 && 
                    users.map(user=>{
                           return (
                               <tr key={user.id}>
                                   <td>{user.id}</td>
                                   <td>{user.name}</td>
                                   <td>{user.email}</td>
                                   <td>{user.phone}</td>
                                   <td>{user.company.name}</td>
                               </tr>
                           )
                       })
                    }
                </tbody>
        </table>
    </React.Fragment>
  )
}

export default User