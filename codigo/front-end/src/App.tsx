import './App.css';
import FormSection from './components/FormSection';
import Header from './components/Header';
import PetShopCard from './components/PetShopCard';

const petShopData = [
  {
    title: "Meu Canino Feliz",
    description: "Está distante a 2km de distância. Em dias de semana o banho para cães pequenos custa R$20,00 e o banho em cães grandes custa R$40,00. Durante os finais de semana o preço dos banhos é aumentado em 20%."
  },
  {
    title: "Vai Rex",
    description: "Está localizado a 1,7km de distância. O preço do banho para dias úteis em cães pequenos é R$15,00 e em cães grandes é R$50,00. Durante os finais de semana o preço para cães pequenos é R$ 20,00 e para os grandes é R$ 55,00"
  },
  {
    title: "ChowChawgas",
    description: "Fica a 800m de distância. O preço do banho é o mesmo em todos os dias da semana. Para cães pequenos custa R$30 e para cães grandes R$45,00."
  }
];

function App() {

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
          {petShopData.map((petShop, index) => (
            <PetShopCard key={index} title={petShop.title} description={petShop.description} />
          ))}
        </div>
      </section>
      <FormSection />
    </main>
  </div>
);
}

export default App
