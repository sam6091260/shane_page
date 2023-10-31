import ok from "../assets/ok_hand.png";

function Section() {
  return (
    <>
      <section>
        <div className="section-top">
          <img src={ok} alt="ok" />
          <img src={ok} alt="ok" />
          <img src={ok} alt="ok" />
        </div>
        <div className="section-bottom">
          <p>User Interface Design</p>
          <p>Graphic Design</p>
          <p>Logo</p>
          <p>Brand</p>
          <p>Digital illustration</p>
        </div>
      </section>
    </>
  );
}

export default Section;
