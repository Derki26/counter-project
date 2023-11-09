

// eslint-disable-next-line react/prop-types
const SecondsCounter = ({ seconds }) => {
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60).toString().padStart(2, '0');
      const seconds = (time % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    };
  
    return (
      <div className="seconds-counter">
        <i className="fas fa-clock"></i>
        <span>{formatTime(seconds)}</span>
      </div>
    );
  };
  
  export default SecondsCounter;