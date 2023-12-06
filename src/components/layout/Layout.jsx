function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full h-full">
      {children}
    </div>
  );
}

export default Layout;
