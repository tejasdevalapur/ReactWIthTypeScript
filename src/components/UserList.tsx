import React, {useState}from 'react'
import {IUser} from '../types/IUser'
import {UserService} from '../services/userService'
interface IProps{

}
interface IState{
    users:IUser[]
}
const UserList:React.FC<IProps> = () => {

    let [state,setState]=useState<IState>({
        users:UserService.getAllUsers()
    })
  return (
    <React.Fragment>
        <table className='table table-striped repsonsive text-center table-hover '>
            <thead className='bg-dark text-white' >
                <tr>
                    <th>SNo</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Title</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody >
                   {
                       state.users.length>0 && 
                       state.users.map(user=>{
                           return (
                               <tr key={user.sno}>
                                   <td>{user.sno}</td>
                                   <td>{user.name}</td>
                                   <td>{user.age}</td>
                                   <td>{user.title}</td>
                                   <td>{user.Company}</td>
                               </tr>
                           )
                       })
                   }
                </tbody>
        </table>
    </React.Fragment>
  )
}

export default UserList