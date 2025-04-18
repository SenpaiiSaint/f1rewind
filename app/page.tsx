" use client ";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">F1 Rewind</h1>
      <p>Your gateway to every past F1 race, live fantasy leagues & community chats.</p>
      <div className="flex gap-4">
        <LinkButton href='/races'>Browse Races</LinkButton>
        <LinkButton href='/fantasy' outline>Fantasy League</LinkButton>
        <LinkButton href='/community' outline>Commmunity</LinkButton>
      </div>
    </div>
  );
}

function LinkButton({
  href,
  children,
  outline = false
}: { href: string; children: React.ReactNode; outline?: boolean }) {
  const base = 'px-4 py-2 rounded font-medium';
  const style = outline ? 'border border-red-600 text-red-600' : 'bg-red-600 text-white';
  return <a href={href} className={`${base} ${style}`}>{children}</a>
}