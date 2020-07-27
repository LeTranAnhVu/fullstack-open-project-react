import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getCurrentFullPath} from '../helpers/urlHelpers';
import './UserStatus.scss'
import BubbleButton from "./common/BubbleButton";
import UserPopup from "./common/UserPopup";
import history from "../helpers/history";
import CartPopup from "./common/CartPopup";

const UserStatus = () => {
    const [isShowPopup, setIsShowPopup] = useState(false);
    const dispatch = useDispatch();

    const currentUser = useSelector(state => {
        return state.currentUser;
    });

    const goTo = (path) => {
        let currentUrl = getCurrentFullPath();
        if (currentUrl.startsWith('/register')) {
            currentUrl = currentUrl.substring('/register'.length);
        } else if (currentUrl.startsWith('/login')) {
            currentUrl = currentUrl.substring('/login'.length);
        }
        if (currentUrl.startsWith('?redirect_url=')) {
            history.push(path + currentUrl);
        } else {
            history.push(path + '?redirect_url=' + currentUrl);
        }
    };
    return (
        <div className='user-status'>
            {
                currentUser ?
                    <div className="login-status">
                        <button onClick={()=> setIsShowPopup(!isShowPopup)} className="user-icon-wrap">
                            <FontAwesomeIcon color="#228be5" icon={['fa', 'user']}/>
                        </button>
                        {isShowPopup ? <UserPopup userInfo={currentUser} onClose={() => setIsShowPopup(!isShowPopup)} width='250px' top='100%' right='0'/> : null}
                    </div>
                    :
                    <div className="guess-status">
                        <BubbleButton color='white' style={{display: 'block', margin: '0', padding: '8px 30px'}}
                                      onClick={() => goTo('/login')}>Sign in</BubbleButton>
                        <BubbleButton color='white' style={{display: 'block', marginLeft: '5px', padding: '8px 30px'}}
                                      onClick={() => goTo('/register')}>Register</BubbleButton>
                    </div>
            }
        </div>
    )
};

export default UserStatus;