import {Avatar, Divider} from 'antd'
import './authotStyle.less'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="" />
                <div className="author-introduction">
                    <Divider>社交账号</Divider>
                    <Avatar  size={28} icon="github" className="account" />
                </div>
            </div>
        </div>
    )
}

export default Author;