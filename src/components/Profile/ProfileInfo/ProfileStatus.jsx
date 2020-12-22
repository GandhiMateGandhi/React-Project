import "./ProfileInfo.scss";
import * as React from "react";

class ProfileStatus extends React.Component {
    state = {
        isToggleOn: false,
        status: this.props.status
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className="ProfileStatus">
                {this.state.isToggleOn ? <div>
                        <input onChange={this.onStatusChange} onBlur={this.handleClick} autoFocus={true}
                               value={this.state.status}/>
                    </div> :
                    <div className="ProfileStatus-Input" onClick={this.handleClick}>
                        <p>{this.props.status || 'Status is empty'}</p>
                    </div>
                }


            </div>
        )
    }
}

export default ProfileStatus;