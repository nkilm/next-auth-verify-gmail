export default function Home() {
  return (
    <>
      <form>
        <h1>Enter your Gmail</h1>

        <div className="mail-input">
          <input type="mail" required />
          <button className="btn" type="submit">
            Verify
          </button>
        </div>
      </form>
    </>
  );
}
