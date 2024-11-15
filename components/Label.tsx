interface LabelProps {
  children?: string,
  bgColor?: string,
  textColor?: string,
  borderColor?: string,
  useStyle? : string
  // TODO: force color
}

const template_styles = [
  { key: "secondary", bgColor: "#e6e6e6", textColor: "#2e2e2e"},
  { key: "react", bgColor: "#bdd6ff", textColor: "#fff", borderColor: "#fff" },
  { key: "js", bgColor: "#d9cd64", textColor: "#fff"},  
]

const Label : React.FC<LabelProps> = (props) => {
  let bgc;
  let txc;
  let boc;

  let defined_color = template_styles.find(x => x.key === props.useStyle);
  let default_color = { bgColor: "#fff", textColor: "#6e6e6e", borderColor: "#6e6e6e" };

  if (defined_color) {
    bgc = defined_color.bgColor;
    txc = defined_color.textColor;
    boc = defined_color.borderColor;
  } else {
    bgc = props.bgColor ? props.bgColor : default_color.bgColor;
    txc = props.textColor ? props.bgColor : default_color.textColor;
    boc = props.borderColor ? props.bgColor : default_color.borderColor;
  }

  return <span className="label" style={{
    backgroundColor: bgc,
    color: txc,
    padding: "3px 10px",
    marginRight: "6px",
    border: `1px solid ${boc}`,
    borderRadius: "15px"
  }}>
    {props.children}
  </span>
}

export default Label