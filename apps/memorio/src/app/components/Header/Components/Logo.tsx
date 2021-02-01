import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../auth/ProvideAuth';

export const Logo = () => {
  const auth = useAuth();
  return (
    <div className="header__logo logo">
      <Link to={ !auth.user ? "/" : "/dashboard" }>MEMORIO</Link>
    </div>
  );
}
export default Logo;
