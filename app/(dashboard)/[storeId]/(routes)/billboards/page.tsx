import { BillboardClient } from "./components/client";

const Billboardspage = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8">
                <BillboardClient />
            </div>
        </div>
    )
}

export default Billboardspage;