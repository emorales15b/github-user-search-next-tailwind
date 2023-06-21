import GithubLogo from "@/components/icons/GithubIcon"

const UserCardInfo = () => {
  return (
    <article className="rounded-xl bg-blue-900 p-2 text-white grid-areas">
        <div className="section-log grid h-24 w-24 place-content-center rounded-full bg-gray-200 p-1">
            <GithubLogo className="relative top-2 h-full w-full" />
        </div>
        <div className="section-title">
            <h2>The Octocat</h2>
            <p>@octocat</p>
        </div>
        <p className="section-date">Joined 25 Jan 2011</p>
        <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dictum enim. Suspendisse ultrices auctor metus. Nulla semper magna sit amet felis molestie consectetur. Nullam vitae sapien eu odio molestie euismod sed ut ante. Quisque nec maximus dui, vitae pharetra libero. Integer ullamcorper risus eget est malesuada eleifend. Quisque sit amet nisl cursus, vestibulum dui sed, dapibus felis. Duis vel enim risus.
        </p>
        <div className="section-number flex justify-around bg-blue-950">
            <article>
                <p>Repos</p>
                <p>8</p>
            </article>
            <article>
                <p>Followers</p>
                <p>3939</p>
            </article>
            <article>
                <p>Following</p>
                <p>9</p>
            </article>
        </div>

        <div className="section-social md:grid md:grid-cols-2">
            <article>
                <i>Icono</i>
                <p>San Francisco</p>
            </article>
            <article>
                <i>Icono</i>
                <p>San Francisco</p>
            </article>
            <article>
                <i>Icono</i>
                <p>San Francisco</p>
            </article>
            <article>
                <i>Icono</i>
                <p>San Francisco</p>
            </article>
        </div>

    </article>
  )
}

export default UserCardInfo