import { Link } from "react-router-dom";

type Props = {
  to: string,
  bg?: string,
  text: string,
  textColor: string,
  onClick?: () => Promise<void>
}

function NavigationLink(props: Props) {
  const { to, bg = "", text, textColor } = props;
  return (
    <Link className="nav-link" to={to} style={{ background: bg, color: textColor }}>
      {text}
    </Link>
  )
}

export default NavigationLink;