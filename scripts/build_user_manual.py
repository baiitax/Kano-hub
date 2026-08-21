#!/usr/bin/env python3
"""Generate KanoHub User Manual PDF."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY, TA_RIGHT
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
    KeepTogether,
    ListFlowable,
    ListItem,
    HRFlowable,
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.fonts import addMapping
import os

OUT = os.path.join(os.path.dirname(__file__), "..", "KanoHub-User-Manual.pdf")
OUT = os.path.abspath(OUT)

EMERALD = HexColor("#047857")
EMERALD_DK = HexColor("#065f46")
GOLD = HexColor("#d97706")
SLATE = HexColor("#334155")
SLATE_LT = HexColor("#64748b")
BG = HexColor("#ecfdf5")
AMBER_BG = HexColor("#fffbeb")
AMBER = HexColor("#92400e")
LINE = HexColor("#d1fae5")


def styles():
    s = getSampleStyleSheet()
    s.add(
        ParagraphStyle(
            "CoverKicker",
            fontName="Times-Bold",
            fontSize=10,
            textColor=GOLD,
            tracking=1.2,
            spaceAfter=8,
            alignment=TA_CENTER,
        )
    )
    s.add(
        ParagraphStyle(
            "CoverTitle",
            fontName="Times-Bold",
            fontSize=28,
            leading=34,
            textColor=EMERALD_DK,
            alignment=TA_CENTER,
            spaceAfter=8,
        )
    )
    s.add(
        ParagraphStyle(
            "CoverSub",
            fontName="Times-Italic",
            fontSize=13,
            leading=18,
            textColor=SLATE,
            alignment=TA_CENTER,
            spaceAfter=6,
        )
    )
    s.add(
        ParagraphStyle(
            "H1",
            fontName="Times-Bold",
            fontSize=16,
            leading=20,
            textColor=EMERALD_DK,
            spaceBefore=14,
            spaceAfter=8,
        )
    )
    s.add(
        ParagraphStyle(
            "H2",
            fontName="Times-Bold",
            fontSize=13,
            leading=17,
            textColor=EMERALD,
            spaceBefore=10,
            spaceAfter=6,
        )
    )
    s.add(
        ParagraphStyle(
            "H3",
            fontName="Times-Bold",
            fontSize=11,
            leading=14,
            textColor=SLATE,
            spaceBefore=8,
            spaceAfter=4,
        )
    )
    s.add(
        ParagraphStyle(
            "Body",
            fontName="Times-Roman",
            fontSize=10,
            leading=14,
            textColor=SLATE,
            alignment=TA_JUSTIFY,
            spaceAfter=6,
        )
    )
    s.add(
        ParagraphStyle(
            "BulletBody",
            fontName="Times-Roman",
            fontSize=10,
            leading=13.5,
            textColor=SLATE,
            leftIndent=8,
        )
    )
    s.add(
        ParagraphStyle(
            "Callout",
            fontName="Times-Italic",
            fontSize=9,
            leading=12.5,
            textColor=AMBER,
            spaceBefore=4,
            spaceAfter=8,
        )
    )
    s.add(
        ParagraphStyle(
            "Caption",
            fontName="Times-Italic",
            fontSize=8,
            textColor=SLATE_LT,
            alignment=TA_CENTER,
            spaceAfter=8,
        )
    )
    s.add(
        ParagraphStyle(
            "TOC",
            fontName="Times-Roman",
            fontSize=11,
            leading=18,
            textColor=SLATE,
        )
    )
    s.add(
        ParagraphStyle(
            "Cell",
            fontName="Times-Roman",
            fontSize=8,
            leading=11,
            textColor=SLATE,
        )
    )
    s.add(
        ParagraphStyle(
            "CellB",
            fontName="Times-Bold",
            fontSize=8,
            leading=11,
            textColor=EMERALD_DK,
        )
    )
    s.add(
        ParagraphStyle(
            "Footer",
            fontName="Times-Roman",
            fontSize=8,
            textColor=SLATE_LT,
        )
    )
    s.add(
        ParagraphStyle(
            "Mono",
            fontName="Courier",
            fontSize=9,
            leading=12,
            textColor=EMERALD_DK,
        )
    )
    return s


S = styles()


def p(text, style="Body"):
    return Paragraph(text, S[style])


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(i, S["BulletBody"]), leftIndent=12, bulletColor=EMERALD) for i in items],
        bulletType="bullet",
        start="•",
        leftIndent=16,
        bulletFontName="Times-Bold",
        bulletFontSize=10,
        spaceAfter=8,
    )


def table(headers, rows, col_widths=None):
    head = [Paragraph(h, S["CellB"]) for h in headers]
    data = [head]
    for r in rows:
        data.append([Paragraph(str(c), S["Cell"]) for c in r])
    t = Table(data, colWidths=col_widths, repeatRows=1)
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), EMERALD),
                ("TEXTCOLOR", (0, 0), (-1, 0), white),
                ("FONTNAME", (0, 0), (-1, 0), "Times-Bold"),
                ("BACKGROUND", (0, 1), (-1, -1), white),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [white, HexColor("#f0fdf4")]),
                ("GRID", (0, 0), (-1, -1), 0.3, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    return t


def callout(text):
    inner = Paragraph(text, S["Callout"])
    t = Table([[inner]], colWidths=[170 * mm])
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), AMBER_BG),
                ("BOX", (0, 0), (-1, -1), 0.6, GOLD),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    return t


def header_footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    if doc.page == 1:
        canvas.setFillColor(EMERALD)
        canvas.rect(0, h - 18 * mm, w, 18 * mm, fill=1, stroke=0)
        canvas.setFillColor(GOLD)
        canvas.rect(0, h - 19.5 * mm, w, 1.5 * mm, fill=1, stroke=0)
        canvas.setFillColor(EMERALD_DK)
        canvas.rect(0, 0, w, 14 * mm, fill=1, stroke=0)
        canvas.setFillColor(white)
        canvas.setFont("Times-Roman", 8)
        canvas.drawCentredString(w / 2, 6 * mm, "Prototype for demonstration  ·  Not a licensed bank, lender or payment institution")
    else:
        canvas.setFillColor(EMERALD)
        canvas.rect(0, h - 12 * mm, w, 12 * mm, fill=1, stroke=0)
        canvas.setFillColor(white)
        canvas.setFont("Times-Bold", 9)
        canvas.drawString(18 * mm, h - 7.5 * mm, "KanoHub")
        canvas.setFont("Times-Roman", 8)
        canvas.drawRightString(w - 18 * mm, h - 7.5 * mm, "User Manual  ·  Digital Business Infrastructure for Kano")
        canvas.setFillColor(EMERALD_DK)
        canvas.rect(0, 0, w, 12 * mm, fill=1, stroke=0)
        canvas.setFillColor(white)
        canvas.setFont("Times-Roman", 8)
        canvas.drawString(18 * mm, 5 * mm, "© 2026 KanoHub  ·  Illustrative prototype  ·  Partner-powered payments")
        canvas.drawRightString(w - 18 * mm, 5 * mm, "Page %d" % doc.page)
    canvas.restoreState()


def build():
    doc = SimpleDocTemplate(
        OUT,
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=20 * mm,
        bottomMargin=18 * mm,
        title="KanoHub User Manual",
        author="KanoHub",
        subject="How the Kano SME digital commerce and financial ecosystem works",
    )
    story = []
    W = 174 * mm

    # COVER
    story.append(Spacer(1, 42 * mm))
    story.append(p("KANOHUB  ·  VERSION 2026.08  ·  PROTOTYPE", "CoverKicker"))
    story.append(p("User Manual", "CoverTitle"))
    story.append(p("Digital Business Infrastructure for Kano", "CoverSub"))
    story.append(p("How the system works — from mill gate to rumfa to doorstep", "CoverSub"))
    story.append(Spacer(1, 8 * mm))
    story.append(
        table(
            ["Field", "Detail"],
            [
                ["Product", "KanoHub — marketplace, merchant OS, mills, logistics, agents, partners"],
                ["Audience", "SME operators, riders, agents, associations, banks, MDA, investors"],
                ["Demo password", "kano123  (every account)"],
                ["OTP (prototype)", "482910"],
                ["Currency", "Nigerian Naira (₦)"],
                ["Language", "English / Hausa (EN | HA toggle)"],
                ["Date", "21 August 2026"],
            ],
            col_widths=[45 * mm, 125 * mm],
        )
    )
    story.append(Spacer(1, 10 * mm))
    story.append(
        callout(
            "<b>Important.</b> KanoHub is <b>not</b> a licensed bank, microfinance bank, payment service provider or insurer. "
            "Wallets, NIP, cash-assist, T+1 settlement, trade credit and financing screens are <i>illustrative</i> and labelled "
            "as powered by participating licensed financial partners. <b>Financing is not guaranteed.</b> Figures are prototype data, not live market statistics or official government returns. Maps are simulated SVG overlays, not GPS."
        )
    )
    story.append(PageBreak())

    # TOC
    story.append(p("Contents", "H1"))
    toc = [
        "1. What KanoHub is",
        "2. How to sign in and Demo Mode",
        "3. Public website versus shop bar",
        "4. The mill → rumfa → doorstep loop",
        "5. Customer: marketplace, split-cart, tracking, disputes",
        "6. Merchant operating system",
        "7. Supplier OS and B2B wholesale",
        "8. Markets and stall clusters",
        "9. Agent and cash-assist",
        "10. Riders and logistics HQ",
        "11. Association chapter",
        "12. Partner bank and loan desks",
        "13. Settlement, credit-pack and holds",
        "14. Government / MDA view-only desk",
        "15. Admin, SOC and executive",
        "16. Hausa language",
        "17. Trust rules and what not to claim",
        "18. Quick reference — URLs and logins",
    ]
    for line in toc:
        story.append(p(line, "TOC"))
    story.append(PageBreak())

    # 1
    story.append(p("1. What KanoHub is", "H1"))
    story.append(
        p(
            "KanoHub is a digital operating system for Kano State small and medium enterprises. It is not “another Jumia clone”. "
            "It connects mill-gate wholesale (Sharada, Dawanau), rumfa trade (Kantin Kwari, Sabon Gari), neighbourhood agents, "
            "same-metro riders, and — through licensed partners — wallets, settlement and a credit-readiness file a bank relationship manager can open."
        )
    )
    story.append(p("What you can do in this prototype", "H2"))
    story.append(
        bullets(
            [
                "Sell on a public marketplace with product photos, shops and reviews.",
                "Run a merchant OS: POS, stock, books, staff, invoices, tax summary.",
                "Restock from mills in yards, bales, bags and cartons (MOQ).",
                "Pay once across several shops (split-cart) with a partner hold until delivery.",
                "Track a rider on a simulated Kano metro map.",
                "Open a dispute that pauses partner settlement.",
                "Walk Kwari as an agent: onboard a rumfa, cash-in/out (partner rails), USSD kiosk.",
                "Open chapter, bank, loan, SOC, admin, board and MDA desks.",
            ]
        )
    )
    story.append(
        p(
            "The product is a <b>fully navigable Next.js prototype</b>. Buttons work against mock data. Nothing is live NIBSS, SMS or GPS. "
            "That is intentional for investor, government, bank and association walkthroughs."
        )
    )

    # 2
    story.append(p("2. How to sign in and Demo Mode", "H1"))
    story.append(
        p(
            "Open the landing page and choose <b>Sign in</b> or the floating <b>Demo Mode</b> chip (bottom-right). "
            "Every demo account uses password <b>kano123</b>. Phone OTP in onboarding is <b>482910</b>."
        )
    )
    story.append(p("Role protection", "H2"))
    story.append(
        bullets(
            [
                "Each workspace is sandboxed. A rider cannot open the mill OS.",
                "Platform admin may enter other desks. Other roles cannot.",
                "Settings and notifications require any signed-in session.",
                "Wholesale cart/checkout requires the merchant role.",
                "If you hit the wrong desk you are sent to login with a “needs another role” message.",
            ]
        )
    )
    story.append(p("Demo accounts", "H2"))
    story.append(
        table(
            ["Role", "Who", "Login", "Lands on"],
            [
                ["Customer", "Maryam Yusuf (Tarauni)", "maryam@kanohub.ng or 08032201194", "/marketplace"],
                ["Merchant", "Aisha Abdullahi — Aisha Fashion House", "aisha@kanohub.ng or 08034412290", "/merchant"],
                ["Rider", "Abdullahi Musa — bike KE-4412", "08064412291", "/logistics"],
                ["Supplier", "Hassan Dangote — Kano Textile Mills", "mill@kanohub.ng or 08053310091", "/supplier"],
                ["Agent", "Sadiya Ibrahim — Kwari", "agent@kanohub.ng or 08072201188", "/agent"],
                ["Association", "Alhaji Musa Kwari", "assoc@kanohub.ng", "/association"],
                ["Gov / MDA", "Dr. Amina Commerce (view only)", "gov@kanohub.ng", "/gov"],
                ["Admin", "Halima Usman — platform ops", "ops@kanohub.ng", "/admin"],
                ["Bank desk", "Ibrahim Credit — partner bank UI", "bank@kanohub.ng", "/bank"],
                ["Loan point", "Loan officer", "loans@kanohub.ng", "/loans"],
                ["SOC", "Tunde Ade", "soc@kanohub.ng", "/security"],
                ["Executive", "Board view", "exec@kanohub.ng", "/executive"],
            ],
            col_widths=[28 * mm, 48 * mm, 58 * mm, 40 * mm],
        )
    )
    story.append(p("Password for all rows: kano123.", "Caption"))

    # 3
    story.append(p("3. Public website versus shop bar", "H1"))
    story.append(
        p(
            "The landing site and the marketplace do <b>not</b> share a customer cart bar. That was a product decision so government and bank visitors are not dumped into “My orders”."
        )
    )
    story.append(p("Public-domain navbar (home, about, trust, partners…)", "H2"))
    story.append(
        bullets(
            [
                "<b>Solutions</b> mega-menu: merchants, riders, agents, associations, government, mills.",
                "How it works · Markets · Marketplace · Wholesale · Partners · Trust.",
                "EN | HA language chip, Sign in, Create business.",
                "No cart, no bell, no wallet.",
            ]
        )
    )
    story.append(p("Shop navbar (marketplace, product, cart, checkout, customer hub)", "H2"))
    story.append(
        bullets(
            [
                "Search field and Kano pin.",
                "Notifications and cart with quantity badge.",
                "Mobile: Marketplace, Markets, Wholesale, Cart, My orders, Sign in.",
            ]
        )
    )

    # 4
    story.append(p("4. The mill → rumfa → doorstep loop", "H1"))
    story.append(
        table(
            ["Step", "Desk", "What happens"],
            [
                ["1", "Supplier OS / Sharada", "Mill confirms PO, pick-face, van slot to Zoo Road or Kwari gate."],
                ["2", "B2B wholesale floor", "Merchant adds MOQ lines (yards, bales, bags, dozens) and submits a PO."],
                ["3", "Merchant OS", "Stock lands; POS and online catalogue stay in sync; T+1 settlement calendar."],
                ["4", "Split-cart customer", "Maryam pays once for Fashion House + Arewa Beauty; each leg is held."],
                ["5", "Rider", "Abdullahi is assigned; simulated map to Hotoro; delivery releases the hold unless disputed."],
            ],
            col_widths=[18 * mm, 48 * mm, 108 * mm],
        )
    )

    story.append(PageBreak())

    # 5
    story.append(p("5. Customer: marketplace, split-cart, tracking, disputes", "H1"))
    story.append(p("Sign in as Maryam. You land on the marketplace.", "Body"))
    story.append(p("Shop and pay", "H2"))
    story.append(
        bullets(
            [
                "Browse categories, featured shops (Aisha Fashion House, Arewa Beauty, Baita Electronics, Kano Fresh Foods…).",
                "Open a product, add to cart. Mix items from <b>different shops</b>.",
                "Cart groups lines by merchant. Delivery is ₦1,500 <b>per pickup</b>, not per basket.",
                "Checkout: address → split delivery → payment method (Wallet / Card / Transfer via partners) → review holds.",
                "Pay creates a parent basket <b>SPLIT-…</b> and one child order per shop with status <b>Held</b>.",
                "Empty-cart demo checkout still shows two shops so you can walk the split without filling the cart.",
            ]
        )
    )
    story.append(p("Seed basket", "H3"))
    story.append(
        p(
            "SPLIT-2026-441 is already in the tape: Ankara 6-yard × 2 at Aisha Fashion House (held ₦33,000) and Arewa Shea set at Arewa Beauty (held ₦12,500)."
        )
    )
    story.append(p("Track", "H2"))
    story.append(
        bullets(
            [
                "Customer → Orders, or Track from checkout success.",
                "Simulated live map (Zoo Road / Gwale → Hotoro). Caption says prototype, not GPS.",
                "Steps: placed → payment held → merchant processing → rider → pickup → transit → delivered / release.",
                "Rider card: Abdullahi Musa, Kano Express, KE-4412.",
            ]
        )
    )
    story.append(p("Dispute and hold", "H2"))
    story.append(
        bullets(
            [
                "On the track page tap <b>Dispute &amp; hold</b>. Partner settlement for that leg pauses.",
                "Customer → Dispute holds lists DSP-… cases. Release hold is a prototype action.",
                "The same case appears on Merchant disputes and Admin dispute centre.",
                "KanoHub is not an escrow bank. Hold/release is a partner-settlement illustration.",
            ]
        )
    )
    story.append(p("Other customer modules", "H2"))
    story.append(
        p(
            "Wallet, addresses, saved items, following, loyalty, reviews, returns, messages, payment methods, security. "
            "Customer hub is /customer. Bottom dock: Home, Search, Orders, Cart, Me."
        )
    )

    # 6
    story.append(p("6. Merchant operating system", "H1"))
    story.append(p("Sign in as Aisha (Aisha Fashion House, Nassarawa, Kantin Kwari inlet).", "Body"))
    story.append(p("Daily run", "H2"))
    story.append(
        bullets(
            [
                "Home: sales, orders, profit, inventory value, money owed, revenue chart, low stock, <b>live tape</b>.",
                "Range chips: Today / 7 / 30 days (prototype filters).",
                "Phone dock: Home, Orders, <b>POS</b> (centre), Wallet, More.",
                "POS records a counter sale, reduces stock, can credit the partner wallet.",
                "Orders: accept, process, assign rider.",
                "Products / inventory: SKUs, reorder, photos.",
                "Customers CRM, reviews, loyalty, returns.",
                "Suppliers and <b>Wholesale POs</b> — restock from mills.",
                "Expenses, accounting, tax summary, invoices, reports.",
                "Wallet, <b>settlement calendar</b>, <b>credit pack</b>, business banking UI, financing marketplace (offers not guarantees).",
                "Logistics request, analytics, AI assistant (mock), staff roles, business profile.",
            ]
        )
    )
    story.append(
        callout(
            "Credit-readiness <b>742</b> is an <b>indicative platform metric</b>, not a credit-bureau score. "
            "Eligible shops may receive offers from participating licensed partners. Financing is not guaranteed."
        )
    )

    # 7
    story.append(p("7. Supplier OS and B2B wholesale", "H1"))
    story.append(p("Mill desk", "H2"))
    story.append(
        p(
            "Sign in as mill@kanohub.ng (Hassan Dangote, Kano Textile Mills, Sharada). Sidebar: mill command, live tape, purchase orders, quotes, wholesale catalogue, mill stock, merchant buyers, trade credit, mill-to-shop map, dispatch slots, invoices, settlements, MOQ &amp; bales, returns, reports, staff."
        )
    )
    story.append(p("Public B2B floor", "H2"))
    story.append(
        bullets(
            [
                "URL /wholesale — not the consumer marketplace.",
                "Mills: Kano Textile Mills (Kwari fabric), Northern Footwear (Sabon Gari), Arewa Wholesale Foods (Dawanau sacks), Sharada Power Parts.",
                "Units: bundle, piece, roll, carton, dozen, bag, kit. MOQ enforced when adding to cart.",
                "Merchant checkout requests cash, transfer, or 7/14-day trade credit (a <b>request</b> to partners).",
                "Public mill profiles: /suppliers/[id].",
            ]
        )
    )

    story.append(PageBreak())

    # 8
    story.append(p("8. Markets and stall clusters", "H1"))
    story.append(
        p(
            "Open /markets from the public nav. Each cluster is a <b>simulated stall map</b> (rows of rumfa), not a cadastral or GPS map."
        )
    )
    story.append(
        table(
            ["Cluster", "LGA", "Trade"],
            [
                ["Kantin Kwari", "Kano Municipal", "Wax print, guinea brocade, lining, notions"],
                ["Sabon Gari", "Fagge", "Phones, inverters, gensets, France Road"],
                ["Dawanau", "Dawakin Tofa", "Rice bags, beans, oil, dawn trucks"],
                ["Singer Market", "Fagge", "Tailoring machines and spare parts"],
                ["Kofar Wambai", "Kano Municipal", "Household, plastics, cookware"],
                ["Sharada Industrial", "Kumbotso", "Mill gates and power parts"],
            ],
            col_widths=[45 * mm, 40 * mm, 89 * mm],
        )
    )
    story.append(
        p(
            "Stall chips show open / busy / closed. GMV figures are illustrative. Association names (e.g. Kantin Kwari Traders Association) are prototype labels."
        )
    )

    # 9
    story.append(p("9. Agent and cash-assist", "H1"))
    story.append(p("Sign in as Sadiya Ibrahim (AG-KANO-441), cluster Kantin Kwari + Nassarawa.", "Body"))
    story.append(
        bullets(
            [
                "Home: shops live, KYC queue, commission MTD, cash float versus partner limit.",
                "Onboard shop: name, cluster, stall ID (e.g. C22), phone, OTP 482910, storefront photos.",
                "Cash assist: cash-in or cash-out against a shop or phone. Notes stay at the kiosk; the ledger posts on a <b>participating partner wallet</b>.",
                "My shops, listing help, field visits overlaid on the Kwari stall map.",
                "Commission: onboard fee, cash-in %, listing help — paid via partners, not a bank salary.",
                "USSD kiosk: prototype menu *347*KH# for traders without smartphones (1 Cash-in, 2 Cash-out, 3 Balance, 4 Hausa/English).",
            ]
        )
    )
    story.append(
        callout(
            "Cash-in and cash-out are processed by participating licensed financial partners. KanoHub does not take deposits and is not a bank."
        )
    )

    # 10
    story.append(p("10. Riders and logistics HQ", "H1"))
    story.append(p("Rider app", "H2"))
    story.append(
        p(
            "Abdullahi Musa. Dock: Jobs, Queue, Pay, History, More. Accept a job, see simulated navigation, mark picked up / delivered, view earnings and vehicle KE-4412. Job queue shows fee, distance and status badge."
        )
    )
    story.append(p("Company HQ", "H2"))
    story.append(
        p(
            "/logistics/company — dispatch, riders, fleet, zones, SLA, payouts, incidents, pricing, reports. Maps remain simulated overlays."
        )
    )

    # 11
    story.append(p("11. Association chapter", "H1"))
    story.append(
        p(
            "assoc@kanohub.ng — Kantin Kwari Traders Association (Alhaji Musa Kwari). Members/rumfa roll, dues (digital collection via partners if a member pays that way), bulk mill deals (e.g. 200 Ankara bales), training calendar. "
            "<b>This is a chapter workspace, not a regulator or tax authority.</b>"
        )
    )

    # 12
    story.append(p("12. Partner bank and loan desks", "H1"))
    story.append(p("Bank desk (/bank) — bank@kanohub.ng", "H2"))
    story.append(
        p(
            "Overview, live tape, merchant accounts, ledger, NIP/transfers, card acquiring, settlements, exceptions, KYC tiers, treasury/nostro, lending desk, collections, credit risk, AML, limits, reports. Every screen carries partner language."
        )
    )
    story.append(p("Loan point (/loans) — loans@kanohub.ng", "H2"))
    story.append(
        p(
            "Application pipeline, portfolio, collections, products, officers. Offers in the merchant financing marketplace are prototypes of partner products — not KanoHub loans."
        )
    )

    # 13
    story.append(p("13. Settlement, credit-pack and holds", "H1"))
    story.append(p("Settlement calendar — /merchant/settlement", "H2"))
    story.append(
        bullets(
            [
                "T+1 windows (example 22:00 WAT).",
                "GMV, estimated fees, hold amount (disputes + undelivered split legs), net.",
                "Exceptions: DSP-441 shade dispute; SPLIT-2026-441 beauty leg awaiting pickup.",
                "Request payout queues with the participating partner.",
            ]
        )
    )
    story.append(p("Credit pack — /merchant/credit-pack", "H2"))
    story.append(
        p(
            "What a relationship manager actually wants: 90-day GMV (prototype ₦12.84m), order count, returns %, open disputes, on-time payouts, cluster (Kantin Kwari inlet), LGA (Nassarawa), women-owned flag, score 742, GMV run-rate chart. Export is a prototype action. Share with /bank/lending — <b>they underwrite, KanoHub does not</b>."
        )
    )

    story.append(PageBreak())

    # 14
    story.append(p("14. Government / MDA view-only desk", "H1"))
    story.append(
        p(
            "gov@kanohub.ng — dark, read-only pack for Ministry of Commerce, SMEDAN and donor conversations. KPIs (formalised shops, women-owned GMV share ~41%, youth riders, LGA coverage, jobs, Kwari digital GMV), eight metro LGAs, jobs &amp; inclusion, programmes, donor brief."
        )
    )
    story.append(
        callout(
            "Illustrative prototype — not official statistics, not a census, not a tax return. KanoHub is not a government agency."
        )
    )

    # 15
    story.append(p("15. Admin, SOC and executive", "H1"))
    story.append(p("Admin — ops@kanohub.ng", "H2"))
    story.append(
        p(
            "Merchants, customers, orders, catalog, payments, payouts, logistics, suppliers, financial partners, financing, verification, disputes, tickets, risk, audit, analytics, Kano economy, marketing, content, feature flags, staff, announcements, health."
        )
    )
    story.append(p("SOC — soc@kanohub.ng", "H2"))
    story.append(
        p(
            "Command, live tape, alert queue, cases, identities, devices, sessions, fraud lab, payment intel, watchlist, IAM, service health, audit, playbooks, reports."
        )
    )
    story.append(p("Executive — exec@kanohub.ng", "H2"))
    story.append(
        p(
            "Command centre, GMV &amp; take rate, growth, merchant health, customers, unit economics, LGA penetration (map + StatCards), sectors, credit (partners), logistics, jobs &amp; inclusion, enterprise risks, board pack. Confidential styling; figures remain illustrative."
        )
    )

    # 16
    story.append(p("16. Hausa language", "H1"))
    story.append(
        p(
            "Toggle <b>EN | HA</b> in the public header, merchant bar, agent desk, Demo Mode and Settings. Choice is stored as kanohub.lang. Hausa covers nav (Kasuwa, Kasuwoyi, Wakili, Kuɗin hannu), marketplace headings, cluster blurbs and the agent OS. Not every internal English ops label is translated; cluster and agent surfaces are the priority for Sabon Gari and Kwari traders."
        )
    )

    # 17
    story.append(p("17. Trust rules and what not to claim", "H1"))
    story.append(
        table(
            ["Always say", "Never say"],
            [
                ["Illustrative prototype data", "Live GMV / official census"],
                ["Powered by participating licensed financial partners", "KanoHub Bank / KanoHub Pay"],
                ["Financing not guaranteed", "Approved loan / guaranteed facility"],
                ["Credit-readiness is indicative", "Credit bureau score"],
                ["Partner hold / escrow illustration", "KanoHub is your escrow bank"],
                ["Simulated map / stall overlay", "Live GPS / OSM"],
                ["View-only MDA pack", "Ministry system of record"],
            ],
            col_widths=[87 * mm, 87 * mm],
        )
    )

    # 18
    story.append(p("18. Quick reference — URLs", "H1"))
    story.append(
        table(
            ["URL", "Who"],
            [
                ["/", "Public landing (Solutions nav)"],
                ["/marketplace", "Customer shop"],
                ["/markets", "Cluster stall maps"],
                ["/wholesale", "B2B mill floor"],
                ["/merchant", "Merchant OS"],
                ["/merchant/settlement", "T+1 calendar"],
                ["/merchant/credit-pack", "Bank RM pack"],
                ["/supplier", "Mill OS"],
                ["/agent", "Field agent"],
                ["/logistics", "Rider"],
                ["/logistics/company", "Fleet HQ"],
                ["/association", "Kwari chapter"],
                ["/gov", "MDA view only"],
                ["/bank  /  /loans", "Partner finance"],
                ["/security  /  /admin  /  /executive", "Trust, ops, board"],
                ["/login", "All roles · password kano123"],
            ],
            col_widths=[55 * mm, 119 * mm],
        )
    )

    story.append(Spacer(1, 8 * mm))
    story.append(p("How to walk a visitor in five minutes", "H2"))
    story.append(
        bullets(
            [
                "Landing → Solutions → Merchants. Point at mill → rumfa → doorstep.",
                "Demo Mode → Customer. Open SPLIT-2026-441, track, mention partner hold.",
                "Demo Mode → Merchant. Settlement calendar + credit pack 742.",
                "Demo Mode → Agent. Cash-assist disclaimer. Flip HA.",
                "Demo Mode → Gov. View-only, not official stats.",
                "Close: KanoHub is infrastructure; licensed partners move the naira.",
            ]
        )
    )

    story.append(Spacer(1, 10 * mm))
    story.append(HRFlowable(width="100%", thickness=0.6, color=EMERALD, spaceAfter=8))
    story.append(
        p(
            "© 2026 KanoHub. Prototype for demonstration and conversation with SMEs, associations, logistics operators, participating financial institutions, state MDAs and donors. "
            "Payment, banking, cash-assist and financing services, if any, would be provided only through licensed partners.",
            "Body",
        )
    )

    def first_page(c, d):
        header_footer(c, d)

    def later(c, d):
        header_footer(c, d)

    doc.build(story, onFirstPage=first_page, onLaterPages=later)
    print("Wrote", OUT)


if __name__ == "__main__":
    build()
