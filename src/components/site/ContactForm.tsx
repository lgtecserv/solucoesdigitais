import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

export function ContactForm() {
  const { t } = useI18n();
  const [service, setService] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(t.contact.form.success);
    (e.target as HTMLFormElement).reset();
    setService("");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">{t.contact.form.name}</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company">{t.contact.form.company}</Label>
          <Input id="company" name="company" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">{t.contact.form.email}</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">{t.contact.form.phone}</Label>
          <Input id="phone" name="phone" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label>{t.contact.form.service}</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger><SelectValue placeholder={t.contact.form.chooseService} /></SelectTrigger>
          <SelectContent>
            {t.services.items.map((s) => (
              <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">{t.contact.form.message}</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>
      <Button type="submit" size="lg" className="mt-2 justify-self-start">{t.contact.form.submit}</Button>
    </form>
  );
}
