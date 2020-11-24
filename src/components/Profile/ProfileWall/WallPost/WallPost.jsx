import './WallPost.scss'

const WallPost = ({photo, text, likesCount}) => {

    return (
        <div className="WallPost">
            <div className="WallPost-Photo">{photo}</div>
            <div>{text}</div>
            <div>Likes: {likesCount}</div>
        </div>
    );
}

export default WallPost