import { nav } from "@/data/nav";

const MobileNav = () => {
  return (
    <div className="bg-btnColor w-full h-full">
      <ul className="h-full flex flex-col justify-center no-underline items-center gap-y-8">
        {nav.map((item) => {
          // destructure item
          const { href, name } = item;
          return (
            <li className="no-underline" key={name}>
              <a className="link text-white-white text-xl" href={href}>
                {name}
              </a>
            </li>
          );
        })}
        <div className="item-center justify-center gap-8 flex flex-col lg:hidden">
          <a
            href="#"
            className="inline-block rounded-full bg-transparent px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="inline-block text-dark rounded-full bg-lightBg-b px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
          >
            Sign Up
          </a>
        </div>
      </ul>
    </div>
  );

  // return (
  //   <div class="hidden md:block">
  //     <nav aria-label="Global">
  //       <ul class="flex items-center gap-6 text-sm">
  //         {nav.map((value) => {
  //           return (
  //             <li key={value.name}>
  //               <a
  //                 class="text-black transition font-sans font-medium hover:text-black/75"
  //                 href={value.href}
  //               >
  //                 {value.name}
  //               </a>
  //             </li>
  //           );
  //         })}

  //         <div className="item-center justify-center gap-8 flex flex-col lg:hidden">
  //           <a
  //             href="#"
  //             className="inline-block rounded-full bg-transparent px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
  //           >
  //             Sign Up
  //           </a>
  //           <a
  //             href="#"
  //             className="inline-block rounded-full bg-yellow-dark px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
  //           >
  //             Sign Up{" "}
  //           </a>
  //         </div>
  //       </ul>
  //     </nav>
  //   </div>
  // );
};

export default MobileNav;