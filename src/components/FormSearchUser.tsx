"use client"
import SearchIcon from "@/components/icons/SearchIcon"

interface Props{
  getUser: (user: string) => Promise<void>;
}

const FormSearchUser = ({getUser} : Props) => {

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    if(!username) return;
    await getUser(username)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-2 rounded-xl bg-blue-900 p-4 mb-6">
        <span className="min-w-[20px]">
          <SearchIcon className="fill-sky-500" />
        </span>
        <input name="username" className="h-14 flex-1 p-2 rounded-lg bg-transparent text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Search Github username..." type="text" />
        <button className="bg-sky-400 rounded-lg py-2 px-4 text-white font-bold">Buscar</button>
      </form>
  )
}

export default FormSearchUser