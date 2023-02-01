import { map, scan, tap } from 'rxjs/operators';
import { Observable, merge, Subject, from } from 'rxjs';


interface User {
  id:number;
  name:string;
  age: number;
}

interface UserVm {
  users: User[];
  selectedUser: User;
}
const initialUserVm: UserVm = {
    users: [],
    selectedUser: { id: 0, name: '', age: 0 }
}
export class UserInfo {

    public vmChange : Observable<UserVm>;
    public addUserState = new Subject<User>();
    public deleteUserState = new Subject<User>();
    public detailUserState = new Subject<User>();
    public closeDetailState = new Subject<User>();
  
    constructor() {

      this.vmChange = merge(
        this.getUsersChange,
        this.addUserChange,
        this.deleteUserChange,
        this.detailUserChange,
        //this.closeDetailChange
      ).pipe(
        scan( (oldVm:UserVm, mutateFn:(vm:UserVm)=>UserVm) => mutateFn(oldVm), {users:[],selectedUser:{id:0,name:'',age:0}} as UserVm )
      );
    }
      users:User[] = [
        {id:1, name: 'Hansi', age:44},
        {id:2, name: 'Hansi1', age:45},
        {id:3, name: 'Hansi2', age:46},
      ]
      public getUsersChange = from(this.users).pipe(
        map( items => (vm:UserVm) => ({...vm, items}))
    
      );
    
      private addUserChange = this.addUserState.pipe(
        map( user => (vm:UserVm) => ({...vm, users: [...vm.users ,{id:9, name:user.name, age: user.age}] })),
        //tap((vm:UserVm) => console.log(vm))
      )
      private deleteUserChange = this.deleteUserState.pipe(
        map( user => (vm:UserVm) => ({...vm, users: vm.users.filter(u=>u!==user) }))
      )
    
      private detailUserChange = this.detailUserState.pipe(
        map( selectedUser => (vm:UserVm) => ({...vm, selectedUser }))
      )
      private closeDetailChange = this.closeDetailState.pipe(
        map( _ => (vm:UserVm) => ({...vm, selectedUser:{id:0, name:'', age:0} }))
      )     
    } // end clas
