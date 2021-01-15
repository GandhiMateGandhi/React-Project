import './Preloader.scss';

let Preloader = () => {
    return (
        <div className="Preloader">
            <div className="lds-ellipsis">
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    )
}

export default Preloader;