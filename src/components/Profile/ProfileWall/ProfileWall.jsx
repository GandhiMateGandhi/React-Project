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

    return (
        <div className="ProfileWall">
            <WallPost text={postsData[0].text} likesCount={postsData[0].likesCount}/>
            <WallPost text={postsData[1].text} likesCount={postsData[1].likesCount}/>
            <WallPost text={postsData[2].text} likesCount={postsData[2].likesCount}/>
            <WallPost text={postsData[3].text} likesCount={postsData[3].likesCount}/>
            <WallPost text={postsData[4].text} likesCount={postsData[4].likesCount}/>
        </div>
    );
}

export default ProfileWall;