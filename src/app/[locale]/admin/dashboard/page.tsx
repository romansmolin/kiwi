import { Suspense } from "react";
import { LoadingSkeleton } from "@/components";

export default function AdminDashboard() {
    return (
        <Suspense fallback={<LoadingSkeleton />}>
            roma
        </Suspense>
    )
}
