import React from "react";

function Parent({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <React.Fragment>
      <h1 className="text-blue-600 font-bold text-4xl">This is the parent</h1>
      {children}
    </React.Fragment>
  );
}

export default Parent;
