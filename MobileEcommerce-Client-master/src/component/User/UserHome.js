import '../../App.css'
import { UserNavbar } from '../User/UserNavbar';

export function UserHome(){
    return(
        <div className="homepage">
            <UserNavbar />
            <img className='homeimage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_KTGKHE4fWwTl0jb8-G5ltpWVsr8sJauuA&usqp=CAU" alt="mobilestore"/>
        </div>
    );
}