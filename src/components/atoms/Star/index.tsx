import './style.scss'

type StarProps = {
    star: number
}

const Star = ({star}: StarProps) => {
    const element: JSX.Element[] = [];

    for (let i = 0; i < Math.floor(star); i++) {
        element.push(<img src='/images/star-full.svg' key={i}></img>)
    }

    let half = star - Math.floor(star)
    if (Math.round(half) === 1) {
        element.push(<img src='/images/star-half.svg' key={Math.floor(star)}></img>)
    }

    for (let i = 0; i < 5 - Math.round(star); i++) {
        element.push(<img src='/images/star-none.svg' key={Math.floor(star) + i + 1}></img>)
    }

    return (
        <div className="a-star"> 
            {element}
        </div>
    )
}

export default Star