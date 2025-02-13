import Rectangle from "./Rectangle"

interface RectangleColProps {
    size: number,
    even: boolean,
    color1: string,
    color2: string
}

const RectangleCol = ({ size, even, color1, color2 }: RectangleColProps) => {
    const colors = getColors();

    function getColors() {
        const colors = []
        for (let i = 0; i < size; i++) {
            if (even) {
                colors.push(i % 2 == 0 ? color1 : color2)
            } else {
                colors.push(i % 2 == 0 ? color2 : color1)
            }
        }

        return colors;
    }


    return (
        <div className="flex flex-row gap-2">
            {colors.map((color, index) => (
                <Rectangle key={index} color={color} />
            ))}
        </div>
    )
}

export default RectangleCol;