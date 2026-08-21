"use client";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Badge, Button, Card } from "@/components/ui";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function Page() {
  const { toast, logout } = useStore();
  const router = useRouter();
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6">
        <h1 className="text-2xl font-extrabold">Security</h1>
        <Card className="mt-4 space-y-2 p-4 text-sm">
          <p>
            2FA <Badge tone="green">On</Badge>
          </p>
          <p>Transaction PIN set</p>
          <p>Last login: today 08:41 · Chrome on Android · Tarauni</p>
          <Button variant="outline" onClick={() => toast("PIN reset SMS queued")}>
            Reset PIN
          </Button>
          <Button
            variant="danger"
            className="ml-2"
            onClick={() => {
              logout();
              router.push("/login");
            }}
          >
            Sign out
          </Button>
        </Card>
      </div>
      <CustomerBottom />
    </div>
  );
}
