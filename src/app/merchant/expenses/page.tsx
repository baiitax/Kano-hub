"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, Input, Modal, PageHead, Select } from "@/components/ui";
import { expenses, naira } from "@/data/mock";
import { useState } from "react";
import { useStore } from "@/lib/store";

export default function Page() {
  const [open, setOpen] = useState(false);
  const { toast } = useStore();
  const total = expenses.reduce((s, e) => s + e.amount, 0);
  return (
    <AppShell>
      <PageHead title="Expenses" sub={`This month ${naira(total)}`} actions={<Button onClick={() => setOpen(true)}>Add expense</Button>} />
      <Card className="divide-y">
        {expenses.map((e) => (
          <div key={e.id} className="flex justify-between p-4 text-sm">
            <div>
              <p className="font-medium">{e.category}</p>
              <p className="text-slate-500">{e.note} · {e.date}</p>
            </div>
            <p className="font-semibold">{naira(e.amount)}</p>
          </div>
        ))}
      </Card>
      <Modal open={open} onClose={() => setOpen(false)} title="Add expense">
        <div className="space-y-3">
          <Select label="Category">
            {["Rent", "Transport", "Utilities", "Salary", "Marketing", "Inventory", "Maintenance", "Other"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </Select>
          <Input label="Amount" defaultValue="15000" />
          <Input label="Description" />
          <Button
            onClick={() => {
              toast("Expense recorded");
              setOpen(false);
            }}
          >
            Save
          </Button>
        </div>
      </Modal>
    </AppShell>
  );
}
