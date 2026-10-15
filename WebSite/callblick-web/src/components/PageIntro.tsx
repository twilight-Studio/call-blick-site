export default function PageIntro({ title, children }: { title: string; children: React.ReactNode }) {
  return <header className="page-intro page-shell flex min-h-[72vh] flex-col items-center justify-center text-center"><h1 className="display mx-auto">{title}</h1><div className="body-copy mx-auto">{children}</div></header>;
}
