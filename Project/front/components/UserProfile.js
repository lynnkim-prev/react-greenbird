import {Avatar, Card} from "antd";
import React from "react";

const UserProfile = () => {
    const dummy = {
        nickname: 'LynnKim',
        Post: [],
        Followings: [],
        Followers: [],
        isLoggedIn: false
    };

    return(
        <Card
            actions={[
                <div key="tweet">Tweets<br />{dummy.Post.length}</div>,
                <div key="following">Followings<br />{dummy.Followings.length}</div>,
                <div key="follower">Followers<br />{dummy.Followers.length}</div>
            ]}
        >
            {/*user data*/}
            <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>} // L
                title={dummy.nickname} // LynnKim
            />
        </Card>
    )
}

export default UserProfile;