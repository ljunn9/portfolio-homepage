import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Project: {id}</h1>
      <p>This is my project page for {id}.</p>
    </div>
  );
}
