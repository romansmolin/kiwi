import { Suspense } from "react";
import { LoadingSkeleton } from "@/components";

export default function Admin() {
    return (
        <Suspense fallback={<LoadingSkeleton />}>
            roma
        </Suspense>
    )
}
