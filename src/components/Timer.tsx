export const Timer = () => {
  return (
    <div className="timer">
      <big>
        05<small>m</small> 00<small>s</small>
      </big>
      <progress value={50} max={100} className="inactive" />
      <footer>
        <button className="btnPrimary">Start</button>
        <button>Reset</button>
      </footer>
    </div>
  );
};
