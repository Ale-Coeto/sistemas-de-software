interface RectangleProps {
    color: string;
}

const Rectangle = ({color} : RectangleProps) => {
    return (
        <div style={{backgroundColor: color}} className="w-64 h-32"> </div>
    )
}

export default Rectangle;