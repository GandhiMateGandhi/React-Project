import "./Users.scss"
import NoImageSRC from "../../img/UserPhoto.jpg";
import Loader from "../common/Loader/Loader";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {
    let usersElement = () => props.users.map(user =>
        <div className="UserItem" id={user.id} key={user.id}>
            <NavLink to={'/Profile/' + user.id}>
                <img src={user.photos.small || NoImageSRC} alt="User"/>
                <p>{user.name} </p>
            </NavLink>
            {user.followed ?
                <button onClick={() => {
                    props.unfollow(user.id)
                }}>Unfollow</button> :
                <button onClick={() => {
                    props.follow(user.id)
                }}>Follow</button>}
        </div>
    )

    return (
        <div className="Users">
            <Paginator {...props}/>
            {props.isFetching ? <Loader/> : null}
            {usersElement()}
        </div>
    );
}
export default Users;