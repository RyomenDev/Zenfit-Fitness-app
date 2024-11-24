

import onlineIcon from "../../../../../assets/icons/onlineIcon.png";
import closeIcon from "../../../../../assets/icons/closeIcon.png";

const InfoBar = ({ room }) => (
  <div className="flex items-center justify-between bg-blue-500 rounded-t-lg h-16 px-4">
    {/* Left side of the InfoBar displaying the room name and online status */}
    <div className="flex items-center text-white space-x-2">
      <img className="w-6 h-6" src={onlineIcon} alt="online icon" />
      <h3 className="text-lg">{room}</h3>
    </div>

    {/* Right side of the InfoBar with a close button to leave the chat */}
    <div>
      <a href="/" className="hover:opacity-75">
        <img className="w-6 h-6" src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
