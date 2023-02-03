import React, { useEffect } from "react";
import Avatar from "boring-avatars";
import { Icon } from "./Icons"

const Header = ({
  handleMessage,
  dynamicClass,
  dynamicContent,
  todos
}) => {

  useEffect(function(){
    handleMessage(`applied as your theme.`)
  }, [])

  return(
    <div className="header d-flex flex-align-center flex-content-between">
      <div className="header-info">
        <h3>Thu – 2 Feb, 2023</h3>
        <p>{todos.length ? `${todos.length} open task` : 'No task'}</p>
      </div>
      <div className="header-content">
        <div className='notification'>
          <Icon name='notification' stroke='#666' strokeWidth={1.5} size={22} />
          <span>1</span>
        </div>
        <div className="account-avatar" onMouseEnter={() => handleMessage('You can find the setting here')}>
          <Avatar
            size={40}
            name="Maria Mitchell"
            variant="marble"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />

          <div className={`dynamic-notif ${dynamicClass.join(' ')}`}>
            <div className="dynamic-content">{dynamicContent}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;