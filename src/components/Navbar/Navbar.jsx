function Navbar() {
  return (
    <div className="w-full h-16 bg-slate-900 flex justify-between items-center px-18">
        <div className="text-2xl font-bold cursor-pointer"><a href="/">MySpace</a></div>
        <div className="flex gap-2">
            <button className="w-20 h-8 bg-neutral-100 text-gray-950 rounded-sm font-medium cursor-pointer hover:bg-slate-200">Log In</button>
            <button className="w-20 h-8 bg-neutral-100 text-gray-950 rounded-sm font-medium cursor-pointer hover:bg-slate-200">Log Out</button>
        </div>
    </div>
  )
}

export default Navbar