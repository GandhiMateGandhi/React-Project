import "./Users.scss"
import * as axios from "axios";
import * as React from "react";
import NoImageSRC from "../../img/UserPhoto.jpg"

class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageUsersCount}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
        }
    }

    usersElement = () => this.props.users.map(user =>
        <div className="UserItem" id={user.id}>
            <img src={user.photos.small || NoImageSRC} alt="User image"/>
            <p>{user.name} </p>
        </div>
    )

    follow = () => {
        this.props.follow();
    };

    unfollow = () => {
        this.props.unfollow();
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageUsersCount}`).then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        let totalPagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageUsersCount);
        let pages = [];

        for (let i = 1; i < totalPagesCount; i++) {
            pages.push(i);
            if (i >= 10) {
                break
            }
        }

        return (
            <div className="Users">

                {pages.map(page =>
                    <span onClick={() => this.onPageChange(page)}
                          className={this.props.currentPage === page && "Users-PaginationItem"}>{page}, </span>
                )}

                {this.usersElement()}
            </div>
        );
    }

}

export default Users;