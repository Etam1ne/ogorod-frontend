import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <main className="flex h-full w-full">
      <nav className="h-screen min-w-[14rem] bg-green-700 p-8 sticky top-0">
        <ul className='text-white font-bold'>
          <li>Moisture</li>
          <li>Settings</li>
        </ul>
      </nav>

      <Outlet />

    </main>
  );
}
