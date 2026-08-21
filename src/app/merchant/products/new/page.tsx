"use client";

import { AppShell } from "@/components/chrome";
import { Button, Card, Input } from "@/components/ui";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function NewProduct() {
  const { toast } = useStore();
  const router = useRouter();
  return (
    <AppShell>
      <h1 className="text-2xl font-bold">Add product</h1>
      <Card className="mt-4 grid gap-3 p-6 md:grid-cols-2">
        <Input label="Product name" placeholder="Men’s Kaftan" />
        <Input label="SKU" placeholder="AFH-001" />
        <Input label="Category" defaultValue="Fashion" />
        <Input label="Subcategory" defaultValue="Men’s Wear" />
        <Input label="Purchase cost" defaultValue="42000" />
        <Input label="Selling price" defaultValue="85000" />
        <Input label="Stock quantity" defaultValue="10" />
        <Input label="Reorder level" defaultValue="5" />
        <Input label="Barcode" />
        <Input label="Weight (kg)" />
        <div className="md:col-span-2">
          <Button
            onClick={() => {
              toast("Product saved");
              router.push("/merchant/products");
            }}
          >
            Save product
          </Button>
        </div>
      </Card>
    </AppShell>
  );
}
