import GithubIcon from "@/components/icons/GithubIcon"
import LocationIcon from "@/components/icons/LocationIcon"
import LinkIcon from "@/components/icons/LinkIcon"
import TwitterIcon from "@/components/icons/TwitterIcon"
import BuildingIcon from "@/components/icons/BuildingIcon"
import { User } from "@/interfaces/user"

interface Props {
    user: User
}


const UserCardInfo = ({user} : Props ) => {
  return (
    <article className="rounded-xl bg-blue-900 p-4 text-white grid-areas">
        <div className="section-logo grid h-24 w-24 place-content-center rounded-full bg-gray-200 p-1 mr-3 lg:mx-auto">
            <GithubIcon className="relative top-2 h-full w-full" />
        </div>
        <div className="section-title">
            <h2 className="font-bold text-3xl">{user?.name}</h2>
            <p>@{user?.login}</p>
        </div>
        <p className="section-date lg:text-right">
            {new Date(user?.created_at || "").toLocaleDateString("es", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        </p>
        <p className="section-description mt-8 leading-loose">
            {user.bio  || "Sin user bio" }
        </p>
        <div className="section-number mt-4 flex justify-around bg-blue-950 p-8 rounded-xl text-center">
            <article>
                <p>Repos</p>
                <p className="font-bold txt-xl">{user.public_repos}</p>
            </article>
            <article>
                <p>Followers</p>
                <p  className="font-bold txt-xl">{user.followers}</p>
            </article>
            <article>
                <p>Following</p>
                <p className="font-bold txt-xl">{user.following}</p>
            </article>
        </div>

        <div className="section-social md:grid md:grid-cols-2 mt-4 space-y-3">
            <article className="flex space-x-2">
                <i>
                    <LocationIcon className="h-full w-full fill-white" width={"1rem"}/>
                </i>
                <span>{user.location || "not information"}</span>
            </article>
            <article className="flex space-x-2">
                <i>
                    <LinkIcon className="h-full w-full fill-white" width={"1rem"} />
                </i>
                <a href={`https://${user?.blog}`}>{user?.blog}</a>
            </article>
            <article className="flex space-x-2">
                <i>
                    <TwitterIcon className="h-full w-full fill-white" width={"1rem"} />
                </i>
                <a href={`https://twitter.com/${user?.twitter_username}`}>{user?.twitter_username  || 'not information' }</a>
            </article>
            <article className="flex space-x-2">
                <i>
                    <BuildingIcon className="h-full w-full fill-white" width={"1rem"} />
                </i>
                <span>{user?.company  || "not information" }</span>
            </article>
        </div>

    </article>
  )
}

export default UserCardInfo