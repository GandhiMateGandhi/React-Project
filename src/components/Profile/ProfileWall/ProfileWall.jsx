import './ProfileWall.scss'
import WallPost from "./WallPost/WallPost";

const ProfileWall = () => {

    let postsData = [
        {id: 1, text: 'How\'re you?', likesCount: 3},
        {id: 2, text: 'Let\'s do party tonight!', likesCount: 1},
        {id: 3, text: '*post*', likesCount: 13},
        {id: 4, text: 'Hello sweety!', likesCount: 6},
        {id: 5, text: '*picture*', likesCount: 22}
    ]

    let postsComponent = postsData.map( post => <WallPost text={post.text} likesCount={post.likesCount}/>)

    return (
        <div className="ProfileWall">
            {postsComponent}
        </div>
    );
}

export default ProfileWall;