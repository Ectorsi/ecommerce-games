import Home from 'templates/Home';

export default function Index(props: any) {
  return <Home {...props} />
}

export function getServerSideProps() {
  // Aqui vc faz a lógica
  // Pode tb buscar dados numa API

  // E depois vc pode retornar os dados
  return {
    props: {
      heading: 'Olha eu aqui!!!! 1234 ssr'
    }
  }
}
