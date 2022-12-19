import '../../App.css'
import { Navbar } from './Navbar';

export function AdminHome(){
    return(
        <div className="homepage">
            <Navbar />
            <img className='homeimage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_KTGKHE4fWwTl0jb8-G5ltpWVsr8sJauuA&usqp=CAU" alt="mobilestore"/>
        </div>
    );
}