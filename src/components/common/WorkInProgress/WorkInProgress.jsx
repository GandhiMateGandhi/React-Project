import Preloader from "../Preloader/Preloader";
import './WorkInProgress.scss'
import HeartLoader from "../HeartLoader/HeartLoader";

export const WorkInProgress = () => {
    return (
        <div className="WorkInProgress">
            <h1>Work in progress :)</h1>
            <HeartLoader />
            {/*<Preloader />*/}
        </div>
    )
}