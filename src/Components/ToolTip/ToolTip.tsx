import "./ToolTip.css";
interface ToolTipProps {
  text: string;
  style?: object;
}
export default function ToolTip({ text, style }: ToolTipProps) {
  return (
    <span style={style} className='tool-tip-text tool-tip-top'>
      {text}
    </span>
  );
}
