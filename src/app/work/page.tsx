import { Metadata } from "next";
import { WorkList } from "@/components/work/WorkList";

export const metadata: Metadata = {
    title: "Selected Work | Rishi",
    description: "Case studies of high-converting websites designed for photographers, lawyers, and service businesses.",
};

export default function WorkPage() {
    return <WorkList />;
}
