import React, { useContext, useState,useEffect } from 'react';
import { AuthContext } from '../../../../context/credentials';

const UserMassage = ({massage}) => {
  const { creden } = useContext(AuthContext);
  const [timestamp, setTimestamp] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);


  // Update the time string when the component mounts or when message.timestamp changes
  useEffect(() => {
    // Update the time string when the component mounts or when message.timestamp changes
    if (massage.timestamp) {
      const date = new Date(massage.timestamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const timestamp = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      setTimestamp(timestamp)
    }
  }, [massage.timestamp]);


  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };


  const renderImage = () => (
    <div style={{ wordBreak: 'break-word' }} className={` cursor-pointer relative ml-auto bg-[#D9FDD3] d-flex gap-[1vw] text-[1.5vw] w-fit mt-[0.7vw] px-[0.3vw] py-[0.3vw] rounded`}>
      <img onClick={handleFullScreen} className={`h-[20vw] w-[25vw]  ${isFullScreen ? '  h-[30vw] w-[60vw] ' : ''}`} src={massage.text} alt="dp" />
      {timestamp && (
        <div
          className="absolute z-10 px-2 text-[#ffff] right-0 min-w-fit text-[1.03vw] text-end"
          style={{ wordBreak: 'keep-all', color: '#555', alignSelf: 'flex-end', marginTop: '1.4vw' }}
        >
          {timestamp}
        </div>
      )}
    </div>
  );
  const renderImagePerson = () => (
    <div style={{ wordBreak: 'break-word' }} className={` cursor-pointer relative  bg-[#D9FDD3] d-flex gap-[1vw] text-[1.5vw] w-fit mt-[0.7vw] px-[0.3vw] py-[0.3vw] rounded`}>
      <img onClick={handleFullScreen} className={`h-[20vw] w-[25vw]  ${isFullScreen ? '  h-[30vw] w-[60vw] ' : ''}`} src={massage.text} alt="dp" />
      {timestamp && (
        <div
          className="absolute z-10 px-2 text-[#ffff] right-0 min-w-fit text-[1.03vw] text-end"
          style={{ wordBreak: 'keep-all', color: '#555', alignSelf: 'flex-end', marginTop: '1.4vw' }}
        >
          {timestamp}
        </div>
      )}
    </div>
  );

return (
  <>
    <div className="mx-[3vw]">
      {creden.name === massage.sender ? (
        <div className="d-flex w-[70%] ml-auto bg-[#F4F1EB]">
          {massage.type === 'file' ? renderImage() : (
            <div style={{ wordBreak: 'break-word' }} className={`ml-auto d-flex gap-[1vw] text-[1.5vw] w-fit bg-[#D9FDD3] mt-[0.7vw] px-[1vw] py-[0.6vw] rounded`}>
              {massage.text}
              {timestamp && (
                <div
                  className="min-w-fit text-[1.03vw] text-end"
                  style={{ wordBreak: 'keep-all', color: '#555', alignSelf: 'flex-end', marginTop: '1.4vw' }}
                >
                  {timestamp}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="w-[70%]">
          {massage.type === 'file' ? renderImagePerson() 
        : (
            <div style={{ wordBreak: 'break-word' }} className={`  d-flex gap-[1vw] text-[1.5vw] w-fit bg-[#ffffff] mt-[0.7vw] px-[1vw] py-[0.6vw] rounded`}>
              {massage.text}
              {timestamp && (
                <div
                  className="min-w-fit text-[1.03vw] text-end"
                  style={{ wordBreak: 'keep-all', color: '#555', alignSelf: 'flex-end', marginTop: '1.4vw' }}
                >
                  {timestamp}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  </>
);
};

export default UserMassage;
