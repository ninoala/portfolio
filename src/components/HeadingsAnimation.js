//the animation component that maps over each character in the heading and 
//creates a child span element with a key and two classes to apply two different animation effects

const HeadingsAnimation = ({ letterClassName, headingArray, index }) => {
  return (
    <span className="word">
      {
        headingArray.map((char, i) => (
          <span key={char + i} className={`${letterClassName} _${i + index}`}>
            {char}
          </span>
        ))
      }
    </span>
  )
}

export default HeadingsAnimation;