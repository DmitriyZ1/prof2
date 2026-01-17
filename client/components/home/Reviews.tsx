import { useState, useEffect } from "react";
import { HOST } from "@/options";
import classNames from "classnames";
import "./Reviews.scss"

export default function Reviews() {

  interface Comments {
    id: string,
    pic: string
  }

  interface SizeElem {
    width: number,
    margin: number
  }

  type WhichWay = "left" | "right"
  type CursorGrap = "grab" | "grabbing"

  const [commentsArr, setCommentsArr] = useState<Comments[]>([])
  const [sizeElem, setSizeElem] = useState<SizeElem>({ width: 0, margin: 0 })
  const [twistBlock, setTwistBlock] = useState<number>(0)

  const [isPressed, setIsPressed] = useState<boolean>(false)
  const [isPull, setIsPull] = useState<boolean>(false)
  const [cursorX, setCursorX] = useState<number>(0)
  const [cursor, setCursor] = useState<CursorGrap>('grab')


  function resizeWidth() {
    let divW = window.document.querySelector('.reviews__cards')?.getBoundingClientRect().width
    let winW = window.innerWidth
    setTwistBlock(0)
    if (divW) {
      if(winW < 900){
        setSizeElem({ width: divW / 1 - 50, margin: 25 })
      } else if (winW < 1100) {
        setSizeElem({ width: divW / 2 - 50, margin: 25 })
      } else if (winW < 1300) {
        setSizeElem({ width: divW / 3 - 50, margin: 25 })
      } else {
        setSizeElem({ width: divW / 4 - 50, margin: 25 })
      }
    } else {
      setSizeElem({ width: 307, margin: 25 })
    }
  }

  useEffect(() => {
    resizeWidth()
    uploadData()
    addEventListener('resize', resizeWidth);
    return (() => {
      removeEventListener('resize', resizeWidth)
    })
  }, [])

  async function uploadData() {
    const data = await fetch(`${HOST}/reviews`)
    const result = await data.json()
    setCommentsArr(result)
  }

  useEffect(() => {
    if (isPressed) {
      setCursor('grabbing')
    } else {
      setCursor('grab')
    }
  }, [isPressed])

  // const createStars = (n: number): JSX.Element[] => new Array(n)
  //   .fill('')
  //   .map((i, ix) => <img src='./svg/star.svg' className="star-icon" alt="star" key={ix} />)


  const twistSlider = (whichWay: WhichWay) => {
    let divW = window.document.querySelector('.reviews__cards')?.getBoundingClientRect().width
    let max = commentsArr.length * (sizeElem.width + sizeElem.margin * 2)
    if (whichWay === 'left') {
      setTwistBlock(tw => {
        let twist = tw + (sizeElem.width + sizeElem.margin * 2)
        if (twist > 0) {
          return 0
        } else if (isPull && divW) {
          setIsPull(false)
          return 0
        }
        return twist
      })
    } else if (whichWay === 'right') {
      setTwistBlock(tw => {
        let twist = tw - (sizeElem.width + sizeElem.margin * 2)
        if (divW && (max - (-twist) - divW) < 0) {
          return -(max - divW)
        } else if (isPull && divW) {
          setIsPull(false)
          return -(max - divW)
        }
        return twist
      })
    }
  }

  const mouseDown = (e: React.MouseEvent) => {
    setIsPressed(true)
    setIsPull(true)
    setCursorX(e.pageX - twistBlock)
  }

  const mouseMove = (e: React.MouseEvent) => {
    let divW = window.document.querySelector('.reviews__cards')?.getBoundingClientRect().width
    let max = commentsArr.length * (sizeElem.width + sizeElem.margin * 2)
    if (!isPressed) return
    e.preventDefault()
    if (divW) {
      let place = e.pageX - cursorX
      if (place > 0) {
        setTwistBlock(0)
        setIsPull(false)
      } else if ((max - (-place) - divW) < 0) {
        setTwistBlock(-(max - divW))
        setIsPull(false)
      } else {
        setTwistBlock(e.pageX - cursorX)
      }
    }
  }

  const touchStart = (e: React.TouchEvent) => {
    setIsPressed(true)
    setIsPull(true)
    setCursorX(e.changedTouches[0].pageX - twistBlock)
  }

  const touchMove = (e: React.TouchEvent) => {
    let divW = window.document.querySelector('.reviews__cards')?.getBoundingClientRect().width
    let max = commentsArr.length * (sizeElem.width + sizeElem.margin * 2)
    if (!isPressed) return
    if (divW) {
      let place = e.changedTouches[0].pageX - cursorX
      if (place > 0) {
        setTwistBlock(0)
        setIsPull(false)
      } else if ((max - (-place) - divW) < 0) {
        setTwistBlock(-(max - divW))
        setIsPull(false)
      } else {
        setTwistBlock(e.changedTouches[0].pageX - cursorX)
      }
    }
  }

  const stopPressed = () => {
    setIsPressed(false)
  }

  return (
    <div className="reviews">
      <h4 className="reviews__title">Отзывы</h4>
      <div className="reviews__content">
        <div className="reviews__scrolling-left reviews__arrow-scroll" onClick={() => { twistSlider('left') }}>
          <img width="25" height="25" src="./svg/left-arrow.svg" alt="" />
        </div>
        <div className="reviews__scrolling-right reviews__arrow-scroll" onClick={() => { twistSlider('right') }}>
          <img width="25" height="25" src="./svg/right-arrow.svg" alt="" />
        </div>
        <div className="reviews__cards">
          <ul className={classNames("reviews__list", { "twist": !isPressed })}
            style={{ transform: `translateX(${twistBlock}px)`, cursor: cursor }}
            onMouseDown={mouseDown}
            onMouseMove={mouseMove}
            onMouseUp={stopPressed}
            onMouseLeave={stopPressed}
            onTouchStart={touchStart}
            onTouchMove={touchMove}
            onTouchEnd={stopPressed}>
            {
              commentsArr.map(item => (
                <li className="reviews__item rev-item" key={item.id} style={{ width: sizeElem.width, margin: sizeElem.margin }}>
                  <div className="rev-item__content">
                    <img src={`${HOST}/pic-rev/${item.pic}`} alt="" className="rev-item__img" draggable="false"/>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )

}