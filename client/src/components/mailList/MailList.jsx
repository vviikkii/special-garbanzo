import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Gyorsabban, olcsóbban!</h1>
      <span className="mailDesc">Iratkozzon fel, és a legjobb ajánlatokban részesül</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Az Ön e-mail címe" />
        <button>Feliratkozás</button>
      </div>
    </div>
  )
}

export default MailList