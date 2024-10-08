import { Suspense } from "react";
import { LoadingSkeleton } from "@/components";
import AdminSignIn from "@/views/AdminSignIn/AdminSignIn";

export default function Admin() {
    return (
        <Suspense fallback={<LoadingSkeleton />}>
            <AdminSignIn />
        </Suspense>
    )
}
