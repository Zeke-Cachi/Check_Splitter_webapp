import { useState } from "react"

const ParticipantCard = ({hideElements, showElements}) => {

  const [name, setName] = useState("")
  const [isNameSubmitted, setIsNameSubmitted] = useState(false)

  const handleName = (e) => {
    setName(e.target.value);
  }

const switchTrue = (e) => {
  e.preventDefault()  
  name == "" ? alert('please enter a name') : setIsNameSubmitted(true)
}

const switchFalse = (e) => {
  e.preventDefault()  
  setIsNameSubmitted(false)
}



  return (
    <div className="bg-red-200 text-black w-[15rem] h-[10rem]">
        <form onSubmit={switchTrue} className={hideElements(isNameSubmitted)}>
          <input 
            className="border-blue-300 border-[3px] w-full"
            type="text" 
            placeholder="Insert participant name here"
            onChange={handleName} />
        </form>

        <h3 className={showElements(isNameSubmitted)}>{name}</h3>

        <form className={showElements(isNameSubmitted)}>
          <input type="checkbox" />
        </form>

        <button className={hideElements(isNameSubmitted)} onClick={switchTrue}>Submit</button>

        <button className={showElements(isNameSubmitted)} onClick={switchFalse}>Edit</button>

    </div>
  )
}

export default ParticipantCard