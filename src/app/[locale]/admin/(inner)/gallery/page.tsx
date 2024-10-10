import { Suspense } from "react";
import { LoadingSkeleton } from "@/components";
import AdminDashboard from "@/views/AdminDashboard/AdminDashboard";
import AdminGallery from "@/views/AdminGallery/AdminGallery";

export default function GalleryPage() {
    return (
        <Suspense fallback={<LoadingSkeleton />}>
            <AdminGallery />
        </Suspense>
    )
}
