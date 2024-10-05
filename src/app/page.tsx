import { Announcement } from "@/components/announcement";
import LoginForm from "@/components/dashboard-01";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-5">
        <PageHeader>
          <Announcement />
          <PageHeaderHeading>Home</PageHeaderHeading>
          <Separator />
        </PageHeader>
      </div>
      <div className="col-span-5">
        <LoginForm />
      </div>
    </div>
  );
}
