import { Link } from 'react-router-dom'

const Second = () => {
    return (
        <div>
            <h1>두번째 페이지 에요</h1>
            <p>프론트 개발하기 더 싫어요 ㅠㅠㅠㅠㅠㅠㅠ</p>
            <Link to='/'>메인 페이지로 가기</Link>
        </div>
    )
}

export default Second;