import { Link } from 'react-router-dom'
import './Login.css'
import img from '../img/steam.png'

const Login = () => {
    return (
        <div>
            <div className='mid'>
                <img className="logo" src={img}/>
                <p>Steam analyst와 Steam을 연동하여 추가 정보를 가져올 수 있습니다.</p>
                <p>Steam Web API에서 </p>
                <p>( 프로필 이름, 아바타, 비공개 게임 목록, 도전과제 )</p>
                <p>을/를 가져옵니다.</p>
                <button className='loginbtn'>
                    <img className="btnlogo" src={img}/>
                    <span className='btntxt'>스팀을 통해 로그인</span>
                </button>
            </div>
            
        </div>
    )
}

export default Login;