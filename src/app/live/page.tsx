import PersistentDrawerLeft from "../components/Nav2";

const LiveCasinoPage = () => {
  return (
    <div>
      <PersistentDrawerLeft>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 0",
          }}
        >
          <h1>Live Casino Page Coming Soon</h1>
        </div>
        <h2
          style={{
            width: "100%",
            textAlign: "center",
            borderBottom: "1px solid white",
            lineHeight: "0.1em",
            margin: "10px 0 20px",
          }}
        >
          <span style={{ background: "black", padding: "0px 10px" }}>
            Stay tuned we are working on it
          </span>
        </h2>
      </PersistentDrawerLeft>
    </div>
  );
};

export default LiveCasinoPage;
