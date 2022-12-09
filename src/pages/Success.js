import { Link } from 'react-router-dom'
import { Document, Page, pdfjs } from "react-pdf";
import './Success.css'
import analysis from '../img/analysis.png'

const Success = () => {
    return (
        <div>
            <div className='scontent2'>
                <img className="mainc" src={analysis}/>
            </div>
        </div>
    )
}

export default Success;