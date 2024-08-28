import Marquee from "react-fast-marquee";

export const NewsTicker = ({ text }) => {
  return (
    <Marquee
      gradient={false}
      speed={150}
      style={{
        background: "#faf6eb",
        color: "#1A202C",
        fontSize: "18px",
        fontFamily: "primary",
        fontWeight: "500",
        height: "50px",
      }}
    >
      {text.map((item, index) => (
        <span key={index} style={{ marginRight: "100px" }}>
          {item}
        </span>
      ))}
    </Marquee>
  );
};
