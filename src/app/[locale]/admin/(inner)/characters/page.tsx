import { Suspense } from "react";
import { LoadingSkeleton } from "@/components";
import AdminDashboard from "@/views/AdminDashboard/AdminDashboard";

export default function AdminDashboardPage() {
    return (
        <Suspense fallback={<LoadingSkeleton />}>
            <AdminDashboard />
        </Suspense>
    )
}
