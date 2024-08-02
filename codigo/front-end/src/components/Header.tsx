import React from 'react';

const Header: React.FC = () => (
  <header className="w-full bg-cyan-100 py-12 md:py-24 lg:py-32">
    <div className="container flex flex-col items-center justify-center gap-8 px-4 md:px-6">
      <img
        src="/dog.jpg"
        width="600"
        height="400"
        alt="Dog"
        className="mx-auto max-w-full rounded-xl object-cover"
      />
      <div className="mt-2 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Bem-vindo ao serviço de comparação de petshops!
        </h1>
        <p className="mt-6 text-lg md:text-xl mt-4">
          Encontre o melhor lugar para cuidar dos seus cães com apenas alguns cliques.
        </p>
      </div>
    </div>
  </header>
);

export default Header;