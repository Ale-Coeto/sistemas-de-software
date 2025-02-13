import RectangleCol from "../components/RectangleCol";

const GridPage = () => {
    const size = 5;
    const rows: boolean[] = getRows();

    function getRows() {
        const rows = [];
        for (let i = 0; i < size; i++) {
            rows.push((i % 2 == 0))
        }
        console.log(rows)
        return rows;
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col gap-2">
                {rows.map((even, index) => (
                    <RectangleCol key={index} size={size} even={even} color1={"red"} color2={"blue"} />
                ))}
            </div>
        </div>
    )
}

export default GridPage;