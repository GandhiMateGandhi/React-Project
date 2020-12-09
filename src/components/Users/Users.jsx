import './Users.scss'
import * as axios from "axios";

class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items);
            })
        }
    }

    usersElement = this.props.users.map(user =>
        <div id={user.id}>
            <p>Name: {user.name} </p>
            {/*<p>Status: {user.status} </p>*/}
            {/*<p>City: {user.location.city} </p>*/}
            {/*<p>Country: {user.location.country} </p>*/}
            <br/>

        </div>)

    follow = () => {
        this.props.follow();
    };

    unfollow = () => {
        this.props.unfollow();
    }

    render() {
        return (
            <div className="Users">
                {this.usersElement}
            </div>
        );
    }

}

export default Users;