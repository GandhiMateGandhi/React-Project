import "./Users.scss"
import NoImageSRC from "../../img/UserPhoto.jpg";
import Loader from "../common/Loader/Loader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let usersElement = () => props.users.map(user =>
        <div className="UserItem" id={user.id} key={user.id}>
            <NavLink to={'/Profile/' + user.id}>
                <img src={user.photos.small || NoImageSRC} alt="User"/>
                <p>{user.name} </p>
            </NavLink>
            {user.followed ?
                <button onClick={() => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + user.id, {
                        withCredentials: true,
                        headers: {
                        "API-KEY": "aa1d7afd-2718-49c1-8b3b-83366cf45bb6"
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                props.unfollow(user.id)
                            }
                        })
                }}>Unfollow</button> :
                <button onClick={() => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + user.id, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "aa1d7afd-2718-49c1-8b3b-83366cf45bb6"
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(user.id)
                            }
                        })
                }}>Follow</button>}
        </div>
    )

    let totalPagesCount = Math.ceil(props.totalUsersCount / props.pageUsersCount);
    let pages = [];

    for (let i = 1; i < totalPagesCount; i++) {
        pages.push(i);
        if (i >= 10) {
            break
        }
    }
    return (
        <div className="Users">
            <div className="Pagination">

                {pages.map(page =>
                    <span onClick={() => props.onPageChange(page)}
                          className={props.currentPage === page && "Pagination-Item"}>{page}, </span>
                )}
            </div>
            {props.isFetching ? <Loader/> : null}

            {usersElement()}
        </div>
    );
}
export default Users;
