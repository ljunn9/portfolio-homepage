import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Lukas Junn's Next.js Portfolio</h1>
      <p>
        <Link href="/about">About Me</Link>
      </p>
      <p>
        <Link href="/projects/project-one">View Project</Link>
      </p>
    </div>
  );
}
