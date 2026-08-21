import type { Role, Session } from "@/types";

export const demoAccounts: {
  login: string;
  password: string;
  home: string;
  session: Session;
}[] = [
  { login: "08032201194", password: "kano123", home: "/marketplace", session: { role: "customer", name: "Maryam Yusuf", phone: "0803 220 1194", title: "Customer" } },
  { login: "maryam@kanohub.ng", password: "kano123", home: "/marketplace", session: { role: "customer", name: "Maryam Yusuf", phone: "0803 220 1194", title: "Customer" } },
  { login: "08034412290", password: "kano123", home: "/merchant", session: { role: "merchant", name: "Aisha Abdullahi", phone: "0803 441 2290", title: "Aisha Fashion House" } },
  { login: "aisha@kanohub.ng", password: "kano123", home: "/merchant", session: { role: "merchant", name: "Aisha Abdullahi", phone: "0803 441 2290", title: "Aisha Fashion House" } },
  { login: "08064412291", password: "kano123", home: "/logistics", session: { role: "rider", name: "Abdullahi Musa", phone: "0806 441 2291", title: "Kano Express rider" } },
  { login: "08053310091", password: "kano123", home: "/supplier", session: { role: "supplier", name: "Hassan Dangote", phone: "0805 331 0091", title: "Kano Textile Mills" } },
  { login: "mill@kanohub.ng", password: "kano123", home: "/supplier", session: { role: "supplier", name: "Hassan Dangote", phone: "0805 331 0091", title: "Kano Textile Mills" } },
  { login: "ops@kanohub.ng", password: "kano123", home: "/admin", session: { role: "admin", name: "Halima Usman", phone: "0700 000 0001", title: "Platform ops" } },
  { login: "bank@kanohub.ng", password: "kano123", home: "/bank", session: { role: "bank", name: "Ibrahim Credit", phone: "0700 000 0002", title: "Participating bank desk" } },
  { login: "loans@kanohub.ng", password: "kano123", home: "/loans", session: { role: "loans", name: "Halima Usman", phone: "0700 000 0003", title: "Loan officer" } },
  { login: "soc@kanohub.ng", password: "kano123", home: "/security", session: { role: "security", name: "Tunde Ade", phone: "0700 000 0004", title: "SOC analyst" } },
  { login: "exec@kanohub.ng", password: "kano123", home: "/executive", session: { role: "executive", name: "Board view", phone: "0700 000 0005", title: "Executive" } },
  { login: "08072201188", password: "kano123", home: "/agent", session: { role: "agent", name: "Sadiya Ibrahim", phone: "0807 220 1188", title: "KanoHub agent · Kwari" } },
  { login: "agent@kanohub.ng", password: "kano123", home: "/agent", session: { role: "agent", name: "Sadiya Ibrahim", phone: "0807 220 1188", title: "KanoHub agent · Kwari" } },
  { login: "assoc@kanohub.ng", password: "kano123", home: "/association", session: { role: "association", name: "Alhaji Musa Kwari", phone: "0809 441 7701", title: "Kantin Kwari Traders Association" } },
  { login: "gov@kanohub.ng", password: "kano123", home: "/gov", session: { role: "gov", name: "Dr. Amina Commerce", phone: "0700 000 0006", title: "Ministry of Commerce (view)" } },
];

export function normalizeLogin(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, "");
}

export function roleHome(role: Role) {
  const m: Record<Role, string> = {
    customer: "/marketplace",
    merchant: "/merchant",
    rider: "/logistics",
    supplier: "/supplier",
    admin: "/admin",
    bank: "/bank",
    loans: "/loans",
    security: "/security",
    executive: "/executive",
    agent: "/agent",
    association: "/association",
    gov: "/gov",
  };
  return m[role];
}

export function requiredRole(pathname: string): Role | null {
  if (pathname.startsWith("/merchant")) return "merchant";
  if (pathname.startsWith("/logistics")) return "rider";
  if (pathname === "/supplier" || pathname.startsWith("/supplier/")) return "supplier";
  if (pathname.startsWith("/admin")) return "admin";
  if (pathname.startsWith("/bank")) return "bank";
  if (pathname.startsWith("/loans")) return "loans";
  if (pathname.startsWith("/security")) return "security";
  if (pathname.startsWith("/executive")) return "executive";
  if (pathname.startsWith("/agent")) return "agent";
  if (pathname.startsWith("/association")) return "association";
  if (pathname.startsWith("/gov")) return "gov";
  if (pathname.startsWith("/wholesale/cart") || pathname.startsWith("/wholesale/checkout") || pathname.startsWith("/merchant/wholesale"))
    return "merchant";
  if (pathname.startsWith("/customer") || pathname.startsWith("/cart") || pathname.startsWith("/checkout")) return "customer";
  if (pathname.startsWith("/settings") || pathname.startsWith("/notifications")) return "any" as unknown as Role;
  return null;
}

/** Settings/notifications allowed for any signed-in user */
export function isSignedInRoute(pathname: string) {
  return pathname.startsWith("/settings") || pathname.startsWith("/notifications");
}
