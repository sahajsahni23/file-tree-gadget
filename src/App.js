import React from "react"
import { useState } from "react"

function App() {
  return <div>
    <Folder name="Desktop" isOpen={false}>
      <Folder name="Music">
        <File name="all_star.mp4" />
        <File name="express_file.mp4" />
      </Folder>
      <File name="dogs.jpeg" />
      <File name="cats.png" />
    </Folder>
    <Folder name="Applications" />

  </div>
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { name, children } = props
  const [isHover, setIsHover] = useState(true)
  const direction = isOpen ? 'up' : 'down';

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleHover = () => {
    setIsHover(true)
  }

  return <div>
    <span onClick={handleClick} onHover={handleHover} style={isHover ? { cursor: 'pointer' } : { cursor: '' }} >
      <i className="blue folder icon" />
      <i className={`caret { ${direction} } icon`} />
      {name}
    </span>
    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children : null}
    </div>
  </div >
}

const File = (props) => {
  const { name } = props
  const FileExt = name.split(".")[1]
  const Files = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline'
  }
  return <div>
    <i className={`${Files[FileExt]} icon`} />
    {name}
  </div>
}



export default App;
