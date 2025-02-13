import Link from "next/link";
import GreenRectangle from "../components/GreenRectangle";

const Page2 = () => {
    return (
        <div>
            <GreenRectangle />
            <Link href="/"> Go back </Link>
        </div>
    )
}

export default Page2;