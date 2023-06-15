import SearchIcon from "@/components/icons/SearchIcon"

const Home = () => {
  return (
    <>
      <form className="flex flex-wrap items-center gap-2 rounded-xl bg-blue-900 p-2">
        <span className="min-w-[20px]">
          <SearchIcon className="fill-sky-500" />
        </span>
        <input className="h-14 flex-1 p-2 rounded-lg bg-transparent text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Search Github username..." type="text" />
        <button className="bg-sky-400 rounded-lg py-2 px-4 text-white font-bold">Buscar</button>
      </form>
      <article>
        Todo el chamullo de la pagina
      </article>
    </>
  )
}

export default Home


