// Homepage - Redirects to Templates page (default V1 behavior)

import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/templates');
}
