const RevopushSvg = ({ height = 400, width = 400 }) => (
  <div style={{ width, height, overflow: "hidden" }}>
    <img
      className="VPImage logo"
      src="/logo.svg"
      alt="Logo"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  </div>
);

export default RevopushSvg;
