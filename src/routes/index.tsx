import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  Bot,
  BookOpen,
  Boxes,
  ChevronDown,
  CircleUserRound,
  Gauge,
  Inbox,
  LockKeyhole,
  MessageCircleMore,
  RefreshCw,
  Settings,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard WhatsApp | Ceibo AI" },
      {
        name: "description",
        content: "Métricas comerciales en tiempo real del asistente de ventas por WhatsApp de Ceibo AI.",
      },
      { property: "og:title", content: "Dashboard WhatsApp | Ceibo AI" },
      {
        property: "og:description",
        content: "Rendimiento comercial en tiempo real del asistente Ceibo AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const activity = [
  ["12 Ago", 116, 24], ["13", 128, 25], ["14", 121, 22], ["15", 132, 28], ["16", 58, 12], ["17", 44, 9],
  ["18", 126, 29], ["19", 139, 31], ["20", 133, 26], ["21", 149, 33], ["22", 141, 30], ["23", 62, 13], ["24", 48, 10],
  ["25", 134, 25], ["26", 145, 29], ["27", 152, 35], ["28", 137, 28], ["29", 143, 31], ["30", 67, 14], ["31", 51, 11],
  ["01 Sep", 147, 32], ["02", 157, 36], ["03", 142, 27], ["04", 151, 33], ["05", 138, 29], ["06 Sep", 59, 12],
].map(([date, ai, human]) => ({ date, ai, human }));

const navItems = [
  { label: "Dashboard", icon: Gauge, active: true },
  { label: "Inbox", icon: Inbox, count: "24" },
  { label: "Chats", icon: MessageCircleMore },
  { label: "Base de Conocimiento", icon: BookOpen },
  { label: "Configuración", icon: Settings },
];

const metrics = [
  {
    label: "Volumen de Consultas",
    value: "3.588",
    detail: "+18.4% vs. mes anterior",
    note: "Últimos 30 días de actividad WhatsApp",
    tone: "success",
  },
  {
    label: "Horas Ahorradas",
    value: "588.6 h",
    detail: "12 min promedio ahorrado por chat",
    note: "Equivale a ~3.7 asesores FTE de ventas liberados",
    tone: "neutral",
  },
  {
    label: "Tasa de Resolución IA",
    value: "82%",
    detail: "2.943 resueltas por IA",
    note: "Sin intervención de asesor humano",
    tone: "success",
  },
  {
    label: "Derivadas a Humano",
    value: "645",
    detail: "18% escaladas a cierre",
    note: "Leads calificados para asesor comercial",
    tone: "ceibo",
  },
];

function BrandMark() {
  return (
    <div className="grid size-11 shrink-0 place-items-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground shadow-action">
      C
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[252px] flex-col bg-sidebar text-sidebar-foreground lg:flex">
      <div className="flex items-center gap-3 px-6 py-7">
        <BrandMark />
        <div>
          <p className="font-display text-[17px] font-bold leading-none text-sidebar-accent-foreground">Ceibo AI</p>
          <p className="mt-1 text-[11px] font-medium text-sidebar-foreground/55">Ventas por WhatsApp</p>
        </div>
      </div>

      <nav aria-label="Navegación principal" className="space-y-1 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.active ? "#dashboard" : `#${item.label.toLowerCase().replaceAll(" ", "-")}`}
              aria-current={item.active ? "page" : undefined}
              className={`flex h-11 items-center gap-3 rounded-md px-3 text-sm font-semibold transition-colors ${
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/65 hover:bg-sidebar-accent/55 hover:text-sidebar-accent-foreground"
              }`}
            >
              <Icon className="size-[18px]" strokeWidth={1.8} />
              <span>{item.label}</span>
              {item.count ? (
                <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-[11px] text-primary-foreground">{item.count}</span>
              ) : null}
            </a>
          );
        })}
      </nav>

      <div className="mt-auto p-4">
        <div className="border-t border-sidebar-border pt-4">
          <div className="flex items-start gap-3 rounded-md bg-sidebar-accent/65 p-3.5">
            <div className="relative mt-0.5">
              <Bot className="size-5 text-sidebar-accent-foreground" strokeWidth={1.8} />
              <span className="live-pulse absolute -right-1 -top-1 size-2.5 rounded-full border-2 border-sidebar-accent bg-success" />
            </div>
            <div>
              <p className="text-xs font-bold text-sidebar-accent-foreground">Bot WhatsApp</p>
              <p className="mt-1 text-[11px] font-semibold text-success">Operativo</p>
              <p className="mt-1 text-[11px] leading-4 text-sidebar-foreground/55">Atención comercial automatizada activa 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="flex min-h-16 items-center gap-3 px-4 sm:px-6 xl:px-8">
        <div className="flex items-center gap-2 lg:hidden">
          <BrandMark />
          <span className="hidden font-display text-sm font-bold sm:block">Ceibo AI</span>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate text-sm font-bold">Ceibo AI Tech Solutions</p>
            <span className="hidden rounded bg-ceibo-soft px-2 py-1 text-[10px] font-bold text-ceibo sm:inline">ENTERPRISE</span>
          </div>
          <div className="mt-0.5 hidden items-center gap-1.5 text-[11px] text-muted-foreground sm:flex">
            <MessageCircleMore className="size-3.5 text-success" />
            <span>+54 9 11 5482-0916</span>
            <span className="size-1 rounded-full bg-border" />
            <span className="font-semibold text-success">Conectado</span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3 border-l border-border pl-3">
          <div className="hidden text-right md:block">
            <p className="text-xs font-bold">Gonzalo Vicente</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">gonzalo@ceibo.ai</p>
          </div>
          <div className="grid size-9 place-items-center rounded-md bg-accent font-display text-xs font-bold text-accent-foreground">GV</div>
          <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
        </div>
      </div>
    </header>
  );
}

function MetricBand() {
  return (
    <section aria-label="Métricas principales" className="mt-6 overflow-hidden rounded-lg border border-border bg-card shadow-panel">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-border">
        {metrics.map((metric, index) => (
          <article
            key={metric.label}
            className={`relative min-h-48 p-5 ${index < 2 ? "border-b border-border xl:border-b-0" : ""} ${index % 2 === 0 ? "sm:border-r sm:border-border xl:border-r-0" : ""}`}
          >
            <div className={`absolute inset-x-0 top-0 h-1 ${metric.tone === "ceibo" ? "bg-ceibo" : metric.tone === "success" ? "bg-success" : "bg-foreground/20"}`} />
            <p className="text-sm font-bold text-muted-foreground">{metric.label}</p>
            <p className={`mt-3 font-display text-[38px] font-bold leading-none ${metric.tone === "ceibo" ? "text-ceibo" : "text-foreground"}`}>{metric.value}</p>
            <p className={`mt-3 text-xs font-bold ${metric.tone === "success" ? "text-success" : metric.tone === "ceibo" ? "text-ceibo" : "text-foreground/70"}`}>{metric.detail}</p>
            <p className="mt-2 max-w-[27ch] text-[11px] leading-4 text-muted-foreground">{metric.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ActivityTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-border bg-card px-3 py-2 shadow-panel">
      <p className="mb-1.5 text-xs font-bold">{label}</p>
      {payload.map((item) => (
        <p key={item.name} className="text-[11px] text-muted-foreground">
          <span className="font-bold text-foreground">{item.value}</span> {item.name}
        </p>
      ))}
    </div>
  );
}

function ActivityChart() {
  return (
    <section className="mt-5 border border-border bg-card p-5 shadow-panel sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Boxes className="size-5 text-primary" strokeWidth={1.8} />
            <h2 className="font-display text-lg font-bold">Evolución de consultas</h2>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Últimos 30 días · 12 Ago a 06 Sep</p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-muted-foreground">
          <span className="flex items-center gap-2"><span className="size-2.5 rounded-sm bg-success" />Resueltas por IA</span>
          <span className="flex items-center gap-2"><span className="size-2.5 rounded-sm bg-ceibo" />Derivadas a humano</span>
        </div>
      </div>
      <div className="mt-5 h-[310px] w-full" aria-label="Gráfico de consultas resueltas por IA y derivadas a humano">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={activity} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="aiFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--success)" stopOpacity={0.28} />
                <stop offset="100%" stopColor="var(--success)" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="humanFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--ceibo)" stopOpacity={0.2} />
                <stop offset="100%" stopColor="var(--ceibo)" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--grid-line)" vertical={false} strokeDasharray="3 5" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 10 }} interval={4} dy={8} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 10 }} />
            <Tooltip content={<ActivityTooltip />} cursor={{ stroke: "var(--border)", strokeWidth: 1 }} />
            <Area type="monotone" dataKey="ai" name="resueltas por IA" stroke="var(--success)" strokeWidth={2.5} fill="url(#aiFill)" activeDot={{ r: 4, fill: "var(--success)", stroke: "var(--card)", strokeWidth: 2 }} />
            <Area type="monotone" dataKey="human" name="derivadas a humano" stroke="var(--ceibo)" strokeWidth={2.5} fill="url(#humanFill)" activeDot={{ r: 4, fill: "var(--ceibo)", stroke: "var(--card)", strokeWidth: 2 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <div id="dashboard" className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="lg:pl-[252px]">
        <Topbar />
        <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 xl:px-8 xl:py-8">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-7 items-center gap-2 rounded-full border border-success/25 bg-success/10 px-2.5 text-xs font-bold text-success">
                  <span className="live-pulse size-2 rounded-full bg-success" /> En Vivo
                </span>
                <span className="text-xs text-muted-foreground">Actualizado hace 2 min</span>
              </div>
              <h1 className="max-w-[22ch] font-display text-3xl font-bold leading-[1.08] sm:text-4xl">Dashboard de Rendimiento WhatsApp</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">Métricas comerciales en tiempo real para Ceibo AI Tech Solutions (ENTERPRISE)</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button aria-label="Actualizar métricas"><RefreshCw className="size-4" />Actualizar</Button>
              <Button><MessageCircleMore className="size-4" />Ver Chats</Button>
              <Button variant="primary"><Sparkles className="size-4" />Entrenar Asistente</Button>
            </div>
          </div>

          <MetricBand />
          <ActivityChart />

          <footer className="mt-5 flex flex-col gap-3 border border-accent/20 bg-accent/5 p-4 sm:flex-row sm:items-center">
            <div className="grid size-10 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground">
              <ShieldCheck className="size-5" strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold">Seguridad multi-tenant activa</p>
              <p className="mt-0.5 text-xs leading-5 text-muted-foreground">Todas las consultas y registros están aislados criptográficamente para la empresa <span className="font-bold text-foreground">[CEI-AR-7F42A9]</span>.</p>
            </div>
            <div className="ml-auto hidden items-center gap-2 text-xs font-semibold text-success md:flex">
              <LockKeyhole className="size-4" /> Protección verificada
            </div>
          </footer>

          <div className="mt-5 flex items-center justify-between text-[11px] text-muted-foreground lg:hidden">
            <span className="flex items-center gap-2 font-semibold text-success"><span className="live-pulse size-2 rounded-full bg-success" />Bot WhatsApp operativo 24/7</span>
            <CircleUserRound className="size-4" />
          </div>
        </main>
      </div>
    </div>
  );
}