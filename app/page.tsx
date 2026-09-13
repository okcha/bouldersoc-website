
import Link from 'next/link';

export default function Page() {

    const links = [
        { name: "Rubric - Membership Sign Up Form", url: "https://campus.hellorubric.com/?s=8625"},
        { name: "Instagram", url: "https://www.instagram.com/unswbouldersoc/"},
        { name: "Discord", url: "https://discord.gg/vbQ4VcneA2"},
    ];

    return (
        <main className="min-h-screen bg-society-blue flex flex-col items-center justify-center gap-8">
            <h1 className="text-white text-5xl font-bold">UNSW BoulderSoc</h1>

            <div className="flex flex-col items-center gap-4">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.url}
                        className="text-blue-400 hover:underline text-xl"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </main>
    );
}


/*

to do:
move instagram and discord links to footer icon 
move rubric link to memberships

now we can start working on the main page (get a draft before making it look stellar)
"welcome to unsw bouldersoc!"
a little about us section 
a little events section (with link to events tab)
a little memberships section (with link to memberships tab)
a little merch section (with link to merch tab)


header:
bouldersoc logo on left

on right:
about us section - little rant about the society 
membership section - list all the perks 
gallery - documentary of past events + fire photos
merch category - advertising our shirts 

footer:
unsw logo, arc logo
sponsors (red bull etc) and partnered with (all gym and store logos)
contact us - give email?
shameless plug?
*/