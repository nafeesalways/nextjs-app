import React from 'react';
import { getServerSession } from 'next-auth';

import Login from './components/Login';
import UserInfo from './components/UserInfo';
import { authOptions } from '@/lib/authOptions';
import Logout from './components/LogoutButton';

export default async function Page() {
  // Get the session on the server side
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-6">
      
      {/* Server-rendered greeting */}
      <h2 className="text-2xl font-semibold">Hello World</h2>

      {/* Login component (Client-side) */}

      {session?.user ? <Logout></Logout> : <Login />}
      

      {/* Info from Client Component */}
      <p className="font-bold text-xl">From Client Component</p>

      {/* UserInfo component (Client-side) */}
      <UserInfo />

      {/* Display the full session object */}
      <pre className=" p-4 rounded text-sm">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}
