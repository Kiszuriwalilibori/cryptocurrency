import { memo } from "react";

import "./_logo.scss";

const Logo = memo(() => (
  <header className="logo">
    <h1>CryptoCurrency Tracker</h1>
  </header>
));

export default Logo;
