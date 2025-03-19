import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
  return(
    <aside className="bg-[var(--gray-800)] rounded-lg overflow-hidden">

      <img className="w-full h-[72px] object-cover" 
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className="flex flex-col items-center mt-[-1.5rem] -mt-[6px]">
        <img 
          className="w-[3rem] h-[3rem] rounded-[8px]" 
          alt="Avatar" 
          src="https://github.com/gelzieny.png" 
        />
        <strong className="mt-4 text-[var(--gray-100)] leading-[1.6]">
          Gelzieny R. Martins
        </strong>
        <span className="text-sm text-[var(--gray-400)] leading-[1.6]">
          Full Stack Developer
        </span>
      </div>


      <footer className="border-t border-[var(--gray-600)] mt-6 px-8 pb-8">
        <a href="#" className="w-full bg-transparent text-white border-[1px] border-purple-800 
            rounded-lg h-[50px] px-6 font-bold flex items-center justify-center gap-2 transition-colors 
            duration-100 hover:bg-purple-800 hover:text-[var(--white)]"
        >
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>

  )
}