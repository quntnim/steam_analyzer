import { Link, useNavigate  } from 'react-router-dom'
import './Home.css'
import main from '../img/main.png'


const Home = () => {
    const navigate = useNavigate();
    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            navigate("./success");
        }
      };
    return (
        <div>
            <div className='content'>
                <h1>Hello, Steam Analyst</h1>
                <p>It's basically a homework site, but this is for filling in the letters 
                <div></div>Just analyze the steam lol</p>
                <div>
                    <button className='btn1'>
                        <span className='btn1t'>Analyzed person</span>
                    </button>
                    <button className='btn2'>
                        <span className='btn2t'>Source Code</span>
                    </button>
                </div>
            </div>
            <p className='padd'/>
            <h1 className='content2'>Steam Analyst에서 여러분의 Steam profile을 분석하세요!</h1>
            <div className='content2'>
                <input type="text" className='input' onChange={handleOnKeyPress} placeholder='스팀 프로필 링크를 입력해주세요'></input>
                <Link to ="/success">
                    <button className='sbtn'>
                        <span className='sbtncol'>분석하기</span>
                    </button>
                </Link>
            </div>
            <p className='padd'/>
            <div className='content2'>
                <img className="main" src={main}/>
            </div>
        </div>
    )
}

export default Home;