export default function Txt({ fontSize = '16px', color = 'white', lineHeight, marginTop, txtAlign, fontWeight, children }) {
    return (
        <p style={{ fontSize: fontSize, color: color, lineHeight: lineHeight, marginTop:marginTop, textAlign:txtAlign, fontWeight:fontWeight }}>{children}</p>
    );
}

