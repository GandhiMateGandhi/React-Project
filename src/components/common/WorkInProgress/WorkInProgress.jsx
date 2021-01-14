import Loader from "../Loader/Loader";
import './WorkInProgress.scss'

export const WorkInProgress = () => {
    return (
        <div className="WorkInProgress">
            <h1>Work in progress :)</h1>
            <Loader />
        </div>
    )
}