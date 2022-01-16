import Game, { GameTemplateProps } from 'templates/Game';
export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

// Gerar em build time
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'the-witcher-3-wild-hunt' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover: 'https://i.ytimg.com/vi/NRpNHcniTfE/maxresdefault.jpg'
    }
  }
}