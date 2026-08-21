"use client";

import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Button, Card, Input } from "@/components/ui";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { toast, session, logout } = useStore();
  const router = useRouter();
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl space-y-4 px-3 py-6">
        <h1 className="text-2xl font-extrabold">Profile</h1>
        <Card className="space-y-3 p-4">
          <Input label="Full name" defaultValue={session?.name || "Maryam Yusuf"} />
          <Input label="Phone" defaultValue={session?.phone || "0803 220 1194"} />
          <Input label="Email" defaultValue="maryam.y@example.com" />
          <Button className="w-full" onClick={() => toast("Profile saved")}>
            Save
          </Button>
        </Card>
        <Button href="/customer" variant="outline" className="w-full">
          Account hub
        </Button>
        <Button
          variant="danger"
          className="w-full"
          onClick={() => {
            logout();
            router.push("/login");
          }}
        >
          Sign out
        </Button>
      </div>
      <CustomerBottom />
    </div>
  );
}
