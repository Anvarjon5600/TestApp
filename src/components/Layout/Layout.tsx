import  { ReactNode } from 'react';
import './Layout.css';

function Layout({ children }: { children: ReactNode }) {
   return (
      <div className='layout'>
         {children}
      </div>
   );
}

export default Layout;