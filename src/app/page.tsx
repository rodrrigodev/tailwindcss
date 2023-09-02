export default function Home() {
  return (
  <div className="p-8 bg-slate-50 text-slate-900 h-screen flex flex-col items-center text-center dark:bg-slate-900 dark:text-slate-100">
    <div className="max-w-2xl">
    <h1 className='text-3l lg:text-5xl sm:text-4xl font-bold'>
      Rapidly build modern websites without ever leaving your HTML.
    </h1>
    <p className="mt-2 dark:text-slate-400">
      A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
    </p>
    <button className="px-4 py-2 rounded-md text-white mt-4 font-medium dark:bg-sky-400 bg-sky-500 dark:text-sky-950">
      Sign in
    </button>
    </div>
  </div>
  )
}
