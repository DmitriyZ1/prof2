import "./Modal.scss"
import classNames from "classnames"

import {useState, useEffect} from 'react'

interface PropsType{
    funClose?: ()=>void,
    children: React.ReactNode,
    fun?: () => void 
}
// {funClose, children}: {funClose: ()=>void, children: React.ReactNode}

export default function Modal(props: PropsType){
    const {children, funClose, fun} = props
    const [dark, setDark] = useState<boolean>(false)
    const [child, setChild] = useState<boolean>(false)
    
    useEffect(() => {
        const t1 = setTimeout(() => {setDark(true)}, 100) 
        const t2 = setTimeout(() => {setChild(true)}, 600) 
    }, [])

    return (
        <div className="modal" onClick={() => (fun) ? fun() : false}>
            <div className={classNames("modal__background", {"modal__dark": dark})}>
                <div className="modal__cross" onClick={(e) => {e.stopPropagation(); (funClose) ? funClose() : false}}>
                    {child && <img src="./svg/cross-svgrepo-com.svg" alt="" width={40} height={40} />}
                </div>
                {child && children}
            </div>
        </div>
    )
} 