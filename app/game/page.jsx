import { redirect } from 'next/navigation';

// Redirects to the static game file at public/game.html
// Copy your worst-eleven.html to public/game.html to make this work
export default function GamePage() {
  redirect('/game.html');
}
