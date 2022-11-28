import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>메인 페이지 에요</h1>
            <p>집가고싶다.</p>
            <Link to='/Second'>2번 페이지로 가기</Link>
        </div>
    )
}

export default Home;